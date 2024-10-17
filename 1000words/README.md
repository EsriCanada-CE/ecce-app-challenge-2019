# 1000words: A Fredericton flood event showcase
__Submission for the 2019 ESRI ECCE App Challenge__

## __One map, 1000words__

### Team

Odysseas Vlachopoulos: Web Mapping Application implementation, Data processing

Mingke Li: Lead Web Mapping Application implementation

Team Member 3: Media marketing


## Mission Statement

From a historical perspective, communities are formed around water bodies in the early days of settling Canada due to the necessity of shipping and transport. This can be seen quite evidently in maritime Canada, specifically Fredericton, New Brunswick. Seasonally, Fredericton experiences flooding to varying degrees as a function of snow and ice melt and precipitation. This is generally seen in the early spring during the months of April and May. While Fredericton and area residents may come to expect these conditions, it is of immense importance to be prepared for it. It is also essential to create systems to monitor the event as it unfolds in real time, in order to best plan mitigation procedures such as closing roads or evacuating areas of concern. That process however, cannot solely rest on the shoulders of municipal and emergency authorities. It is something that we as a community must all take on. With accessible mobile geospatial tools, the community becomes involved in monitoring efforts, by virtue of wherever they happen to be when water levels are rising. Therein providing the empirical information from a multitude of locations. This information is key to build a larger picture of the situation as it progresses, and ultimately the planning to manage it.  
Currently in place is New Brunswick River Watch, a provincial initiative that provides forecasting and updates to the public during flood events. However – it is not always possible for municipal and monitoring staff to be everywhere at once, or at the particular time needed to identify key indicators of a progressing flood event. A centralized crowd sourced mobile app structured to gather the information required quickly and easily would greatly assist that initiative.  
To the purpose of the application, the 1000words web mapping application for Fredericton would allow for the collective dissemination of user input reports on various flood conditions as they progress, as well as real time water level statistics directly from provincial gauges. This would directly support provincial, municipal and community efforts in the mitigation of the flood. Moreover, the future use of the data collected will serve as highly valuable in future urban planning initiatives. Disaster management is no longer strictly the purview of official authorities, but a collective issue that the entire community can support. Many hands make light work, after all.  


## Benefit to the User

Presently, flood mitigation is taken on in part by the province and the municipality. However, more ‘boots on the ground’ is essential during the onset of these events, as the effects of seasonal flooding is wide reaching and not always predictable. Further, a centralized, geospatially based, and easily accessible repository to disseminate real time information would be tremendously useful in that all stakeholders have a central reference to work from and work with. Moreover, this data can be used in the future to evaluate the collective response and make improvements for the following season, in addition to future urban planning initiatives.  
The end user benefit is twofold, in that the benefit is experienced by the authorities mitigating the flood event, which in turn benefits the wider public. Not only could the use of the app be seen in the optimization of disaster management efforts at the time of the flood event, but also in the improvement of disaster management in the future. Additionally, it could also create an element of culture within the community, creating a standard of public participation in the support of regional efforts.  
Speaking to the characteristics of the app, overall centralization of empirical input from the user is a notable benefit. Specifically, in the front-end user portion, (future functionality, but displayed in the project) the user fills out a short survey on their smart device. The survey is tailored to collect information such as the perceived water level where the person is standing, their geographic location, time and interface to provide photos. The formatting of the survey is simple, therein removing the possibility the user will abandon completing it. The back-end of the app is the aggregation and dissemination as a desktop/cloud feature. This would allow authorities and community groups to view and monitor the information in real time, from anywhere, as well as compare to historical geospatial data as a separate layer. For instance, this app would provide a centralized platform to evaluate conditions and make informed decisions to enact emergency measures, such as closing roads, or city blocks. Optimization of available emergency staff is also a key consideration – the efficient evaluation of conditions in real time, disseminated geospatially would allow for efficient planning and use of emergency staff. It would also serve as a way for those staff to report on progressing conditions when they are present and responding to specific areas.  
The overreaching theme of this app is to connect what an individual sees in real time, with the bigger picture authorities and community groups seek to plan and manage, using the two ends of the same application. Moreover, because this app is accessed by the front end user on their mobile device, it is feasible that its continued use could become a part of wider community culture, therein creating an accepted standard of community and public involvement in disaster management support.  


