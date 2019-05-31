const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'))
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.group(`Motha Fuckin Serva Started On ${PORT}`));