const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();
const personSchema = new Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name : "John",
    age: 25
});

// person.save();

// INSERT MANY
const kiwi = new Fruit({
    name: "Kiwi",
    rating : 9,
    review: "the best"
});

const orange = new Fruit({
    name: "Orange",
    rating : 6,
    review: "tasty"
});

const banana = new Fruit({
    name: "Banana",
    rating : 10,
    review: "the King"
});


Fruit.insertMany([kiwi, orange, banana], function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfuly saved all the fruits");
    }
});