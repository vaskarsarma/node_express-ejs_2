const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const homerouter = require('./routes/home');
const userrouter = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homerouter.routes);
app.use(userrouter);

app.use((req, res, next) => {
	res
		.status(404)
		.render('404', { docTitle: 'Page Not Found'});
});

app.listen(3000, () => {
	console.log(`Server started on 3000`);
});
