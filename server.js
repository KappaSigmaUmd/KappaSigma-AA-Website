//To start the server:
//Make sure in the package.json under scripts there is "dev": "nodemon server.js"
//Then type: npm run dev (in the terminal)
//To stop:
//Ctrl C (in the terminal)

//Load environment variables (from .env)
//require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Determine the server port:
// - Use the environment variable PORT if available (for deployment)
// - Otherwise, default to 1000 for local development
const PORT = process.env.PORT || 300;

// app.use(express.urlencoded({ extended: false })) //Use for forms, parses incoming form data

// Set EJS as the view engine (for dynamic pages later)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

//Add all of your routes to this server file
const routesPath = path.join(__dirname, 'routes'); 
fs.readdirSync(routesPath).forEach(file => {
    if(file.endsWith('.js')) {
        const route = require(`./routes/${file}`); //Dynamically imports a route module from the routes folder
        const routeName = file === "home.js" ? "/" : `/${file.replace('.js',"")}`; //Add a / and removes the .js
        app.use(routeName, route); //Add the route to the app object
    }
});

// const rushRoute = require('./routes/about');
// app.use('/rush', rushRoute);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});


