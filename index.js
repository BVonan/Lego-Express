const express = require('express');
const app = express();
const quotes = require("success-motivational-quotes");

app.set("view engine", "ejs")
app.use(express.static("public"));

//route route home page
app.get('/', async (req, res) => {
    let ranQuote = quotes.getTodaysQuote();
    let url= "https://api.unsplash.com/photos/random/?client_id=II-q0Key9nKyewCE7NVEluCUHB3fghDwVIxGKlwz3ho&featured=true&query=legos";

    let response = await fetch(url);
    let data = await response.json();

    // console.log(data.urls.small)
    // console.log(ranQuote.body);
    // res.send can only be used once
  // res.send('<h1>Home Page!</h1>')
    res.render('home', {"famousQuote":ranQuote.body,
                       "Author":ranQuote.by, "imageURL":data.urls.small}); // cant use send and render at the same time
});



app.get('/welcome', (req, res) => {
    // res.send can only be used once
  // res.send('<h1>Home Page!</h1>')
    res.render('aloha') // cant use send and render at the same time
});


app.listen(3000, () => {
  console.log('server started');
});


// old syntax down below

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) { //use res by default
//   res.send('Hello World')
// })

// app.listen(3000) // port #
