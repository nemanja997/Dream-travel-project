function initMap() {
    var uluru = {lat: 44.75357135183061, lng: 20.455791952725804};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }