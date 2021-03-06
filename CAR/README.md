# Mission Statement
We are currently in an age of transition. Technology and energy are both aspects of human life that we seek to attain, reproduce, and refine for the benefit of civilization. With the slow transition from fossil fuels to renewable energies, it is important for everyone to know and understand exactly how renewable energies benefit them.

With the growing availability and continued cost reductions of solar technology in particular, more and more people around the globe are investing in this technology for both the financial and environmental benefits. The rooftop of a building is a prime location to collect solar energy for the purpose of electricity generation. This electricity can be used to power buildings within our community more sustainably and has the added benefit of reducing electricity costs! Our mission with GoSolar is to give the people of Ottawa an estimate into the solar energy their roof receives to better inform them on the power-generating potential of their rooftop. 


# App Information

Included in this app are three different data layers: Summer Solstice Data, Equinox Data, and Winter Solstice Data. Each layer contains the building footprints within Ottawa. For each building footprint there is data on the amount of incoming solar radiation received over a 24 hour period in Watt Hours per square-metre. This information is then used to calculate how much electricity could be generated by a single standard residential panel on that day. A single standard residential panel is assumed to have an area of 1.65 square metres, and have an efficiency of 18%. 

Instructions:

Click any coloured building polygon for a pop-up with information on the solar radiation received by that roof on that day, and the amount of electricity a single solar panel could potentially generate that day.

Widgets:

Inside the orange box in the top right where this About widget was found are three others: Legend, Layer List, and Search.
The Legend widget is used to view the colour ramp for the data.
The Layer List widget can be used to toggle between the layers of data.
The Search widget can be used to search for addresses in Ottawa in order for users to easily find their place of residence.

# Data

Ottawa building footprints and 2014/2014 LiDAR data from the OpenData Ottawa was used in the making of this app. The LiDAR data was processed using the two python scripts included in this repository.

# Limitations

One will notice as they explore the app that some buildings are split into several polygons with different incoming solar radiation values. This is a limitation caused by a LiDAR transition being located in the middle of that building. With more time we would seek to remove these breaks in the data in order for create more accurate data. 

# License

This application is licensed under Version 3.0 of the GNU General Public License. As such, any credited use/re-purposing of this application is allowed.
