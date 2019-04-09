**Mission Statement and Objectives**

Nova Scotians are not a healthy, active bunch. With 61% of adults considered overweight or obese and only 54% meeting basic daily physical activity levels, it is clear that Nova Scotians need to move more (Nova Scotia Health Authority, 2015). Physical activity, especially outdoor activities has immense benefits on both physical and mental health, as well as overall community well being (Maller et al., 2006). One way to help get people off the couch is to let them know what opportunities there are for outdoor recreation in their own area and give them ways to explore their own backyard.

Encouraging the population to explore the countless amounts of parks and protected areas that are readily available in the province can help get communities to play an active role in enjoying their environment. By promoting the accessibility of greenspace in Nova Scotia through our App, we can help build sustainable communities that can make for happier, and healthier residents.

**Healthy Parks, Healthy People**

The FindingGreen App allows its user to sort through a variety of green space all throughout Nova Scotia. The green spaces include National Parks, Protected Areas, and Wildlife. It&#39;s main objectives are:

- Provide information to Nova Scotia residents on where green space is located within the province
- Allow the user to filter through the different activities that are available throughout the areas
- Available driving and walking direction for users to understand how to get to their chosen space, along with the time it would take them
- Proximity tool that can enable the user to filter through distance from their location, showing only parks that within a buffer zone. This can be combined with the filter tool for the kinds of activities available.

**Geospatial Open Data Sources**

All the open data was retrieved from the Nova Scotia and Halifax Regional Municipality open data portals. The data retrieved focused on the green spaces within the province of Nova Scotia. Below if a list of the used datasets:

Nova Scotia Open Data Portal:

- Lands contributing to the NS Protected Areas System. Shapefile

HRM Regional Municipality Open Data Portal:

- HRM Parks. Shapefile

Nova Scotia Parks:

- No Scotia Provincial Parks, Parks Guide 2018-2019. PDF

**Data Processing**

Greenspace: Using the Lands contributing to the NS Protected Areas System and HRM Parks, we spatially joined the two shapefiles together to create our greenspace data set in which our App is primarily based off of.

Activities: Used the provincial parks pdf. As a reference guide to the types of activities within the different greenspaces. Took the data and converted it to an excel file with a list of the activities and yes or no if available.

**Limitations**

In the context of the app, we defined greenspace as local conservation areas and parks; but the definition can go beyond that. &quot;The Lands Contributing to the NS Protected Areas System Shapefile&quot; is missing several key provincial parks which would have been an asset for this app. We would have liked to incorporate our own network analysis for the mode of transports, especially public transit, but it was difficult to configure and upload the network onto ArcOnline. So, we had to forgo that and use the built-in distance widget instead

**References**

Halifax Regional Municipality. (2019). HRM Parks. Available from: HRM Open Data Catalogue: http://catalogue-hrm.opendata.arcgis.com/datasets/3df29a3d088a42d890f11d027ea1c0be\_0

Maller, C., Townsend, M., Pryor, A., Brown, P., &amp; St Leger, L. (2006). Healthy nature healthy people: &quot;contact with nature&quot; as an upstream health promotion intervention for populations. Health Promotion International, 21(1), 45–54.

Nova Scotia Department of Natural Resources. (2018). Nova Scotia Provincial Parks: Parks Guide 2018-2019. Halifax, NS. ISBN: 978-1-55457-837-5. Available online: https://parks.novascotia.ca/sites/default/files/Nova-Scotia-Parks-Guide-2018.pdf?fbclid=IwAR1RX5KdziRzBtAyhRXhA3jZFVb4xdxlb3lLPaKQsF42Ym-gL65\_KxNldQ8

Nova Scotia Government. (2019). Lands Contributing to NS Protected Areas System. Available from: Nova Scotia Open Data Portal: https://data.novascotia.ca/Environment-and-Energy/Lands-Contributing-to-the-NS-Protected-Areas-Syste/ticv-5du5

Nova Scotia Health Authority. (2015). Nova Scotia Health Profile, 2015. Nova Scotia Health. 34 pp.