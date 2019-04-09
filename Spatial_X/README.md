 # Team: Spatial X  | App: CityJaunt

<p float="left">
  <img src="https://github.com/EsriCanada-CE/ecce-app-challenge-2019/raw/master/Spatial_X/images/Spatialx.png" alt="Spatial X"
	title="Team Name" width="150" height="120" />
  <img src="https://github.com/EsriCanada-CE/ecce-app-challenge-2019/raw/master/Spatial_X/images/CityJaunt.png" alt="CityJaunt"
	title="Team Name" width="150" height="120" />
</p>
 


# **Mission Statement**

With 55% of the world's population residing in urban areas and a projected increase to 68% by 2050,cities worldwide are undergoing a surge of rapid urbanization creating new urban challenges and stressors. Cities are looking to better manage affordable housing and adequate infrastructure to sustain growing populations, while taking on considerations on the long-term environmental and health effects of urban sprawl. Similarly, being the tenth largest Census Metropolitan Area (CMA) in Canada, the region of Kitchener-Waterloo, ON, is estimated to increase its population to 729,000 by 2031. 

In anticipation of these changes, the region have been actively incorporating the United Nations' Sustainable Development Goal 11 as part of their sustainable city initiative, releasing the [Active Transportation Master Plan](https://www.regionofwaterloo.ca/en/regional-government/resources/Reports-Plans--Data/Moving-Forward/Active-Transportation-Master-Plan.pdf)  and [Moving Forward 2031 Regional Transportation Master Plan](https://www.regionofwaterloo.ca/en/regional-government/resources/Reports-Plans--Data/Moving-Forward/Moving-Forward-2031-Regional-Transportation-Master-Plan-RTMP-Report-P-10-059.pdf). Along with intensive public consultation, current strategies outline a shift in increasing connectivity and urban compactness, changing the way people move throughout and beyond the Waterloo Region, building on the recent successes in increasing transit ridership, while supporting new cycling and pedestrian infrastructure. Our application, CityJaunt, strives to aide the Region, decision-makers, and its citizens in achieving for a highly connected, sustainable future.

**Active Transportation**

