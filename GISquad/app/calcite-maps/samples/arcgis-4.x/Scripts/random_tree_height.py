import geopandas as gdp, os
from progressbar import ProgressBar
from random import randint

os.getcwd()
trees = gdp.read_file("../Data/Geospatial/StreetTree_WGS84_April_2016/TMMS_Open_Data_WGS84.shp")
pbar = ProgressBar()
tree_height = [(n*0)+randint(15,30) for n in pbar(range(0,len(trees),1))]
trees['tree_height'] = tree_height
trees.to_file("../Data/Geospatial/StreetTree_WGS84_April_2016/Toronto_Trees.shp") 