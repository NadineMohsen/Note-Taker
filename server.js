//Dependencies
const express = require('express');
//express configuration
const app = express();
//initial port
const PORT = process.env.PORT || 3001;
//routes
const api = require('./routes/api.js');
const html = require('./routes/html.js');

//Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api);
app.use('/html', html);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);