# rePurpose Application

## Mission Statement 
Poor planning policy can make or break cities. Urban sprawl, vacant land, and resource deserts affect the wellbeing of communities and the health of our environment.

For the City of Hamilton, a number of strategies, planning frameworks, and initiatives have been put in practice to help plan our city more sustainably. The Neighbourhood Action Strategy (NAS) is just one of the many plans that aim to make Hamilton a great place to live, work, and raise a family. In order to realize this dream, the focus of the NAS is on community resources that foster positive, healthy and sustainable neighbourhoods.

This means that continued resident engagement is crucial, and our rePurpose app will facilitate that engagement. Residents will be able to explore community resources in their area with our accessible and easy-to-use WebApp. Based on their own expertise of their community’s needs, they will be able to suggest how and where the land in their neighbourhood can be better utilized via a GeoForm.

The submission data for this app will be publicly available, making it easy for urban planners, policymakers, and community leaders to have a better understanding of resident needs. Sustainable urban development begins with building sustainable communities, and residents are the experts of those communities.

## App Description
Our application uses two main components of the ArcGis Online Platform:

1. A rePurpose Web App that allows for residents of Hamilton, policymakers, urban planners and city officials to explore and summarize the data collected in the rePurpose survey

2. A rePurpose public survey GeoForm in which residents of Hamilton can submit the community enhancements they would like to see in their community

### 1. rePurpose Web App

To access the rePurpose, click on [this link](https://arcg.is/1DeCLb) 

The rePurpose Web App makes use of the ArcGIS Web Appbuilder
The application consists of 7 widgets:

* A Splash Screen that describes the purpose and functionality of our app
* A Legend Widget that communicates what each of the symbols are within the map's extent 
* A Layer Widget that allows users to turn on and off layers within the map
* A Near Me Widget that allows users to input their address or location and find parks or vacant lots around them from 500m to 1500m radius around their location to allow them to see areas for potential community enhancements
* A Community Input Widget which displays a pie graph filtered by the extent of the map of the type of community enhancements suggested by other residents, which were submitted through the reSponse public survey
* A Share the App Widget in order for viewers of the application to share it with others in their community
* A About the App Widget which mirrors the instructions in the Splash screen should the user need a refresher on how to use the App

### 2. rePurpose Public Survey

To access the rePurpose public survey, click on [this link](https://mcmaster.maps.arcgis.com/apps/GeoForm/index.html?appid=9603241fec3b4c4fa1aa1fce25ec96a7) 

Our rePurpose Community Enhancement Survey uses the GeoForm app template available in ArcGIS Online. The responses for each survey submitted are recorded in a hosted feature service layer, with domain values defined for each of its field. The survey asks these five questions in which the layers consist of:

* Date - The date of submission of the survey
* What Ward do you Live in? - Determines the general area that the resident lives that are completing the survey
* What Community Enhancement Would you Like to see in Your Ward? - Describes the type of community enhancement that the resident would like to see (choices are: a community garden, housing/apartments, a park, sports fields, a community centre, SoBi bike racks, or Other.)
* If you selected "Other", what community enhancement would you like added? - Allows for residents to submit their own ideas for community enhancements
* If you selected "Other", what community enhancement would you like added? - Allows residents to voice any additional comments that they feel are important 

After answering the associated questions, the user must specify the geographic location of where they would like to see the community enhancement. This can be done by placing a marker on the map, searching for and address or place, or by selecting the "locate me" button. The layers of this map include: the ward boundaries of Hamilton, the current vacant plots of land, all park polygons, and the reSponse layer of other community enhancements suggested by residents. 

In the instructions located at the top of the survey, there is a link that leads back to the rePurpose web app so that respondents can view their submission updated in the layer and interact further with the map.

## Data Sources
We used open source data in the production of this application 
The vacant land plots, parks and ward boundaries we all gathered from the [City of Hamilton's Open Data program](https://www.hamilton.ca/city-initiatives/strategies-actions/open-data-program).

The community garden point layer was built using information from [The Food Access Guide](http://foodaccessguide.ca/community-gardens/).  

Information about the Neighbourhood Action Strategy can be found [here](https://www.hamilton.ca/city-initiatives/strategies-actions/neighbourhood-action-strategy).

We generated the rePurpose survey results by user submission from residents of the City of Hamilton.

## Licensing Information

This application is licensed under Version 3.0 of the GNU General Public Licence. Any credited use/re-purposing of this application.
