let metroAreaCenter = [44.96, -93.2]
let zoomLevel = 9
let map = L.map('college-map').setView(metroAreaCenter, zoomLevel)
L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
  ,
  id: 'mapbox.streets',
  accessToken: ''
}).addTo(map)

let metroAreaCircle = L.circle(metroAreaCenter, {
  color: 'green',
  radius: 30000,
  fillOpacity: 0.2
}).bindPopup('Twin Cities Metro Area').addTo(map)

campuses = [
  { 'name': 'Minneapolis College', 'website': 'https://minneapolis.edu', 'coordinates': [44.9724, -93.2844] },
  { 'name': 'Saint Paul College', 'website': 'https://saintpaul.edu', 'coordinates': [44.94839, -93.1099] },
  { 'name': 'Normandale Community College', 'website': 'https://normandale.edu', 'coordinates': [44.8297, -93.3312] },
  { 'name': 'North Hennepin Community College', 'website': 'https://nhcc.edu', 'coordinates': [45.1054232, -93.3767558] },
  { 'name': 'Century College', 'website': 'https://century.edu', 'coordinates': [45.0438494, -92.9862026] }
]

campuses.forEach(function(college) {
  L.marker(college.coordinates)
    .bindPopup(`${college.name}<br><a href="${college.website}">Website</a>`)
    .addTo(map)
})