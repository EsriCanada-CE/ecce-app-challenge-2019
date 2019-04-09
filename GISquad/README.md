# Sustainera by GISquad
Sustainera is a web application that estimates the potential energy and CO<sub>2</sub> savings of buildings and neighborhoods in Toronto, Ontario

### Team
* Matthew Brown: Lead Designer
* Tasos Dardas: Lead Developer
* Michele Tsang: Lead Researcher 

## Mission Statement

In Canada, buildings account for almost a third of its’ annual greenhouse gas (GHG) emissions. As Canadian cities continue to grow, so does the demand for energy. Buildings have a substantial impact on the environment as they use resources, generate waste and are costly to maintain and operate. There is high potential to deliver significant cuts in emissions at very little costs, benefiting the environment, economy and society. With new constructions, renovations or retrofits, buildings in Toronto can achieve superior levels of energy efficiency by using fewer resources, reducing waste, improving air quality and eliminating negative environmental impacts. 

Toronto’s population is projected to grow over 35% by 2050, which will further the expansion of residential and commercial infrastructure. In 2010, the City of Toronto implemented the [Toronto Green Standard](https://www.toronto.ca/city-government/planning-development/official-plan-guidelines/toronto-green-standard/toronto-green-standard-overview/), which are sustainable design requirements for new private and city-owned developments. This includes a performance target for new buildings to approach zero emissions by 2030. [Toronto’s Climate Action Strategy](https://www.toronto.ca/wp-content/uploads/2017/11/91f6-TransformTO-Modelling-Torontos-Low-Carbon-Future-Results-of-Modelling-Gr....pdf) also has a city-wide goal of achieving an 80% reduction in GHG emissions by 2050. These targets not only reduce carbon emissions but also make Toronto’s buildings more resilient, comfortable and affordable with lower energy costs.
 
Our app, Sustainera, aims to promote sustainable buildings using 2 strategies; reducing energy/water consumption and planting green rooftops. Choosing efficient insulation, lighting and appliances saves energy, lowers utility bills, increases indoor comfort and reduce impacts on the environment. Green roofs act as a rainwater buffer, reduce noise and air pollution, regulate indoor temperatures by providing extra insulation and absorb CO<sub>2</sub>, making urban areas less likely to become heat islands. Buildings that choose to be more sustainable will face higher initial costs, but the difference will be easily recovered over time through energy savings. Not only do green buildings benefit tenants and households with savings in utilities, but they also lower maintenance costs and increase property value for building developers.  
  
      
## App Description & Features

**1. Neighborhood Statistics**  
By selecting a neighborhood, the user can identify the number of existing buildings and the proportion that is residential and non-residential. Based on the total area of these buildings, the number of LED light bulbs required for upgrading from incandescent can be estimated, which is used to calculate the savings in dollars over the lifespan of the light bulbs. This informs the user of the net savings of neighborhoods as the value accounts for the cost of LED bulbs. Switching to LED not only has monetary savings but also reduces CO<sub>2</sub> emissions by using less energy. The equivalent savings in pounds of CO<sub>2</sub> is also estimated from upgrading to LED bulbs for a neighborhood. The total area of buildings within a neighborhood is also used to calculate the number of possible rooftop trees that can be planted. Based on the number of trees, the amount of CO<sub>2</sub> emissions, in pounds, that can be absorbed by them can also be estimated. 

**2. Building Statistics**  
After the user selects a neighborhood, buildings can be symbolized in 3D by 6 different categories, the height of a building, type of building (residential versus non-residential), LED savings (dollars), number of rooftop trees, the amount of CO<sub>2</sub> reduced from LED light bulbs or the amount of CO<sub>2</sub> reduced from rooftop trees. Similar to the neighborhood statistics, the LED savings (dollars) can be determined based on the area of a single building, as well as the amount of CO<sub>2</sub> reduced (pounds) from LEDs using less energy. The area of each building also estimates the possible number of rooftop trees that can be planted, which is also used to determine the amount of CO<sub>2</sub> that can be potentially absorbed.


**3. Return of Investment (ROI) Calculator**   
The ROI Calculator provides the user with an estimate of the number of years it takes for their money to be made back from switching to spray foam insulation, 4.8L/flush toilets, high efficient washing machines and/or gas dryers. Using inputs from the user, such as the area they want to insulate, the number of toilets they want to upgrade or the number of people in the household, dynamic ROI times can be estimated. The value returned is based on the cost of upgrades and installation and the savings in utilities. After the ROI period, the user will only be saving money from switching over to these highly efficient options.   
   
  
## User Manual
  

1. Select a neighborhood in Toronto or use the search function and type in an address to navigate to its neighborhood.
  
2. The default view of the app is in 3D, but can easily be switched to 2D by selecting the 2D button at the top.  
  
3. Click on a building and a pop-up will appear that gives 6 statistics about its’ height, type, LED savings in dollars, LED savings in CO<sub>2</sub> reduced, number of rooftop trees and CO<sub>2</sub> reduced from rooftop trees. 
  
4. In the top-left of the app, click on the 3 horizontal lines icon and select the “Info” button to bring up a menu that allows you to visualize different statistics, view your neighbourhood summary, and calculate ROI.   
  
5. From the dropdown under “Select Information”, click “Building Stats” to view the same 6 statistics as shown in the popup. Here, values from any of these 6 statistics can be used to symbolize the colour and height of the buildings.
  
6. Under “Select Information”, switch from “Building Stats” to “Neighborhood Stats” to see an overview of the selected neighborhood’s efficiency potential.  
  
7. Under Select Information, switch from “Neighborhood Stats” to “Calculate my ROI” to estimate your ROI for any of the 4 sustainable options. For Insulation, input the square footage of your household and the cost of your monthly energy bill. Under Water, input the number of toilets you want to upgrade in your household/building and the number of people occupying that space. To determine the ROI for an efficient washer and/or gas dryer, input the number of people in your household.   

## Calculations and Assumptions 

**Lighting**

|          |      LED      |  Incandescent |
|----------|-------------:|------:|
| Lifespan (hours) |    25000 | 1200 |
| Watts per bulb |   8.5 | $12 |
| Cost per bulb |   $4.00 | $2.00 |
| KWh of electricity used over 25 000 hours |   212.5 | 1499.76 |
| Cost of electricity (@ $0.094 per KWh) |   $19.98 | $140.98 |
| Bulbs needed for 25 000 hours of use |   1 | 21 |
| Equivalent 25 000 hours bulb expense |   $4.00 | $42 |
| Total Cost for 25 000 hours |   $23.98 | $182.64 | 
|                                                      |                 
|Energy Savings over 25000 hours assuming 25 bulbs per household | 
| Total Cost for 25 bulbs | $599.38 | $4,566.10|
| Savings to household from switching to incandescent | $3,966.73||


The savings from replacing incandescent light bulbs with LED light bulbs are based from the values above. It also assumes 5000 lumens are required for every 250 square feet and each bulb produces 800 lumens (LED and incandescent). The cost of lightbulbs are based on the average prices found in Toronto. The cost of electricity is based on mid-peak prices for Ontario. To convert the area from square meters to square feet, the area of the building is multiplied by 10.7639. The total monetary savings is based on the lifespan of LED light bulbs.   

*Savings ($) = (((((Area of Building in m<sup>2</sup>x10.7639)/250)x5000)/800)/25)x3966.73*  

The equivalent savings in CO<sub>2</sub> is based on the fact that 7.07 × 10-4 metric tons CO<sub>2</sub> is saved per kWh. 1287.26 is the amount of kWh savings from switching a single bulb from incandescent to LED.  

*Savings (metric tons of CO<sub>2</sub>) = ((((((Area of Building in m<sup>2</sup>10.7639)/250)x5000)/800)/25)x1287.26)x0.000707*  

Both the monetary and CO<sub>2</sub> savings from switching to LED light bulbs is based on the area of building footprints, so it does not account for multiple floors. To obtain savings for multi-floor buildings, the user can multiply their savings by the number of floors.   
 
   
**Insulation**  

In Toronto, spray foam insulation ranges from $1.75 to $3.00 per square foot with an average professional installation cost of $2021. The calculation used assumes a cost of $2.00 per square foot and a spay depth of 1 inch. Based on previous case studies, spray foam insulation reduced a household’s monthly energy bill by an average of 48%. Therefore, in this calculation, we will assume installing spray foam insulation will reduce the monthly energy bill of the user by 40%. The monthly energy savings is multiplied by 12 to obtain ROI in years.   

*ROI (years) = (building square footx2+2021)/((Cost of Monthly Energy Billx0.4)x12)*  
  
    
**Toilet**  
  
Most older, standard toilets have an average flush volume ranging from 6 to 13 litres, while high efficiency toilets have an average of 4.8 litres. The ROI for replacing existing toilets with highly efficient ones is based on the assumptions that each person flushes the toilet 5 times a day, the cost of a high efficient toilet is $120 greater than a standard toilet and a standard toilet uses 9 litres per flush. Effective April 1, 2019, the rate of water consumption in Toronto is $0.004747688/litre, which is the cost of water used here. To obtain the ROI in years, the daily savings is multiplied by 365.
  
| Toilet | Price | Litres/Flush |
|:----------:|:------------:|:------:|
|Standard | $110 | 6 to 13 |
| Efficient | $150 - $300 | 4.8 |
  
 
*ROI (years) = (# of Toilets to Upgradex120)/((# of Peoplex5x9)-(# of Peoplex5x4.8)x0.004747688x365)*
  
  
**Washer**
  
The average household of 4 people washes roughly 400 loads of laundry each year, which roughly equates to 2 loads a week per person. The ROI uses the estimate of saving $0.21 per load and a difference of $250 between a standard and high efficient washing machine. The weekly savings is multiplied by 52 to return a ROI in years. 


| Washing Machine | Price | Cost Per Load |
|:----------:|:------------:|:------:|
| Standard | $550.00 | $0.62 |
| High Efficiency | $800.00 | $0.41 |
   
*ROI (years) = 250/(# of peoplex2x52x0.21)*
  
  
**Dryer**
  
Union Gas estimates a savings of $91.00 a year from switching to a natural gas dryer versus an electric dryer. This comparison is based on a household of 4 people, so the ROI assumes a savings of $22.75 per person annually. It also assumes a gas dryer is $100 more than an electric dryer.
  
*ROI (years) = 100/((# people in household/4)x91)*

**Rooftop Trees**
  
The number of possible rooftop trees a building can plant is calculated based on the assumption that 36 trees can fit per acre. To convert square meters to acres, the building area is multiplied by 0.000247105. 
  
*# of Rooftop Trees = square metersx0.000247105x36*

The amount of CO<sub>2</sub> that can be absorbed from the maximum possible number of trees per building is based on the fact that a single tree can absorb 48 pounds of CO<sub>2</sub>. 

*CO<sub>2</sub> Reduced from Rooftop Trees = possible # of rooftop treesx48*
  
  
  
  
## Geospatial Open Data Sources
  
**Toronto Buildings**
* City of Toronto Open Data Catalogue: https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#db07630f-252d-f7ae-2dff-8d0b38ec6576  
  
**Toronto Trees**
* City of Toronto Open Data Catalogue: https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#0e785adb-d130-8957-a572-5d6fdb5cc275 
  
**Land Use**
* DMTI Spatial Inc. via Scholars GeoPortal: http://geo2.scholarsportal.info/#r/details/_uri@=2785150059
  
**Our Team's ArcGIS REST API** 
* Neighborhoods: https://services.arcgis.com/3wgo1qnFL7YLB8lT/ArcGIS/rest/services/Parsed_Final/FeatureServer
* Trees: https://services.arcgis.com/3wgo1qnFL7YLB8lT/ArcGIS/rest/services/ParsedTrees/FeatureServer  
  
  
## Sources

### Calculations
**Lighting**
Lifespan of Bulbs: http://www.ontario-hydro.com/cost-benefit-of-led-lighting
Cost per Bulb: https://www.homedepot.ca/en/home/categories/lighting-and-ceiling-fans/light-bulbs.html
Energy Used by Bulbs: https://learn.eartheasy.com/guides/led-light-bulbs-comparison-charts/ 
Cost of Electricity: http://www.ontario-hydro.com/current-rates 
Bulbs Required for Area: https://www.archdaily.com/897277/how-to-determine-how-many-led-lumens-youll-need-to-properly-light-your-space 
CO<sub>2</sub> Equivalent of Savings: https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references   
  
**Insolation**
Fibreglass Pricing: https://www.homeadvisor.com/cost/insulation/ 
Spray Foam Pricing: http://torontosprayfoam.site/blog/spray-foam-insulation-cost-in-toronto/ 
% Savings of Monthly Energy Bill: https://www.gni.ca/insulation-101/insulation-case-study-roi   
  
**Water**
Toilet Price: https://www.homedepot.ca/en/home/categories/bath/toilets-toilet-seats-and-bidets/toilets.html?sort=price-asc
Flushes per Person: http://leansixsigmaenvironment.org/index.php/how-many-times-do-you-flush-the-toilet-per-day-you-might-be-surprised/ 
Cost of Water: https://www.toronto.ca/services-payments/property-taxes-utilities/utility-bill/water-rates-and-fees/   
  
**Washer**
Machine Cost: https://www.bestbuy.ca/en-ca/category/washing-machines/33931p.aspx 
Cost Per Load: https://www.thesimpledollar.com/saving-pennies-or-dollars-energy-efficient-clothes-washing/
Loads a Year: https://www.home-water-works.org/indoor-use/clothes-washer   
  
**Dryer**
Machine Cost: https://www.bestbuy.ca/en-ca/category/dryers/33932p.aspx 
Savings: https://www.uniongas.com/residential/products-services/appliances-equipment/dryer/dryer-cost-comparison  
  
**Trees**
Number of Trees per Area: https://www.woodmagazine.com/materials-guide/lumber/let-your-trees-grow-for-profit
CO<sub>2</sub> Absorbance of trees: https://projects.ncsu.edu/project/treesofstrength/treefact.htm  
  
### Link to Download App
* https://drive.google.com/open?id=1EOwckDdoT_vwpXoVfbrKGiFpC-6Ql1LV
  
### Mission Statement
* https://www.toronto.ca/city-government/planning-development/official-plan-guidelines/toronto-green-standard/toronto-green-standard-overview/
*	https://www.toronto.ca/wp-content/uploads/2017/11/91f6-TransformTO-Modelling-Torontos-Low-Carbon-Future-Results-of-Modelling-Gr....pdf
*	http://blog.morrisonhershfield.com/toronto-green-standard-v3-updated-to-target-near-zero-emissions-for-new-development-by-2030
*	https://www.worldgbc.org/benefits-green-buildings




### Video

**Stock footage**
*	Videvo https://www.videvo.net
*	Pexels video
*	Mixkit

**Images**
* Free vector art via <a rel="nofollow" href="https://www.vecteezy.com">www.Vecteezy.com</a>
* Photo credit: <a href="https://visualhunt.co/a1/b82fba">mariusz kluzniak</a> on <a href="https://visualhunt.com/re3/daf020c1">Visualhunt</a> / <a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"> CC BY-NC-ND</a>
<div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>



### App Icons

**Skyscraper**
* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
* Photo credit: <a href="https://visualhunt.co/a1/b82fba">mariusz kluzniak</a> on <a href="https://visualhunt.com/re3/daf020c1">Visualhunt</a> / <a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"> CC BY-NC-ND</a>
* <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**House**
* <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Light bulb**
* <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Leaf**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Tree**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Money**
* <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Toilet**
* <div>Icons made by <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**People**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Family**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Washing Machine**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>  
  
**Clothesline**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"    		 	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"    		 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

**Insulation**
* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>


