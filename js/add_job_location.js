data={};
data.name='me'
car=[];
car.push('hi')
data.car=car
let me=data.car
console.log(me)
document.getElementsByClassName('me')
ScriptApp.getService().getUrl();
location.reload();



if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  alert("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  
  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 8
  };
  
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map
  });
}