"""
Name: processing
Author: Ryan Parker
Created: 08/03/2019
Purpose: To process the zipped raw .las files and building footprints to produce
    three shapefiles that contain the amount of solar radiation received by each
    rooftop on the summer solticce, wintersolstice and the equinoxs.
"""

import os
import arcpy
import zipfile
import time
import datetime

#---------------------------------------------------------------------------------------------------

def process(fldr, outFldr, outGdb, build):
    arcpy.env.overwriteOutput = True
    arcpy.CheckOutExtension("Spatial")

    start = datetime.datetime.now()
    print(start)
    #fldr = r"C:\00_school\appChallenge"
    #outFldr = r"C:\00_school\appChallenge\output"
    #outGdb = os.path.join(outFldr, "output.gdb")
    outFinal = os.path.join(outFldr,os.path.basename(fldr)+"_all.shp")
    #build = r"C:\00_school\appChallenge\AllOttawa_Buildings\Buildings_polygon_MTM9.shp"
    coord = arcpy.Describe(build).spatialReference.exportToString()
    days = [355, 172, 80]
    lat = "45.3748"
    sky = "200"
    outList = []
    extList = []

    for f in os.listdir(fldr):
        if f.endswith(".zip"):
            code = f[:-4]
            extFldr = os.path.join(fldr,code)

            print("Starting "+code)
            print("  Extracting files")
            zipPath = zipfile.ZipFile(os.path.join(fldr, f), 'r')
            zipPath.extractall(extFldr)
            zipPath.close()
            extList.append(extFldr)

            las = os.path.join(extFldr, os.listdir(extFldr)[0])
            ras = os.path.join(extFldr,"r"+code+".tif")

            print("  Converting las to raster")
            arcpy.LasDatasetToRaster_conversion(in_las_dataset=las, out_raster=ras,
                value_field="ELEVATION", interpolation_type="BINNING AVERAGE NONE",
                data_type="FLOAT", sampling_type="CELLSIZE", sampling_value=1, z_factor=1)

            print("  Defining projection")
            arcpy.DefineProjection_management(in_dataset=ras, coor_system=coord)

            print("  Running solar analysis")
            solList = []
            for d in days:
                if d == days[0]:
                    sol = os.path.join(extFldr,"ws"+code+".tif")
                elif d == days[1]:
                    sol = os.path.join(extFldr,"ss"+code+".tif")
                else:
                    sol = os.path.join(extFldr,"eq"+code+".tif")
                solList.append(sol)
                t = "WithinDay "+str(d)+" 0 24"
                arcpy.gp.AreaSolarRadiation(ras, sol, lat, sky, t)

            print("  Generating footprint")
            zeroExp = """\"""" + ras + """\" * 0 """
            zeroRas = os.path.join(extFldr, "z"+code+".tif")
            intRas = os.path.join(extFldr, "i"+code+".tif")
            rasFp = os.path.join(extFldr,"fp"+code+".shp")

            arcpy.gp.RasterCalculator_sa(zeroExp, zeroRas)
            arcpy.gp.Int_sa(zeroRas, intRas)
            arcpy.RasterToPolygon_conversion(intRas, rasFp, "SIMPLIFY", "VALUE")

            print("  Clipping Buildings")
            buildClip = os.path.join(extFldr,"build"+code+".shp")
            arcpy.Clip_analysis(in_features=build, clip_features=rasFp, out_feature_class=buildClip)

            print("  Generating stats")
            field = arcpy.ListFields(dataset=buildClip, field_type="OID")[0]
            tblList = []
            lyr = buildClip[:-4]+".lyr"
            arcpy.MakeFeatureLayer_management(in_features=buildClip, out_layer=lyr)
            for s in solList:
                tbl = s[:-4]+"_tbl.dbf"
                tblList.append(tbl)
                arcpy.sa.ZonalStatisticsAsTable(in_zone_data=buildClip, zone_field=field.name,
                    in_value_raster=s, out_table=tbl, statistics_type="MEAN")
                field2 = arcpy.ListFields(dataset=tbl, field_type="OID")[0]
                arcpy.AddJoin_management(in_layer_or_view=lyr, in_field=field.name, join_table=tbl,
                    join_field=field2.name)

            print("  Exporting Data")
            output = os.path.join(outGdb,"out_"+code)
            outList.append(output)
            arcpy.CopyFeatures_management(in_features=lyr, out_feature_class=output)

            flds =  arcpy.ListFields(dataset=output)
            for fld in flds:
                name = fld.name
                if name.endswith("MEAN"):
                    if name.startswith("ws"):
                        arcpy.AlterField_management(in_table=output, field=name,
                            new_field_name="WS_MEAN", new_field_alias="WS_MEAN")
                    elif name.startswith("ss"):
                        arcpy.AlterField_management(in_table=output, field=name,
                            new_field_name="SS_MEAN", new_field_alias="SS_MEAN")
                    else:
                        arcpy.AlterField_management(in_table=output, field=name,
                            new_field_name="EQ_MEAN", new_field_alias="EQ_MEAN")
            for fld in flds:
                if fld.type != "OID" and not fld.name.startswith("Shape") and not fld.name.endswith("MEAN"):
                    arcpy.DeleteField_management(in_table=output, drop_field=fld.name)

            curr = datetime.datetime.now()
            elap = curr-start
            print(code+" complete. "+str(curr)+" Time elapsed: "+str(elap))
    if len(os.listdir(fldr)) != 0:
        print("Merging output layers")
        arcpy.Merge_management (inputs=outList, output=outFinal)

    print("\nI AM INVINCIBLE")
    return(extList)
