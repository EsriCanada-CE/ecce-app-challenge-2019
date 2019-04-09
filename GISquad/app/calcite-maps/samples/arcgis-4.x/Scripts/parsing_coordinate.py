import re, time, pandas as pd, geopandas as gdp, os
from shapely.geometry import Point

os.getcwd()

csv_file = pd.read_csv("../Data/Tabular/LEED_Buildings.csv", delimiter = ",", header = 0, encoding = "utf-8") #Coordinate file 
ori_file = pd.read_csv("../Data/Tabular/project_profile.csv", delimiter = ",", header = 0, encoding = "utf-8") #Original file 

urls = csv_file.URLS.values.tolist()
address, lat, lon = [],[],[]
for i in range(0,len(urls),1):
	address.append(csv_file.loc[i,"Address"])
	temp = urls[i]
	temp = temp[re.search("@",temp).start()+1:]
	lat.append(float(temp[:re.search("-",temp).start()-1]))
	temp2 = temp[re.search("-",temp).start():]
	lon.append(float(temp2[:re.search(",",temp2).start()-1]))

df = pd.DataFrame({"Address":address, "Lat":lat, "Lon":lon})
new_df = pd.merge(ori_file, df, left_on = 'project_address', right_on = 'Address')
geometry = [Point(xy) for xy in zip(new_df.Lon, new_df.Lat)]
crs = {'init':'epsg:4326'}
gdf = gdp.GeoDataFrame(new_df, crs = crs, geometry = geometry)
gdf.to_file("../Data/Geospatial/LEED_Buildings.shp")