Our app aims to promote the use of active transportation, to use personal vehicles less for shorter trips, making use of other modes of transportation with a lower carbon footprint, such as public transport, cycling and walking. The Region is surprisingly well connected by a range of transportation options including bus routes, bike lanes, pedestrian walkways and the upcoming light rail transit (LRT) systems. Based on past studies and our analysis, the region is equipped with high levels of [walkability](https://www.regionofwaterloo.ca/en/living-here/cycling-and-walking.aspx), meaning many places can be travelled to solely by foot.

**Healthy Lifestyle**

With growing concerns on public health, the Canadian government have been partnering with private institutions, NGOs and cities to better the well-being of Canadians. The [World Health Organization (WHO)](https://www.who.int/news-room/fact-sheets/detail/physical-activity) has found that less than 60% of the world's population fail to achieve the minimum target for physical activity moderately for 30 minutes a day. Studies and the recent success of [health promotion apps](https://www.carrotapp.com/home-2/) prove that active transportation can be an easy and effective solution. CityJaunt encourages users to walk to compliment their healthy living guides as they plan their day-to-day trips around the Region.

**Cultural & Natural Heritage**

Every city is unique, dotted with local culture and heritage that make up the urban form. Aligning with the [UN's Sustainable Development Goal 11.4 and 11.7](https://sustainabledevelopment.un.org/sdg11),  the Region has a range green spaces, historical sites, recreational outlets and landmarks that are under-utilized and unexplored. Our goal is to introduce these spaces to the typical Waterluvian, incorporating them into their daily plans and travel routes to [increase awareness and local heritage, and raise neighbourhood satisfaction and well-being](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5451986/). 


# **Team Profiles**

<p align="center">
  <img src="https://github.com/EsriCanada-CE/ecce-app-challenge-2019/raw/master/Spatial_X/images/team.jpg" alt="Team photo"
	title="Team Name" width="450" height="300" />
</p>

**Aujas Bandlish - Developer**
 
Aujas (left) is in his final year of Geomatics at the University of Waterloo. Through the coop program, he gained a variety of experiences, working for Federal government (Statistics Canada), Municipal government (York Region and Region of Waterloo), and private sector (BlueDot Global and Zayo Canada). These experiences have helped him in honing his GIS, data management and coding skills. In addition to that, he has taken part in the first National Geomatics Competition in New Brunswick and ranked second. These, coupled with personal projects and his academic career, have given him an opportunity to learn and experience the depths of GIS.
 
**Candy  Lee – Website and UX Designer**

Candy (centre-right) is a Geography and Environmental Management undergraduate, with a specialization in Geomatics at the University of Waterloo. Her interests lies with sustainable transportation and infrastructure planning with the use of spatial analysis tools such as Geographic Information Systems (GIS) and Remote Sensing. Equipped with the knowledge and experience from the technical, physical, and human side of geography, she hopes to enrich society's quality of life through the balanced aspirations of the public and private institutions. When Candy doesn't have her head wrapped around transportation and geomatics, she enjoys urban exploration, street photography, taking on challenges and suffers from chronic multi-tabs syndrome. 

**Netzach  Straker - Developer**
 
Netzach (right) is an Undergraduate student at the University of Waterloo studying Geomatics with a Computer Science minor. His passion lies with understanding the repercussions of land cover change by utilizing Geographic Information Systems and Remote Sensing. His purpose is to continue to advance the knowledge and experience so as to become proficient in his craft. During his free time Netzach enjoys reading, eating delicious foods, warm weather, and interacting with others through witty banter.
 
**Yuvna Apajee – Data finder and Documentation**
 
Yuvna (centre-left) is a third-year Honours Geomatics student at the University of Waterloo. She is also completing a minor in Urban Studies, with a focus in Urban Activity and the Environment. For her Coop, Yuvna worked for the City of Toronto, as a GIS analyst in the Transportation Division, dealing with the management and programming of Infrastructure and other Assets. Her free time is devoted to the Fifth generation of Transportation, which is being referred as, Hyperloop. She is part of the Infrastructure team and contributes towards maintaining government relations, as well as integrating GIS and Hyperloop in the many projects. Moreover, her world revolves around soccer !
 
 
  
# **App Description and Features**

<p align="center">
  <img src="https://github.com/EsriCanada-CE/ecce-app-challenge-2019/raw/master/Spatial_X/images/CityJaunt.png" alt="CityJaunt"
	title="Team Name" width="150" height="120"  />
</p>


CityJaunt was built using the Wep AppBuilder for ArcGIS, the developer edition. The application can be divided into two tools:
 
1.	Walking and biking routing service with nearest neighbour analysis.

	This tool provides a walking and biking routine service where the user can plan a trip. It mainly consists of a layer of 		Enhanced Points of Interest (EPOI), consisting of grocery stores, local parks, museums, galleries, recreation points, and bus 		stops to name a few. The user can drag a marker onto a location on the map or type the address. A buffer then finds the 		amenities around that area based on set distances. The distance is based on three different transportation modes – walking, 		biking and transit. 
 
2.	Identifying how sustainable a feature on the map is based on transportation types.
 
	To complement the routing service, the second tool allows the user to gain an understanding of how sustainable that route is. A 	network analysis has been conducted by taking different layers to determine which is the most sustainable areas based on service 	 areas using a least cost matrix. The weights are based on the time taken to reach a destination, through different             	transportation modes. The layers are targetable, and it is up to the user to enable the different points of interests.

The objective of CityJaunt is to encourage sustainable mobility in urban cities and therefore the following modes of travel and sustainability scores have been considered:

*	Transit, Biking and Walking
Public transit and roads with bike lanes are given a better sustainability score
*	Public transit and Walking
The use of public transit is complemented by walking. The kind of transit used determines the sustainability score


CityJaunt is aiming to raise awareness of how sustainable the cities are and hopefully, decision-makers can make informed decisions on how to improve the sustainability scores of certain neighbourhoods within the cities.

# **Calculations**

Step Calculations = Distance * 1000 * Average steps per meter

Average steps per meter = 1.31234 

Weights on which sustainability layer has been calculated :

Library and Schools - 0.05

Museums and Grocery Stores = 0.20

Parks = 0.50

# **How to Use CityJaunt**

The CityJaunt application allows its user to quickly explore their city, through its functionality. CityJaunt was made for the Region of Kitchener-Waterloo and consists of hundreds of potential points of interest for the user to explore. To use CityJaunt the user will need to supply a location to discover, upon providing a location the normal user will be able to find out what is within a 1 to 5 kilometers of the indicated location; categorized into various classes. Upon the user wanting to be able to navigate to a location the user is able to use CityJaunt’s routing feature illustrating the path that should be taken for a given mode of transportation (i.e. walking or biking) and provides incentive to the user by presenting the amount of steps that will be taken upon walking to their destination. CityJaunt also has another functionality for city planners and citizens with a more sustainable development mindset, via the suitability data layer which provides a fast visual regarding which locations are the most sustainable. 


# **Applicability in Other Cities**
 
CityJaunt can easily be adapted to other cities. The only challenge would be to find the layers of data required. The sustainability analysis conducted can be used to identify how sustainable a facility is, and then aggregate it to a city or neighbourhood of choice.  In addition, the user of the app can decide their most preferred way of transportation based on availability and tailor their trip in such a way that is it most sustainable. Moreover, CityJaunt can be expanded across multiple cities.
 
# **To the Future and Beyond**

CityJaunt 2.0 can be merged with health promotion apps like carrot, to promote sustainability as well. In addition, City resources and active transportation tips can be included in the application. Moreover, walkability and transit can be connected across cities, to cover the whole of Canada. Ultimately, CityJaunt 2.0 can turn into a sustainable trip planning and educative platform.


# **Limitations**
 
We tried to acquire the latest shapefiles from the open data portal. However, not all of them were up to date. For e.g. the GRT stops shapefile was from 2016. In addition, some road segments from the shapefile might have been missing. In addition, due to the time constraint in making the app, data accuracy and inclusion have been the main concerns. 
 
 Another limitation is the softwares used, as for instance, we were not able to upload raster files into ArcGIS online.

# **Data used**
 
All data was obtained from the City of Kitchener's and the City of Waterloo's Open Data portal. Each layer after being downloaded in shapefile format for each city, had to be merged together to create the final layers. 
 
 
# **Acknowledgement**
 
We would like to acknowledge ESRI Canada for the opportunity to take part in the ECCE 2019 App Challenge. 
 
We would also like to thank Michal Leahly from Esri Canada, Scott MacFarlane and Robert Feick, for their help and support throughout the competition week.
 
# **License**

CityJaunt is licensed under the GNU General Public License 3.0 open source license. As such, everyone is permitted to copy and distribute copies of the application.
 
 
# **References**
 
#Envision2030 Goal 11: Sustainable Cities and Communities | United Nations Enable. Retrieved from https://www.un.org/development/desa/disabilities/envision2030-goal11.html

68% of the world population projected to live in urban areas by 2050, says UN | UN DESA | United Nations Department of Economic and Social Affairs. (2018). Retrieved from https://www.un.org/development/desa/en/news/population/2018-revision-of-world-urbanization-prospects.html

About the ArcGIS Network Analyst extension tutorial—Help | ArcGIS Desktop. (2019). Retrieved from http://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/about-the-network-analyst-tutorial-exercises.htm
 
Carrot Rewards - earn your favourite points for living well. Retrieved from https://www.carrotapp.com/home-2/

City of Kitchener, "Open Data Catalogue", 2019
 
City of Waterloo, "Open Data Catalogue" , 2019

Cycling and Walking. Retrieved from https://www.regionofwaterloo.ca/en/living-here/cycling-and-walking.aspx
 
Gina A. Kiani. (2019). Development of Web GIS for Urban Sustanability Indicators. Oakland, California. Retrieved from 

Hassan, S. (2000). How sustainability criteria appear in urban sustainability literature, planning frameworks and specific initiatives. University of Waterloo.

Klopp, J., & Petretta, D. (2017). The urban sustainable development goal: Indicators, complexity and the politics of measuring cities. Cities, 63, 92-97. doi: 10.1016/j.cities.2016.12.019

Physical activity. (2018). Retrieved from https://www.who.int/news-room/fact-sheets/detail/physical-activity

Region of Waterloo. (2014). Region of Waterloo Active Transportation Master Plan. Region of Waterloo. Retrieved from https://www.regionofwaterloo.ca/en/regional-government/resources/Reports-Plans--Data/Moving-Forward/Active-Transportation-Master-Plan.pdf

Transportation Planning. (2010). Moving Forward 2031 - Regional Transportation Master Plan (RTMP). Region of Waterloo. Retrieved from https://www.regionofwaterloo.ca/en/regional-government/resources/Reports-Plans--Data/Moving-Forward/Moving-Forward-2031-Regional-Transportation-Master-Plan-RTMP-Report-P-10-059.pdf

Transportation | CIP. (2019). Retrieved from https://www.cip-icu.ca/Topics/Transportation#

Urban Environment. (2009). Urban Planning and Sustainable Development. Retrieved from http://www.vrm.ca/wp-content/uploads/EUE3_gauthier_en.pdf

What is Sustainable Urban Development. (2019). Retrieved from http://www.dupad.hku.hk/susurban/What%20is%20Sustainable%20Urban%20Development.htm

Zhang, Y., Van den Berg, A., Van Dijk, T., & Weitkamp, G. (2017). Quality over Quantity: Contribution of Urban Green Space to Neighborhood Satisfaction. International Journal Of Environmental Research And Public Health, 14(5), 535. doi: 10.3390/ijerph14050535



