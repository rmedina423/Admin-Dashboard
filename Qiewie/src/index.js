/* jshint node: true, asi: true */
var $ = require('jquery')

var Backbone = require('backbone')

// App
var App = require('./app')

// View: Landing Page
var Overview = require('./views/overview')
App.Views.overview = new Overview()

// App Router
App.Router = Backbone.Router.extend({

  // Route definitions
  routes: {
    '': 'index',
    'social_media(/)': 'socialMedia',
    'financial(/)': 'financial',
    'user_tracking(/)': 'userTracking',
    'web_services(/)': 'webServices',
    '*actions': 'defaultRoute'
  },

  // Route handlers

  index: function () {
    App.Views.overview.render()
  },

  socialMedia: function () {
    // console.log('Social Media View')
  },

  financial: function () {
    // console.log('Financial View')
  },

  userTracking: function () {
    // console.log('User Tracking View')
  },

  webServices: function () {
    // console.log('Web Services View')
  },

  defaultRoute: function (actions) {
    // console.log('404')
  }
})

$('aside a').click(function (event) {

  if ($(this).attr('class') === 'selected') {
    event.preventDefault()

  } else {
    $('aside a').removeClass('selected')
    $(this).addClass('selected')

    var headingName = $(this).find('h2').html()
    $('#title').html(headingName)

  }
})

$('.primary-header .search div:last-child').hover(function () {
  var $input = $(this).find('input')
  $input.addClass('search-active')

  setTimeout(function () {
    $input.removeClass('search-active')
  }, 10000)
})

var $aside = $('aside')
var $overlay = $('.main-overlay')

$('.navigation').on('click', function () {
  $aside.addClass('mobile-aside').css('display', 'initial')
  $overlay.addClass('active-overlay')
})

$('.main-overlay').on('mousedown', function () {
  $overlay.removeClass('active-overlay')
  $aside.removeClass('mobile-aside').css('display', 'none')
})

// Initiate the router
App.router = new App.Router()

Backbone.history.start()