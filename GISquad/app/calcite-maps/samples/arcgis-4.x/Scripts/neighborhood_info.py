import geopandas as gdp, pandas as pd, os, glob, jenkspy, time
from progressbar import ProgressBar

start_time = time.time()

os.chdir("../Data/Geospatial/Parsed_Final/Parsed")
pbar = ProgressBar()
neighbor_name, num_buildings, residential_num, industrial_num, lighting, lightCO2, lightTrees, numTrees, treesCO2 = [],[],[],[],[],[],[],[],[]
for i in pbar(glob.glob("*.shp")):
	neighbor_name.append(i[0:-4])
	temp = pd.DataFrame(gdp.read_file(i))

	# Get Natural Break values for symbology of each neighborhood and export it to csv files 
	height_breaks = jenkspy.jenks_breaks(temp[temp["AVG_HEIGHT"].notnull()].AVG_HEIGHT.values, nb_class=5)
	light_breaks = jenkspy.jenks_breaks(temp[temp["Lighting"].notnull()].Lighting.values, nb_class=5)
	light_co2_breaks = jenkspy.jenks_breaks(temp[temp["LightCO2"].notnull()].LightCO2.values, nb_class=5)
	num_trees_breaks = jenkspy.jenks_breaks(temp[temp["NumTrees"].notnull()].NumTrees.values, nb_class=5)
	trees_co2_breaks = jenkspy.jenks_breaks(temp[temp["TreesCO2"].notnull()].TreesCO2.values, nb_class=5)

	breaks_temp = list(zip(height_breaks, light_breaks, light_co2_breaks, num_trees_breaks, trees_co2_breaks))
	breaks_df = pd.DataFrame(breaks_temp, columns=["AVG_HEIGHT", "Lighting", "LightCO2", "NumTrees", "TreesCO2"])
	breaks_df.to_csv("../../../Tabular/Neighborhood_NBreaks/" + i[0:-4] + ".csv", sep = ",", encoding = "utf-8")
	
	num_buildings.append(len(temp))
	residential_num.append(len(temp.loc[temp["TYPE"] == "Residential"]))
	industrial_num.append(len(temp.loc[temp["TYPE"] == "Non-Residential"]))
	lighting.append(temp["Lighting"].sum())
	lightCO2.append(temp["LightCO2"].sum())
	lightTrees.append(temp["LightTrees"].sum())
	numTrees.append(temp["NumTrees"].sum())
	treesCO2.append(temp["TreesCO2"].sum())

df = pd.DataFrame({"Neighbor":neighbor_name, "NumBuildings":num_buildings, "NumResidential":residential_num, 
					"NumIndustrial":industrial_num, "Lighting":lighting, "LightCO2":lightCO2, 
					"LightTrees":lightTrees, "NumTrees":numTrees, "TreesCO2":treesCO2})

df.to_csv("../../../Tabular/Neighborhood_Info.csv", sep = ",", encoding = "utf-8")
print("--- %s seconds total ---" % (time.time() - start_time))