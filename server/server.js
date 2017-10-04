import express from 'express';
import upath from 'upath';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Set up the express app
const app = express();

// Port to listen from should be determined by evironment and defaults to 3000
const port = process.env.PORT || 3000;

// Key for authenticating user sessions
process.env.SECRET_KEY = 'OX8b79Ie89Fd6sh5ysg1JR93d8tR5E892j7Yi0';

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(upath.join(__dirname, '/../../client/public')));

// Simple GET route for index.html
app.get('/', (req, res) => {
  res.sendFile(upath.join(__dirname, '/../../client/public/index.html'));
});

// Open port and listen from it 
app.listen(port, () => {
  console.log('Listening on port 3000!');
});

export default app;
