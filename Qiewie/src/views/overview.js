var Backbone = require('backbone')

// App
var App = require('../app')

// chart
var chart = require('../chart.js')

// map
var map = require('../map.js')

var LandingPage = Backbone.View.extend({

	render: function () {

		// initiate chart on page
		$.get('http://localhost:3000/api/loggedInUsers').done(function (loggedInUsers) {
			chart(loggedInUsers)
		})

		// initiate map on page
		$.get('http://localhost:3000/api/locations').done(function (locations) {
			map($('#map')[0], locations)
		})

	}

})

module.exports = LandingPage