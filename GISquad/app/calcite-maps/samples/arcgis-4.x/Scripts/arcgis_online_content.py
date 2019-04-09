from arcgis import GIS
from getpass import getpass
import glob, os

os.getcwd()
file_list = [os.path.join(os.getcwd(), f) for f in glob.glob("*.shp")]

username = getpass("Enter username: ")
password = getpass("Enter password: ")
gis = GIS("https://mcmaster.maps.arcgis.com/home/signin.html", username, password)

for f in file_list:
	feature_properties = {
	'title':f,
	'description':'Buildings per Toronto neighborhoods',
	'tags':'buildings, neighborhoods, toronto'
	}
	gis.content.add(item_properties = feature_properties, data = 
