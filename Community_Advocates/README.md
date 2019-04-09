# **Open City - by Community Advocates**
*Transiting into the heart of commuters*

## ECCE App Challenge 2019
### Overview
The Open City app allows users to determine how accessible Calgary city services are to Calgary communities via public transportation.
This app is highly relevant to urban sustainability. The City of Calgary has recently implemented a smart city division, part of which involves improving the efficiency and effectiveness of transportation (City of Calgary, 2018).
It allows citizens to better understand the services they have access to via direct transit routes, inspiring them to explore new communities within Calgary, and offering alternatives to driving to essential services. 

# Meet our Team

We are a group of passionate students, inspired by the challenge to improve the sustainability of our cities through Esri platforms. We learned so much creating this app, including the value of teamwork, and we had some fun too!

**Joyce Percel**: Joyce is a first year PhD student in the Department of Geography at the University of Calgary. Broadly, her research interests are Urban Geography, Critical GIS/Critical Data Studies, and Critical Race Theory. Her work focuses on analyzing how dominant ideas represented in data collection and visualization can impact the experiences of marginalized communities.

**Rachel Tessier**: Rachel is originally from Baton Rouge, Louisiana, and is currently in her first year of the MSc program at the University of Calgary where her research focuses on theoretical ecology. More specifically, her work involves conducting meta-analyses to determine the most effective statistical technique to detect unimodal shapes in data. She has her B.S. in Natural Resource Management and Ecology from Louisiana State University. 

**Dylan Cunningham**: Dylan is a masters student at the University of Calgary where he is studying the spatial distribution and formation mechanisms behind a prairie groundwater discharge know as a ‘soap hole.’ 
He like rocks, maps, and water - In that order.

**Nikki Rogers**: Nikki is currently pursuing her Master's degree in Geographic Information Systems at the University of Calgary. She has a Bachelor's degree in Psychology, and a background in Health and Human Services, where she provided consultation on the collection, interpretation, and visualization of data. Her current research interests involve how to improve the inclusion of typically marginalized people in policy and planning decisions. 

# Mission Statement

Public transportation is essential to the sustainability of any city. It increases the mobility and freedom of citizens by enhancing access to the city as a whole, allowing people to venture outside of their own communities. 
In addition to enabling transportation to the workplace and consumer hotspots, it connects people to public services, such as hospitals, libraries, parks, and museums. Not every Calgarian can afford to drive (Sustainable Calgary, 2019). Unequal access to transit can place cities at risk of isolating large portions of communities (Sustainable Calgary, 2019). 
This may be especially relevant for youth and seniors, who may be more likely to rely on public transportation.

The Open City application was created with three goals in mind:

1. To bring attention to communities that lack sufficient access to public services via public transportation. 
   This will enable city planners and developers to address any lack of public transit accessibility amongst those communities. 
2. To empower citizens to make better-informed decisions regarding housing choices.
3. To inspire people to use public transportation and to explore local public services, via a user friendly application.

