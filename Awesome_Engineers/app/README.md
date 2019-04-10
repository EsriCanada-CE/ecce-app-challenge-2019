# Way2Share Application
### Submission for the 2019 Esri App Challenge
### Team
* Muhammad Usman
* Xuyang Han
* Aman


## Quick Start

Check out <a href="https://xuyanghan.github.io/esri_2019_app_challenge/">Way2Share</a> to view the live demo site!

To deploy this app locally, please just download the folder then start with index.html.


## Video Submission

<a href="https://www.youtube.com/watch?v=Jv5jDxev2qE" target="_blank">Way2Share Video Submission</a>


## Mission Statement

Automobile contribute a modest amount of pollution in the environment. Due to huge amount
								    of vehicles driving on the roads, the transportation has become one of the
                                    largest source of carbon dioxide emissions by direct fuel usage between 1990 and 2008.
                                    The amount of greenhouse and poisonous gases released into the atmosphere endangers
                                    the environment and causes severe health effects in humans. The American Lung
                                    Association reports that 30,000 people are killed by car emissions annually in the
                                    United States alone. Air pollution also causes numerous respiratory and
                                    cardiovascular problems and may exacerbate pre-existing conditions such as
                                    asthma.

Strict regulations on emission of vehicles can be one of the solutions on greenhouse
                                    gases emission reduction. One of alternatives is that people as individuals, do carpooling, which can also be
                                    effectively beneficial for GHG emission reductions. Air quality can be improved with
                                    fewer cars on the road. By carpooling, it helps reduce health risks associated with
                                    the poisonous gases released. In addition, carpooling will save money. Carpooling
									allows you to share the cost of gas and parking, cutting your expenses by nearly 50%
									or more, reduces the costs towards the construction and maintenance of roads, and to
									less pollute the atmosphere.

The goal of our application is to provide a carpooling platform, supporting and
                                    promoting carpooling for improving environment and social economics. The users can
									find available carpooling around them towards their destinations and can also
									register themselves to offer carpooling services. This application is aimed to
									contribute in improving the environment and social-economic expenses by promoting
									carpooling.

## App Description & Features

Our application was created using the ArcGIS API for JavaScript. The app have three main functions:

### 1) Get Route Info
Route information will be provided to the user after users input. Users can set home and destination and select car by
year, make and model. The route will be generated automatically and associated values about the route will present,
 including distance, driving time needed, CO<sub>2</sub> emissions and Cost.


### 2) Query available Carpooling
If users without a car can would like to find available carpooling, users can set home and destination then click the Green button to get query results of available carpools.
The people 1km around you and with the same destination will be showed on the map. Users may contact them with email.

### 3) Share your route
Users with a car can share the route with others.
Users can  set home and destination to generate the route.
Then input name and email, and submit it. Users info will be uploaded into the database and will be open to users 1km near
                                        to you.
Other people will be able to find you and contact you by this email for carpooling together.


## Data Sources

Data used in the creation of our web application came solely from open data sources.
Data of fuel consumption ratings, fuel price and other facts data are from Statistics Canada.

## Calculations & Explanations

### CO<sub>2</sub> Emissions Estimation
Annual CO<sub>2</sub> Emissions by a specific car(kg) = COE(kg/km) x Distance(km) x 2 x 200.

COE represents the tailpipe emissions of the specific car model of carbon dioxide for combined city and highway driving.

Excluding the holidays, 200 days per year were assumed for commuting to work.

Round trip is assumed.

### Gas Cost Estimation
The Equation for Cost : Cost = Gas Price(CND/L) x Fuel Consumption(L/km) x Distance(km) x 2 x 200.

It is assumed that the gas price is 115 cents/liter.
                                        The assumption is based on the average gas price data of previous five months of
                                        toronto area.
                                        The data is available
                                        from <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000101">Statistics
                                            Canada</a>

The Fuel Consumption is value for the specific car model user selected.
                                        The combined rating (assuming 55% of city, 45% of highway) is used.

Excluding the holidays, 200 days per year were assumed for commuting to work.

Round trip is assumed.

### Limitations
Data privacy. This app is a preliminary designed for testing. Data query
                                        functions are working with artificial data.
                                        Currently in this platform, all data is open. Anyone can query for people in
                                        given radius towards the same destination.

User profile and permission utilities are not developed yet.
                                        Users are not able to update or delete their home and destination location information
                                        after submitting the information.

## Future Works
* User registration functionality. Only registered users will access to query
                                        available carpools.
                                        The public can only use route information estimation without registration.
* User permissions. Users will have permissions to change the data records they
                                        submitted.
* User records. Users will know how much contributions is done
                                        towards environment in saving Fuel, CO<sub>2</sub> emissions and Costs.
* More comprehensive vehicle information and support calculation for more than 2
                                        people sharing the route.

## Data and Reference
* Gas Price Data is from the statistics canada: https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000101
* Consumption Ratings Data is from statistics canada: https://open.canada.ca/data/en/dataset/98f1a129-f628-4ce4-b24d-6f16bf24dd64
* Canada Transportation Data is from statistics canada: https://www150.statcan.gc.ca/n1/pub/75-006-x/2019001/article/00002-eng.htm#a10
