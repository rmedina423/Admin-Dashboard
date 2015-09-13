var express = require('express')
var router = express.Router()

var hbsfy = require('hbsfy')

var primaryComponentsTemplate = require('/home/ryan/Sites/admin-dashboard/templates/primary-components.hbs')
var secondaryComponentsTemplate = require('/home/ryan/Sites/admin-dashboard/templates/secondary-components.hbs')
var tertiaryComponentsTemplate = require('/home/ryan/Sites/admin-dashboard/templates/tertiary-components.hbs')

var AdminData = require('/home/ryan/Sites/admin-dashboard/QiewieAdminData.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	tertiary: tertiaryComponentsTemplate(),
  	primary: primaryComponentsTemplate({
		premium: AdminData.premium,
		corporate: AdminData.corporate,
		municipal: AdminData.municipal
  	}),
	secondary: secondaryComponentsTemplate({
		numTweets: AdminData.numTweets,
		numLikes: AdminData.numLikes,
		newUsers7Days: AdminData.newUsers7Days
	})
  })
})

router.get('/api/loggedInUsers', function(req, res, next) {
	res.json(AdminData.data.loggedInUsers)
})

router.get('/api/locations', function(req, res, next) {
	res.json(AdminData.data.loc)
})

module.exports = router