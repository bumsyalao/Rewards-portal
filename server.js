const path = require('path');
const express = require('express');
const config = require('./webpack.config');

const compiler = require('webpack')(config);
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const ENVIRONMENT = process.env.NODE_ENV;
const PORT = parseInt(process.env.PORT, 10) || 3000;

// app.use(express.static('dist'));
app.use(express.static(__dirname + '/dist'));
// app.use(express.static(path.join(__dirname, './src/')));

if (ENVIRONMENT === 'development') {
	// Attach webpack dev server to running app
	
	(serverInstance => {
		const options = {
			historyApiFallback: true,
			hot: true,
			noInfo: true,
			publicPath: config.output.publicPath
		};
		serverInstance.use(webpackDevMiddleWare(compiler, options));
		serverInstance.use(webpackHotMiddleware(compiler));
	})(app);
} 


app.get('/*', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.set('port', PORT);

app.listen(PORT, () => {
	console.log(`Reward Portal running on port ${PORT} in ${ENVIRONMENT} mode`);
});
