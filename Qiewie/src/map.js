var GoogleMapsLoader = require('google-maps')

var map = function(mapEl, LatLngArray) {

	GoogleMapsLoader.load(function(google) {

		var map = new google.maps.Map(mapEl, {
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			zoom: 1,
			disableDoubleClickZoom: true,
			center: {lat: 33.6054149, lng: 10},
			disableDefaultUI: true,
			scrollwheel: false
		})

		LatLngArray.forEach(function (LatLng) {

			var marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(LatLng.lat, LatLng.lng),
			})

		})

	})


}

module.exports = map