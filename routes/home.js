const express = require('express');

const router = express.Router();

const userlist = [];

router.get('/', (req, res, next) => {
	//console.log('home -> / ');
	res.render('add-users', {
		docTitle: 'Add Users',
		path: '/',
	});
});

// /add-users => POST
router.post('/add-users', (req, res, next) => {
	//console.log('home-> /add-users ');	
	userlist.push({ username: req.body.username });
	//console.log(userlist);
	res.redirect('/users');
});

exports.routes = router;
exports.userlist = userlist;