# User Guide to the Open City Application 
## Access to our web app
Please click the following link to access out app: [Open City Application](http://ucalgary.maps.arcgis.com/apps/webappviewer/index.html?id=649f9d4d39754ed88f7e4676698bf83f)
 
## Using the Open City web app

## How to use this App:

The application currently contains accessibility scores for twenty sample communities, but future iterations will contain scores for all Calgary communities. The accessibility scores represent the percentage 
of community services accessible via a direct, non-stop, public transit route, and it is categorized based on the type of community service:

* Attractions
* Community centres
* Courts
* Hospitals
* Libraries
* Health clinics
* Social development centres
* Vistor information centres

Upon opening the app, the user clicks the "select" button (the first button directly underneath the search bar). The user then has the ability to select up to 5 communities of interest by clicking on the available sample communities in orange. 
After selecting desired communities, the user can then click on the community name within the "select" window to see its various accessibility scores to the different categories of city services noted above.

### How to Compare the Accessibility of Multiple Communities:

Click on the select button (first button under the search bar) to select the communities you wish to explore. Press and hold the [shift] key on your keyboard to select multiple communities (you can pick up to five). 
Click on the info-graphic button (second button under the search bar) to see a visual comparison of the communities you've selected.
 
### Sharing 

The app can be shared with others through various social media platforms by clicking the share button (the third button under the search bar).

### Characterstics of the Open City App

Sustainability is about making our communities a better place for all citizens, regardless of income, education, background, etc.
As noted, not everyone is capable of driving, this highlights the importance of being close to public transit, and the easability of using it. If a user must walk excessive amounts, or have to change buses/ trains, they may be less likely to use public transit, and subsequently less likely to access to city services that would benefit them and the city. 
This application aims to open up the city of Calgary for all persons, and to shed light on differences in community connectivy to city services. Since urban sustainability should be applied in the context of all citizens, all communities deserve equal access to services. 

Nikki
Public transportation is essential to the sustainability of any city.
It increases the mobility and freedom of citizens by enhancing access to the city as a whole. In addition to enabling transportation to the workplace and consumer hotspots, it connects people to public services, such as hospitals, libraries, parks, and museums. 
This breaks down the barriers of accessibility, which can create limitations in the education potential within certain communities, resulting in a more educated population and enabling further sustainable innovations- giving people the option to better themselves and take advantage of the services that are available to them despite their circumstances.
The access to hospitals via public transportation for many people is crucial to their health. And hospital parking costs have proven to be a burden for patients and their families. 
Public transit is also a safer alternative to driving. The chances of being in an accident are reduced by more than 90% when using public transportation over a personal vehicle.
Then there are the environmental benefits. In the US, the investment in public transportation prevents the emission of 37 million metric tons of carbon annually, also resulting in the reduction of fossil fuel consumption, air pollution, and related illnesses.
Dylan
Using public transportation can create a less time consuming and expensive commute. 
The city of Calgary’s downtown area has one of the most expensive parking costs in North America, second only to that of New York City. 
The personal costs of choosing public transportation pale in comparison to the savings of fuel and vehicle costs.
The fares that are collected greatly benefit the quality of city services and functions.
In short, public transportation benefits everybody, even those who don’t use it.

## Input Datasets

This application was created using the Web AppBuilder for ArcGIS. All datasets were obtained from the [City of Calgary’s open data portal](https://data.calgary.ca/). The different feature layers were either downloaded as shapefiles, or were converted from CSV files to points using their latitude and longitude coordinates. 
There were originally two transit route files and two transit stop files. These were merged into a single transit route file and a single tranist stop file. 
The different map layers include: 

* Tranist LRT Stations
* Calgary Transit Stops
* Calgary Transit Routes
* Tracks - LRT
* Community Boundaries
* Community Services

## Web AppBuilder Widgets Used 

The Open City web app incorporates the following widgets into its functionality:

* **Splash screen**: Welcomes the user to the app and introduces its purpose
* **Select**: Allows the user to select specific communities of interest to display their accessibility score in regards to access to city services via a direct transit route
* **Infographic**: Allows the user to compare communities on their accessibility to the different city service categories
* **Share**: Allows users to share the web app via a shareable link
* **Layer List**: Allows users to select which of the available may layers to display
* **Legend**: Allows users to understand the different objects contained within the map
* **Home**: Allows users to return to the full extent of the city
* **Search**: Allows users to search for an address or place
* **My Location**: Identifies the current location of the user

# Future Improvements

Our team has identified the following oportunities to improve the Open City application: 

* Due to the time limitations of this challenge, we were only able to calculate the accessibility scores for a sample of 20 communities. Future iterations of this application will include the full list of Calgary communiities
* We recognize that the city services data used does not provide an all encompassing list of all services that Calgarians would require and/ or benefit from. Therefore, we would like to add additional services, such as institutions of higher learning and city recreation facilities 
* The design of our application could be improved to make it more visually appealing

# Video

All media, used in the creation of our video were obtained legally, many of which were found under free-to-use Creative Commons agreements.  

# References
City of Calgary. (2018). Smart city: Calgary's smart city appraoch. Retrieved March 28, 2019, from http://www.calgary.ca/General/Pages/SmartCity/Our-approach.aspx

Sustainable Calgary. (2019). Healthy places: Designing for health in Alberta. Retrieved March 28, 2019, from http://static1.squarespace.com/static/5ab716b9ee1759b04ca2703e/t/5c95b7ac5bfa3f0001d42a59/1553315776068/SustainableCalgary_HPBooklet_Digital.pdf


