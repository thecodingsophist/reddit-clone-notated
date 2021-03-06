// the constant express imports express module using the keyword 'require'
const express = require('express')
// see https://stackoverflow.com/questions/27599614/var-express-requireexpress-var-app-express-what-is-express-is-it for commentary on what
// express() is, basically a function
const app = express()
// this constant is just defining the number of the port that we'll be connected to later
const port = 3000
const path = require('path')
const exphbs = require('express-handlebars')
//set up for handlebars, in order to use an npm package, you have to import it and then 'use' it to run
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// this is the first route, allowing the app to request and response, in which the response is "Hello World!"

app.get('/',function(req,res) {
    //res.render
  res.render('home');
});

// this prints in the console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
