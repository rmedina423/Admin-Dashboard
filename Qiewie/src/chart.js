var highcharts = require('../node_modules/highcharts/scripts/highcharts.js')
var highcharts = require('../node_modules/highcharts/scripts/highcharts-more.js')

var chart = function (loggedInUsers) {
    $('#chart').highcharts({

        chart: {
            type: 'gauge',
            backgroundColor: 'transparent',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            dataLabels: {
                align: 'left',
                enabled: true,
                style: {
                    fontSize: '22px'
                }
            },
            min: 0,
            max: 50000,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            plotBands: [{
                from: 0,
                to: 10000,
                color: '#287263'
            }, {
                from: 10000,
                to: 35000,
                color: '#005B80'
            }, {
                from: 35000,
                to: 50000,
                color: '#3CB66E'
            }]
        },

        series: [{
            name: 'Users Logged in Now',
            data: [loggedInUsers],
            dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '15px'
                    }
                }
        }],

        credits: {
           enabled: false
        }

    })

}

module.exports = chart
