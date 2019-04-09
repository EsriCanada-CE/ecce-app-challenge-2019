# SustainABLE Halifax by GeoPanda #

### Submission for the 2019 Esri Canada ECCE App Challenge ###
----------

### Team GeoPanda ###

![Team Photo](https://farm8.staticflickr.com/7814/40247373023_06ebf38af4_k.jpg)

We are a team of students from COGS who are passionate about maps!
We participated in order to take advantage of the learning opportunities presented, which allow us to apply and further develop the skills learned in class.

Robert Anderson: (left) I am from Hamilton, Ontario where I attended McMaster University, obtaining my BSc in Environmental Sciences with a Minor in GIS. After having the incredible opportunity to travel across Canada on the train, I returned to school to attend the Centre of Geographic Sciences for the Advanced Diploma in Geographic Sciences. I want to apply my GIS knowledge to improve the lives of people, particularly in the fields of transit and urban planning.

Anna Sobotka: (middle-left) I’m from Kelowna, and I graduated from the University of British Columbia with a BSc in Earth and Environmental Sciences. I worked in the forestry industry, then travelled throughout Europe before coming to the opposite side of Canada to see what the other side has to offer. I came to COGS because I’ve always been interested in maps, and I want to learn more about GIS applications in environmental monitoring.

Ellen Uppington: (middle-right) I’m from Newmarket, Ontario, and I attended the University of Toronto, where I completed a BSc in Computer Science. During my Bachelor’s, I also studied GIS applications and forest conservation, and worked with Environment Canada on improving the processing of their weather radar. I came to COGS to learn more about spatial data and analysis and to explore different avenues of technology in the field of GIS, and because I like maps!

Nicole Peters: (right) I’m from Prince Edward Island and did my BSc in Earth Sciences at Dalhousie University, which is where I got my first taste of GIS. From there I moved to Germany, where I lived for 7 years, also completing my MSc in Marine Geosciences at the University of Bremen. I returned to Canada and have now come to COGS to deepen my understanding of GIS and learn about new applications, particularly in the marine and coastal realms. I am excited to see where GIS, and 3D GIS, can take us!


### Mission Statement: ###
How sustainable is my neighbourhood? My community? What can I do to help?
These are some of the questions we wanted to answer with our app. 
In line with the UN's Sustainable Cities and Communities goal<a href="#Goal11"><sup>[1]</sup></a> of the Sustainable Development Goals, we developed an app which not only shows a ranking of sustainability, but provides information on how you can get involved. The UN's set of 17 goals<a href="#Goals"><sup>[2]</sup></a> outlines priorities for addressing some of the global challenges we face, enabling the world to develop and grow in a sustainable manner. Only by raising awareness and working together, can we help overcome these challenges.  

Halifax, Nova Scotia is a city with a long history of expansion and growth, making it a good choice to assess the current sustainability of a city which may not have grown in the most sustainable fashion. The availability of open source data for the city and province makes such an assessment possible.

We combined various datasets representing economic, social and environmental aspects of sustainability to create an overall sustainability index for a section of the city. Further views allow you to explore the various factors contributing to the sustainability of each area. This is presented along with locations such as community centres, libraries and community gardens - in short, places where you can learn more about sustainability or help make your community more sustainable.  

### Data Design: ###
The data were selected based on meeting the following criteria:   
	1. Established measure or indicator of sustainability<a href="#ISO"><sup>[3]</sup></a>   
	2. Data were freely available for this indicator  
	3. Available data were at an appropriate scale and spatial resolution (census dissemination areas)

Based on these criteria, we selected 8 indicators, in 3 categories, which we used to determine the sustainability of areas within Halifax. The following indicators were selected:

Economic | Social | Environmental   
------------ | ------------- | -------------  
Average household income | Percentage of post-secondary graduates | Percentage of land area covered by parks  
Unemployment rate | Percentage paying over 30% of income on housing | Percentage of area covered by water  
Percentage of population who do not drive to work | Population density

#### Indicator Descriptions: ####
Average household income is used as an indicator of the wealth of the neighbourhood.

Unemployment rate is an economic factor to examine the availability of jobs to those living in the neighbourhood.

The attribute of spending more than 30% of income on housing is often used as an indicator of poverty levels within a neighbourhood.

People not driving to work is an factor measuring the number of people in a neighbourhood who use methods other than a personal automobile to get to work, this includes public transit, bikes or walking.

The number of college grads is an indicator of education levels within a neighbourhood, which can be used to measure the development of the area.

Population density is being applied as a social factor because of the impacts having a very large number of people in close quarters can have on the way people interact.

The percent of parks is an environmental factor and generally having more well-maintained areas or greenspace in a neighbourhood has a positive effect on residents.

The percent of water within a region is very similar to the effect that park areas have, allowing people to escape the traditional elements of the city and having a positive effect.


### App Description and Features: ###
**Setup:**  
1. Download or clone the repository  
2. Deploy the app on a web server or virtual server (internet access is required to view the data layers)  
3. Once complete, go to the 'app' folder and launch 'index.html'. 

**Overview:**

Upon opening the app, you are presented with a summary map showing the overall sustainability for a section of Halifax. Four buttons across the top navigation bar can be used to switch between four different map views corresponding to the Summary, as well as the Economic, Social, and Environmental indicators. A collapsible info panel on the left side allows you to display additional information, the legend, or a list of layers which can be toggled on and off individually.

**Summary Map:**
As the starting page, the summary map presents an overall sustainability ranking based on the sum of all indicators for each dissemination area. Points show the locations of community resources related to sustainability. The drop-down menu in the Info panel can be used to display different categories of facilities where you can get involved - either to learn more about sustainability, or work towards making your community more sustainable. Clicking on any point will display a pop-up window with the name, type, and category of the selected feature. The layer tab in the Info panel also allows you to view the summary layers for each of the three categories of indicator (Economic, Social and Environment) by toggling them on and off, showing the contribution to the overall ranking for each category.  

**Economic:**  
Clicking on the Economic button at the top will bring up the summary layer for economic indicators, showing the contribution for each indicator. Through the layer list, you may also toggle on and off the layers for each of the individual indicators, allowing further data exploration.  

**Social:**  
Clicking on the Social button within the header will display the summary layer for the social indicators. Using the layer list, each of the individual layers may also be viewed.

**Environmental:**  
Following the pattern of the other two category maps, this map shows the summary layer for both environmental factors. Here, the layers representing the ranked percentage of area covered by parks and ranked percentage of water can be explored individually by toggling them on and off in the layer list.

### Data Processing: ###
Census profile data for 2016 were bulk downloaded<a href="Census"><sup>[A]</sup></a> for the Atlantic region, and extracted using a bash script. These data were then processed and transformed into a usable format using a Python 2.7 script.

Park and recreation area data from the Halifax Open Data Portal<a href="#HODP"><sup>[B]</sup></a> were combined to represent the total green area within the city. The percent of the area of each dissemination area covered by these features was then calculated. A similar process was used with the water data from GeoNOVA<a href="#GeoNOVA"><sup>[C]</sup></a>, resulting in the percentage of area covered by water for each dissemination area.

In order to combine the indicators in a meaningful manner, the range of values for each was divided into 10 ranks using a custom python script<a href="#Konrad"><sup>[4]</sup></a> based on the equal interval method. Indicators in each category were then combined in order to provide a total for each category. For this initial analysis, equal weightings were applied for each indicator, and for each category.

Locations and types of buildings were downloaded from the Halifax Open Data portal, and grouped into classes of types of buildings that would be useful for getting involved with the sustainability of the neighbourhood. The locations of community gardens were also extracted from a PDF hosted by St. Mary's University, and geocoded using ArcGIS Pro and the built-in geocoder. The community gardens were then added to the feature class containing the other building types.

### Limitations: ###
Due to the time constraints of the app challenge, we selected only 2-3 indicators from each of the three categories of indicators. Classifying each indicator according to equal intervals results in an unequal distribution of polygons per class, which may skew the overall result. An option such as quantile would have resulted in a more even distribution of polygons for each rank. Equal weights were applied to each indicator, as developing individual weighting factors was beyond the scope of this app. 

Combined Parks and Recreation data includes areas which have both natural and man-made surfaces. This means that this is not solely an environmental factor, as while the asphalt surface of a basketball court is a great amenity to have nearby, it neither absorbs rainfall nor produces oxygen.

The built-in symbolization options of ArGIS Online are somewhat restrictive when trying to display trivariate polygon data sets. Methods which we explored in ArcGIS Pro, such as dot density maps, are not supported and thus we had to use alternate symbolization strategies for these layers. 

Polygon layers representing communities within Halifax were available, however, they classified most of the Halifax Peninsula as a single community. As such, we were unable to find a suitable boundary layer for neighbourhoods and unfortunately time did not allow us to define our own. This would have been useful for aggregating the dissemination areas into meaningful divisions.

### Future Work: ###
A full sustainability analysis would involve many more factors, particularly in the environmental category, and have weights calculated to represent the importance and effect of each indicator. More data, and data at a finer resolution, would be needed in order to do a proper analysis.
 
In order to interpret the resulting sustainability rankings, census dissemination areas should be aggregated into meaningful neighbourhood regions. The difficulty here lies in defining the boundaries of neighbourhoods, as these are subjective and changing. Data could be aggregated based on defined neighbourhoods, in order to give a better representation of regions within the city.

Alternatively, multivariate clustering based on all 8 factors, with a spatial weights matrix would also allow the definition of 'zones' of suitability. This would also be better able to define which areas of the city are doing better or worse at certain aspects of sustainability, and may help to focus efforts on where they would have the greatest effect.

### Software Stack: ###
**Spatial Analysis:**  
ArcMap  
ArcGIS Pro    

**Data Hosting:**  
ArcGIS Online  

**User Interface:**  
ArcGIS API for JavaScript  
Calcite Maps

**Editors and IDEs:**  
MarkdownPad 2  
NetBeans 8.2

**Icons and Logos:**  
Buttons: <a href="https://www.flaticon.com/">Flaticon</a>  
Logo and other graphics created by Anna Sobotka

### Geospatial Open Data Sources: ###
<a href="https://www12.statcan.gc.ca/census-recensement/2016/dp-pd/index-eng.cfm](https://www12.statcan.gc.ca/census-recensement/2016/dp-pd/index-eng.cfm" id="Census">[A]Statistics Canada Census Data</a>  

<a href="http://catalogue-hrm.opendata.arcgis.com/](http://catalogue-hrm.opendata.arcgis.com/" id="HODP">[B]Halifax Open Data Portal</a>

<a href="https://nsgi.novascotia.ca/gdd/" id="GeoNOVA">[C]GeoNOVA Geographic Data Directory</a>  

<a href="http://https://smu.ca/webfiles/HRMCommunityGardenList.pdf" id="Gardens">[D]Community Garden Locations</a>  

<a href="https://earthexplorer.usgs.gov/" id="USGS">USGS Landsat Data (in video)</a>


### License: ###
This app is licensed under the GNU General Public License v3.0. See License.md for full details.

### References: ###
<a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2018/09/Goal-11.pdf" id="Goal11">[1]Sustainable Cities and Communities</a>  

<a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/" id="Goals">[2]UN Sustainable Development Goals</a>  

<a href="https://www.iso.org/standard/68498.html" id="ISO">[3]ISO Standard 37120:2018</a>  

<a id="Konrad">[4]</a>Python script to reclassify the polygon layers modified after Konrad Dramowicz.  

