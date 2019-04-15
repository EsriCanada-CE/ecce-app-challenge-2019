DISGRUNTLEDPLANNER 2019 APP SUBMISSION
Demand Transport Action Now!

REPOSITORY CONTENTS:
This is documentation of the DisgruntledPlanner's web application: Demand Transport Action Now, for the 2019 Esri Canada App Challenge. This repository contains the web application itself (_WebApplication), the background data used to create the app (AppData), the resources for the app challenge (Resources), a photo of the app developer (photo.jpg), a voiceover of how the application is used (voiceover.mp4), and a .zip archive of the web application downloaded directly from the ArcGIS Online Portal.

PURPOSE:
The Demand Transport Action Now application was developed to allow Canadians to find out who their local Member of Parliament is, and then demand transportation investment that would help reduce climate action using a form email generated algorithmically using StatsCan data. To demonstrate the capabilities of citizen-led science and advocacy provided by Esri products, this is a "no-code" web application that has no customization added by the development team.

BACKGROUND:
Climate change is a serious issue facing Canadians. A key part of responding to climate change is creating political will to invest in sustainable infrastructure, and make regulatory changes that reduce carbon emissions. In Canada, over 40% of carbon emissions come from transportation-related sources. Therefore, this web app takes StatsCan commuter data to recommend what type of transportation the government should invest in to reduce carbon emissions from personal transportation. Users can then email their local Member of Parliament to demand transport action now.

ALGORITHM:
After a user geo-locates themselves into a federal electoral riding, the application's algorithm takes three common Statistics Canada variables to compute a recommendation for transportation investment. First, it calculates the top mode for people's journey to work (drive, public transit, bike, walk). Next it calculates the average travel time to work (<15mins, 15-30mins, 30-45mins, 45mins-1hr, >1hr), which then cross-references with the top mode for work-related trips to make a recommendation. Therefore, if a riding predominantly drives and has trips that take on average over an hour, the algorithm would recommend investment in regional express rail. However, if trips were by car and only 15mins on average, the algorithm would recommend investment in cycling and walking infrastructure.

BIO:
Alexander Wray is a Canada Graduate Scholar at Western University studying how outdoor advertising influences teenage dietary patterns. He loves to use geography, particularly GIScience, to affect meaningful change among local and national government policy. The name DisgruntledPlanner comes from his previous career of working towards becoming a land use planner, that decided to do other things so he could have a bigger impact.

DATA SOURCES:
All data and layers are open source from Statistics Canada and the House of Commons Information Service. No rights are reserved by the app development team for any content in this folder. Please contact Alexander Wray for further information at awray22@uwo.ca

REPOSITORY LINK:
https://uwoca-my.sharepoint.com/:f:/g/personal/awray22_uwo_ca/Eus4YGUo7hRFm8fq3S0x0xYB8_JwQwqmFQJPstJVVzYxYw?e=w23PgE
