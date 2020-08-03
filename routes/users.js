const express = require('express');

const router = express.Router();

const userdata= require("./home");

router.get('/users', (req, res, next) => {
	console.log('users / ' + JSON.stringify(userdata.userlist));

	res.render('view-users', {
		userlist: userdata.userlist,
		docTitle: 'View Users',
		path: '/users',
	});
});

module.exports = router;
