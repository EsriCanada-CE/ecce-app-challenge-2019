"""
Name: runProcessing
Author: Ryan Parker
Created: 15/03/2019
Purpose: To iterate through the folder and sub folders containing the zipped raw
    run the processing.py script and then delete unneeded files produced during
    the processing.
"""
import os
import time
import shutil
import processing

def main():
    mainFldr = r"E:\00_dataRyanParker\working"
    fldrList = []
    outFldr = r"E:\00_dataRyanParker\output"
    outGdb = os.path.join(outFldr, "output.gdb")
    build = r"E:\00_dataRyanParker\AllOttawa_Buildings\Buildings_polygon_MTM9.shp"

    for f in os.listdir(mainFldr):
        fldrList.append(os.path.join(mainFldr,f))

    if not os.path.exists(outFldr):
        os.makedirs(outFldr)

    if os.path.exists(outGdb):
        arcpy.Delete_management(outGdb)
    arcpy.CreateFileGDB_management(out_folder_path=os.path.dirname(outGdb), out_name=os.path.basename(outGdb))

    start = False
    for fldr in fldrList:
        if os.path.basename(fldr) == "f29":
            start = True
        if start:
            print("Processing folder "+str(fldr))
            tmpFldrs = processing.process(fldr, outFldr, outGdb, build)
            time.sleep(60)

            for tmp in tmpFldrs:
                try:
                    shutil.rmtree(tmp)
                except:
                    print("Could not remove "+tmp+" it will need to be removed manually")

if __name__ == '__main__':
    main()
