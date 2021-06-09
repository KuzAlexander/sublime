// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        zoomControl: false,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(45.4950733, -73.5639254),

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": "50" }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "lightness": "30" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "lightness": "40" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "lightness": -25 }, { "saturation": -100 }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var neighborhoods = [
        { lat: 45.4945, lng: -73.5625, title: 'Sublime', content: 'text text', icon: 'sublime.png' }
    ]
    infoWindow = new google.maps.InfoWindow();
    function displayMarkers() {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < neighborhoods.length; i++) {
            var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
            var name = neighborhoods[i].title;
            var icon = neighborhoods[i].icon;
            var content = neighborhoods[i].content;
            createMarker(latlng, name, content, icon, i * 500);
            bounds.extend(latlng);
        }
    }
    function createMarker(latlng, title, content, icon, timeout) {
        window.setTimeout(function () {
            var marker = new google.maps.Marker({
                map: map,
                position: latlng,
                clicable: true,
                icon: {
                    url: "images/" + icon
                },
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(marker, 'click', function () {
                var infoContent = '<div id="info_container">' +
                    '<div class="info_title">' + title + '</div><div>' + content + '</div></div>';
                infoWindow.setContent(infoContent);
                infoWindow.open(map, marker);
            })
        }, timeout)
    }
    displayMarkers();

    map.addListener('click', function () {
        map.setOptions({
            scrollwheel: true,
            zoomControl: true
        })
    })    
    map.addListener('drag', function () {
        map.setOptions({
            scrollwheel: true,
            zoomControl: true
        })
    })
    map.addListener('mouseout', function () {
        map.setOptions({
            scrollwheel: false
        })
    })
}

