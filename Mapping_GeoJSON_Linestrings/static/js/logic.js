
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  // onEachFeature: function(feature, layer) {
    // console.log(layer);
    // layer.bindPopup()
    // return L.marker(latlng)
    // .bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>")
  // }

// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ggalguera/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoNeighborhoods.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/ggalguera/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ggalguera/Mapping_Earthquakes/Mapping_Lines/majorAirports.json";

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
  // console.log(data);
  // layer.bindPopup()
  // return L.marker(latlng)
  // .bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>")
// Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  L.geoJSON(data, {
    weight: 1,
    fillColor: "yellow",
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Neighborhood: " + feature.properties.AREA_NAME);
  }})
.addTo(map);
// Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
});

// d3.json(airportData).then(function(data) {
  // console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  // L.geoJSON(data, {
    // onEachFeature: function(feature, layer) {
    //   layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
    // }
  // }).addTo(map);
// });


// Data to show airport data
// , {
//  style: myStyle,
//  onEachFeature: function(feature, layer) {
//    layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2>" + "<hr>" + "<h3>" + "Destination " + feature.properties.dst + "</h3>");
// }
// }