## App Description & Features

Our application is created using the WebApp Builder for ArcGIS and ArcMap 10.6:

* __Data processing__

_Flood of 2018:_

For the flooding event of 2018, no official data have been released in the open domain. As it was a most recent example and one of the worst floods in the history of Fredericton with extensive damages and disaster impact in the region, we chose to show what available data could be found. Sentinel 2 satellite data was available for a very indicative day of flooding the event under clear skies. L1C Red, Green and Blue bands from 2018/05/02 were used.  These 10m spatial resolution bands were chosen for best showcase reproducibility as optical sensors in both aerial (e.g. from Unmanned Aircraft Systems for damage inspection) and satellites have RGB capturing capacities. The 3 bands were inserted in a classification process in ArcMap 10.6. The Random Trees classification algorithm was trained and used to distinguish between water bodies and the rest of the features, resulting in an excellent result.
The intersects of the city and the flood extents were calculated and are depicted as the most important to impact historical high risk areas within the city of Fredericton.

_Historical data for the 2018 flood event:_

For the historical data of the 2018 flood event, data from 2018/04/22 to 2018/05/10 were used. These data were corrected for ESRI standards and sampled using Python scripting, a capacity provided by ArcMap and Python for ArcGIS. 

* __Current functionalities__

The app allows the user to see the flood related data from the 2018 event as a historically informative function and an alias to a coexistent live version app to be developed.
User inputs for the flood extent and severity, survey results through the Survey123 functionality and real time data from that event are shown to the user that navigates through the current version of the app.


### Layer Description:

- User Input Layer: A layer of the user inputs regarding the flood severity based on the user's real-time experience, including if the spot can be passed by vehicles or pedestrian, and the water level ranks estimated by users. 

- Hydrometric Data Station: Saint John River at Fredericton; Shows the location of the New Brunswick hydrometric station SAINT JOHN RIVER AT FREDERICTON.

- High Risk Flooding Area: Flood high risk areas in Fredericton. These areas are the combined areas flooded during the major 2008 and 2018 spring flooding events through official and calculated data. 

- City Zones: Zoning spatial data that are used to show areas and property classification in Fredericton in accordance with community goals and visions for the future of this city and its neighborhoods. It is an important information layer for historical and currently flooded areas.

### Widgets Used:

- About widget: Creates content that displays in the information window. In 1000words WebApp it displays the basic information for the app itself and instructions on filling the Citizen Observation input and the Citizen Observatory Survey.

- Layer List widget: A list of operational layers and their legends, and allows users to turn individual layers on and off.

- Infographic widget: Visualize and monitor attributes and statistical data from extra data sources (Hydrometric Data Station: Saint John River at Fredericton).

- Time Slider widget: Enable users to view temporal layers in a map and play the animation to see how the data changes over time.

- Edit widget: Provide editing capabilities using an editable layer in a feature service.

- Filter widget: Allow users to limit the visibility of features in a layer.

- Directions widget: Provide a quick and efficient method of calculating turn-based directions between two or more locations.


## Data Sources

Data used in this web application are exclusively open data sources.

1.	Copernicus open satellite data from the Sentinel 2 mission. L1C Red, Green and Blue bands from 2018/05/02 were used (https://scihub.copernicus.eu/).  

2.	GeoNB Flood Risk Areas and Historical Floods spatial dataset for the 2008 flood event (http://www.snb.ca/geonb1/e/DC/catalogue-E.asp)

3.	Fredericton Z5 zoning spatial dataset, from the Fredericton Open Data portal (http://data-fredericton.opendata.arcgis.com/datasets/z5)

4.	Hydrometric Data For Saint John River At Fredericton: Extracted from the Environment and Climate Change Canada Historical Hydrometric Data web site (https://wateroffice.ec.gc.ca/mainmenu/historical_data_index_e.html) on 2019/03/28

5.	Water Levels extracted from River Watch Mobile App, GeoNB, created and maintained by Civic Tech Fredericton (http://geonb.snb.ca/rwm/)


## Application Link
https://mli11unbca.maps.arcgis.com/apps/webappviewer/index.html?id=e3c8c608a79740888d10b85baef5c5d3






