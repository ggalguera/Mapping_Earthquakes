# Mapping Earthquakes

## Overview
This code creates a map that allows the user to switch between three different tile layers as the background: "Streets", "Satellite", and "Dark". Additionally, the code also adds three layer groups to the map: "Earthquakes", "TectonicPlates", and "MajorEarthquakes". 

## Interface
The user can use the layer control to toggle the visibility of these layers on the map. The map is centered on the coordinates [40.7, -94.5] and has a zoom level of 3. The data for the earthquake layer is pulled from the USGS earthquake feed and is plotted on the map using a function that calculates the color and radius based on the magnitude of the earthquake.
![Filters](https://github.com/ggalguera/UFOs/blob/main/Screenshot_01.png)

## Results
The Page is able to show the combination of the three types of maps with the three information layers.
![Maps](https://github.com/ggalguera/UFOs/blob/main/Screenshot_01.png)
