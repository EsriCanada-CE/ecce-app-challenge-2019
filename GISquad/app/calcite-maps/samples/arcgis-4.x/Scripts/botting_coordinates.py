from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
import requests, re, time, pandas as pd, os 
from random import randint
from progressbar import ProgressBar 

## Open current LEED certified buildings
os.getcwd()

leed_file = pd.read_csv("../Data/Tabular/project_profile.csv", delimiter = ",", header = 0, encoding = "utf-8")
leed_file = leed_file.dropna(subset=["project_address"])

driver = webdriver.Firefox()
driver.get("https://www.google.com/maps")

# Insert data in textbox 
address, urls = [],[]
pbar = ProgressBar()
project_address = leed_file.project_address.values.tolist()
for l in pbar(range(0,len(leed_file),1)):
	driver.find_element_by_id("searchboxinput").send_keys(project_address[l] + ", Toronto, Ontario", Keys.ENTER)
	time.sleep(randint(4,6))
	temp_url = driver.current_url
	address.append(project_address[l])
	urls.append(temp_url)
	time.sleep(randint(5,8))
	driver.find_element_by_id("searchboxinput").clear()
	
df = pd.DataFrame(list(zip(address, urls)), columns = ["Address", "URLS"])
df.to_csv("../Data/Tabular/LEED_Buildings.csv", sep = ",", encoding = "utf-8")