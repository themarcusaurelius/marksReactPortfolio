const express = require('express');
const formData = require('express-form-data');
//const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect Database
//connectDB();

const contact = require('./routes/api/contact');

// Init Middleware
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }));
app.use(formData.parse())

//Define Routes
app.use('/api/contact', require('./routes/api/contact'));

//Configuration for Express to behave correctly in production environment
if (process.env.NODE_ENV === 'production') {
    //First - Making sure express will serve production assets - main.js, main.css, etc
    app.use(express.static('client/build'));
    //Second -Express will serve up the index.html file if it doesn't recognize the route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
  };
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.group(`Motha Fuckin Serva Started On ${PORT}`));