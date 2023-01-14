# Mapping Earthquakes

## Overview
This code creates a map that allows the user to switch between three different tile layers as the background: "Streets", "Satellite", and "Dark". Additionally, the code also adds three layer groups to the map: "Earthquakes", "TectonicPlates", and "MajorEarthquakes". 

## Interface
The user can use the layer control to toggle the visibility of these layers on the map. The map is centered on the coordinates [40.7, -94.5] and has a zoom level of 3. The data for the earthquake layer is pulled from the USGS earthquake feed and is plotted on the map using a function that calculates the color and radius based on the magnitude of the earthquake.

![Filters](https://github.com/ggalguera/Mapping_Earthquakes/blob/main/Earthquake_Challenge/Selection_Menu.png)

## Results
### Presentation
The Page is able to show the combination of the three types of maps with the three information layers.
![Maps](https://github.com/ggalguera/Mapping_Earthquakes/blob/main/Earthquake_Challenge/Mapping_Earthquake.png)

## Conslussion
This project utilizes Mapbox's API to display a map of the world with three different base map styles: Streets, Satellite, and Dark. The user can toggle between these base maps using the built-in layer control. Additionally, the project incorporates data from the USGS on earthquakes that occurred in the past week, displaying them as circles on the map with different colors and sizes based on the magnitude of the earthquake. The project also includes data on tectonic plates and major earthquakes, which can also be toggled on and off through the layer control. This project offers a dynamic and informative visualization of recent seismic activity around the world.
