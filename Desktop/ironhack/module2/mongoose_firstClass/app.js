// require all the packages you will need

const express = require("express");
const mongoose = require('mongoose')
const Cat = require('./models/Cat')
const bodyParser = require("body-parser")

// package that allows templating and dynamic views
const hbs = require("hbs");
const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect('mongodb://localhost/catApp', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

// import students data in app.js so we can use it in the routes


app.set("views", __dirname + "/views");

// sets hbs as default view engine
app.set("view engine", "hbs");



app.get("/cats", (req, res, next) => {
    Cat.find()
        .then(cats => {
            // makes it global in app.js
            res.locals.gatos = cats
            res.render("cats")
        })
        .catch(err => console.log(err))
})



// GET ROUTE -SEARCH QUERY
app.get("/search", (req, res, next) => {
    console.log("we typed", req.query)
    Cat.find({ name: req.query.catName })
        .then(cats => res.render("cats", { cats }))
        .catch(err => console.log("error finding cat", err))
})

// GET ROUTE - SHOW THE FORM TO USER 


app.get("/cats/new", (req, res, next) => {
    res.render('newCat')
})

// POST ROUTE TO SAVE CAT

app.post("/cats/create", (req, res, next) => {
    console.log("from-data", req.body)
    const newCat = {
        name: req.body.name,
        age: req.body.age
    }
    Cat.create(newCat)
        .then(cat => res.redirect('/cats'))
        .catch(err => console.log(err))
})



// ID NEEDS TO BE THE LAST ONE 

app.get("/cats/:id", (req, res, next) => {
    Cat.findById(req.params.id)
        .then(cat => res.render("catDetails", cat))
        .catch(err => console.log(error))
})


app.listen(PORT, () => console.log("running‍ on 3000"));