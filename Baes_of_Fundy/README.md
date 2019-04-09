# Halifax Urban Green Space (HUGS)
### Team: Baes of Fundy <br><br> Submission for the 2019 Esri Canada Centres of Excellence App Challenge

#### Team Members:
* Liam Gowan
* Dani Kogan
* Kaleb McNeil
* Andrea Zagar

## Video
[HUGS Video Submission](https://www.youtube.com/watch?v=e9fSdSycj5I)

## Mission Statement

Access to public green space has become a cornerstone of sustainable urban development.
Whether used to unwind on a nice day or as landmarks when giving directions to your home, green spaces provide both social and environmental benefits to the surrounding community<sup>[1](#footnote1)</sup>. While many Canadian cities are known for their picturesque parks and lush greenery, a recent article has highlighted the strain that urban growth is putting on green spaces<sup>[2](#footnote2)</sup>. The uncertainty regarding the future of Canadian green spaces has left many people wondering how green their community is.

Nova Scotia’s Halifax Regional Municipality (HRM) is not only the fastest growing urban area in Atlantic Canada, but it was also recently rated the country’s seventh greenest city<sup>[3](#footnote3)</sup>. In order to balance its growth and greenery, the HRM released the Halifax Green Network Plan in 2018 to promote the long-term sustainability of the region<sup>[4](#footnote4)</sup>. Among its proposals, this plan suggests establishing a standard minimum distance/travel time for residents to access local green spaces. Our goal is to help Haligonians determine whether their neighbourhood meets this green standard.

The Halifax Urban Green Space (HUGS) application is designed to connect Haligonians with their local green spaces in two meaningful ways. First, HUGS provides users with metrics that evaluate the quality of green spaces in their community. Second, the app locates and provides information on green space facilities within a user-defined radius. These features give users an indication of their community’s sustainability.

## What are Urban Green Spaces?
Urban green spaces consist of parks, fields, or any open, undeveloped land within an urban area that facilitates physical activity, social interaction, or recreation<sup>[5](#footnote5)</sup>. However, the HUGS application focuses on public outdoor recreation areas that are affiliated with the Halifax Regional Municipality. This allows for easy comparison with the standards of the Halifax Green Network Plan.

## HUGS App Description
The HUGS app was created using the Developer edition of Web AppBuilder for ArcGIS, then customized for added functionality. We recommend using Google Chrome for optimal user performance. Our app contains four main features that help users explore their local green spaces:

#### Green Space Proximity Standards
The *View Green Space Standards* widget allows users to view two different green space layers for each community within our study area. The *Areas Meeting Green Space Standards* layer displays pale green polygons representing the areas per community that meet the green space standards. The *Areas Not Meeting Green Space Standards* layer displays pale red polygons representing the areas per community that do not meet the green space standards (problem areas). Users are invited to explore all communities or zoom to an individual community by selecting from the community name drop-down list within the widget.

#### Compare Communities
The *Compare Communities* widget allows users to view the following interactive column charts: Community Areas Meeting Green Space Standards, Community Green Space Index, and Total Green Space Per Community. These charts provide a comparison of our metrics between communities to help the user understand how their community is performing relative to others. Since the charts are interactive, users are encouraged to hover over each column to view the metric values. They can also click on columns to make the map zoom to the associated community.

#### Near Me
The *Near Me* widget allows users to view outdoor facilities near a specified location on the map. Users can specify a location in one of two ways. First, they can use the address bar to search for a specific address which will then be pinned on the map. Second, they can click the map marker icon next to the search bar to select their location on the map manually. The user can then set a buffer distance using the slider that corresponds to the radial distance around their location. Once these have been set, the widget zooms to the buffered area and displays all outdoor facility and recreation features within it. Information on individual features will be listed within the widget or accessed by clicking each feature on the map to view pop-ups.

#### Outdoor Facility Filter
The *Outdoor Facility Filter* widget allows users to view a variety of outdoor facilities and green space recreation areas by toggling specific filters on or off. When a user toggles a filter, the map dynamically zooms to the extent of all filtered features and their associated symbols will appear on the map. The user can then click on individual icons to view more information about the outdoor facility or recreation feature.

#### Information
The HUGS app also includes a *Information* widget located beside the *Legend* widget. This contains some frequently asked questions that users can reference while navigating the app.

#### Instructions for App Use
Detailed steps on how to use each widget in the app are found in the *About* widget, which automatically displays when the app is first opened.

## Calculations
#### Green Space Proximity Standard
Our Green Space Proximity metric calculates the percentage of land per community that is within a specified minimum distance from a green space. These distance standards are outlined in the Halifax Green Network Plan<sup>[4](#footnote4)</sup>, which divides our study area into three zones based on the municipality’s Regional Plan zoning designations<sup>[6](#footnote6)</sup>: Regional Centre (consisting of primarily downtown areas), Urban Settlement (densely populated areas surrounding the city centre), and Rural Commuter (suburbs surrounding the Urban Settlement zone). The Regional Centre zone standard is 500 metres to the nearest green space, while the Urban Settlement zone is 800 metres. The Rural Commuter zone standard is defined as the following:  *"..concentrate parks in local centres and growth centres, in centralized locations within large subdivision developments, and co-locate with existing community facilities and schools*<sup>[4](#footnote4)</sup>". Due to a lack of numerical values, we interpolated the distance value for this zone as 1000 metres.

Buffers were generated around green space features based on their zone standard, and then calculated relative to their communities as follows:

```
Green Space Proximity = AOK / ACOM * 100
```

AOK = Total area in community that meets green space proximity standards<br>
ACOM = Total area of community

#### Community Green Space Index

Our second metric provides users with an alternate way of evaluating green space in their communities. Unlike Green Space Proximity, this metric accounts for green space accessibility, availability, and fragmentation based on an open access journal article<sup>[7](#footnote7)</sup>. Accessibility measures the average distance to the nearest park for each community using the Manhattan distance method. Availability measures the share of land dedicated to green space per community. Fragmentation measures the relative shape and size of a green space, where large parcels receive higher values and small, narrow parcels receive lower values. These factors were then normalized and converted into a weighted index from 1 to 10 for ease of interpretation.

```
Accessibility = ADistTot / ADistCom
```

ADistTot = Average distance to the nearest green space (entire study area)<br>
ADistCom = Average distance to the nearest green space (per community)

```
Availability = AGS / ACom
```

AGS = Total area of green spaces (per community)<br>
ACom = Total area of community

```
Fragmentation = PGS / ACom
```

PGS = Total perimeter of green spaces (per community)<br>
ACom = Total area of community

```
Community Green Space Index = (Fragmentation x 1) + (Availability x 4.5) + (Accessibility x 4.5)
```

## Data Sources
Data used by HUGS was supplied by open data sources. Our spatial data was acquired from the Halifax Regional Municipality [Open Data Portal](http://catalogue-hrm.opendata.arcgis.com/), and their public [ArcGIS Online Page](https://www.arcgis.com/home/search.html?q=owner%3Ahalifax_agol&start=1&sortOrder=true&sortField=relevance#content). The calculations were drawn from municipal documents and an article published in an open-access scientific journal (see *Calculations* for more details). All material referenced in our documentation was acquired from publicly available reports and articles.

## App Constraints
The HUGS application has a few known constraints. The first noted constraint is the occasional slow rendering of the web map. We did not know how to fix this issue, but we determined that it does not have a profound impact on the application overall. A second constraint involves the user experience of the *Compare Communities* widget. After selecting a chart, the resulting screen is mainly blank with a small 'Apply' button in the upper right-hand corner (which a user must press to view the chart). We feel that this 'middle' screen is slightly unintuitive for users. Finally, the HUGS app does not perform optimally on web browsers such as Internet Explorer and Microsoft Edge.

## App Deployment
To deploy this app on your web server, please download the repository and follow these instructions: https://developers.arcgis.com/web-appbuilder/guide/xt-deploy-app.htm.     

## Licensing
#### Application
The HUGS app is licensed under the 3.0 GNU General Public License. Any credited use/re-purposing of this application is permitted and encouraged.

#### Logo
All elements of the HUGS logo were acquired through the [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/) license.
<br>
Buildings: [http://pngimg.com/download/24523](http://pngimg.com/download/24523)
<br>
Trees: [https://pngtree.com/freepng/trees_482736.html](https://pngtree.com/freepng/trees_482736.html)
<br>
Trees: [https://clipartpng.com/?1108,tree-transparent-png-clip-art](https://clipartpng.com/?1108,tree-transparent-png-clip-art)

## References
<a name="footnote1">**1**</a>: City of Toronto. (2015). *Green City: Why Natures Matters to Health*. Retrieved from: [https://www.toronto.ca/legdocs/mmis/2015/hl/bgrd/backgroundfile-83420.pdf](https://www.toronto.ca/legdocs/mmis/2015/hl/bgrd/backgroundfile-83420.pdf)
<br>
<a name="footnote2">**2**</a>: Attfield, P. (2017, May 25). Growing cities struggle to stay green. *The Globe and Mail*. Retrieved from: [https://www.theglobeandmail.com/life/growing-cities-struggle-to-stay-green/article35107379/](https://www.theglobeandmail.com/life/growing-cities-struggle-to-stay-green/article35107379/)
<br>
<a name="footnote3">**3**</a>: Pretty, B. (2018). Canada’s Top 10 Greenest Cities. Retrieved from: [https://www.getmysa.com/blog/energy-savings/canadas-top-10-greenest-cities/](https://www.getmysa.com/blog/energy-savings/canadas-top-10-greenest-cities/)
<br>
<a name="footnote4">**4**</a>: Halifax Regional Municipality. (2018). *Halifax Green Network Plan*, pg 90-3. Retrieved from: [https://www.halifax.ca/sites/default/files/documents/about-the-city/regional-community-planning/HGNP-Final%20Report_20180726_updated.pdf](https://www.halifax.ca/sites/default/files/documents/about-the-city/regional-community-planning/HGNP-Final%20Report_20180726_updated.pdf)
<br>
<a name="footnote5">**5**</a>: World Health Organization. (n.d.). *Urban green spaces*. Retrieved from: [https://www.who.int/sustainable-development/cities/health-risks/urban-green-space/en/](https://www.who.int/sustainable-development/cities/health-risks/urban-green-space/en/)
<br>
<a name="footnote6">**6**</a>: Halifax Regional Municipality. (2014). *Regional Municipality Planning Strategy*, pg 42-4. Retrieved from: [https://www.halifax.ca/sites/default/files/documents/about-the-city/regional-community-planning/RegionalMunicipalPlanningStrategy.pdf](https://www.halifax.ca/sites/default/files/documents/about-the-city/regional-community-planning/RegionalMunicipalPlanningStrategy.pdf)
<br>
<a name="footnote7">**7**</a>: Le Texier, M., Schiel, K. & Caruso, G. (2018). The provision of urban green space and its accessibility: Spatial data effects in Brussels. *PLOS-One, 13*(10). Retrieved from: [https://journals.plos.org/plosone/article/file?type=printable&id=10.1371/journal.pone.0204684](https://journals.plos.org/plosone/article/file?type=printable&id=10.1371/journal.pone.0204684)
