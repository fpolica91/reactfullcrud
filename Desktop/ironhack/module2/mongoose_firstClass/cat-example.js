
const mongoose = require('mongoose');
const Cat = require('./models/Cat')


// Connect MongoDB at default port 27017.
mongoose
    .connect('mongodb://localhost/catApp', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));




// CREATE IN MONGOOSE
Cat.create({
    name: "Roberto",
    age: 20,
    color: "blue"

})
    .then(cat => console.log(`cat worked ${cat}`))
    .catch(err => console.log(err))


// FIND!
Cat.find({
    age: { $lt: 30 }
})
    .then(cat => console.log(cat))
    .catch(err => console.log(err))

Cat.findById("5d48d2d01b91cc113298a3f5")
    .then(cat => console.log(cat))
    .catch(err => console.log(err))


// UPDATE 
// ================== updating cats============//
Cat
    .findByIdAndUpdate("5d48d2d01b91cc113298a3f5",
        { $set: { name: "Jesus", age: 10 } })
    .then(cat => console.log(cat))
    .catch(err => console.log(err))


// DELETE
// Cat.findByIdAndDelete("5d48d2d01b91cc113298a3f5")
//     .then(cat => console.log(`deleted ${cat} with given ID`))