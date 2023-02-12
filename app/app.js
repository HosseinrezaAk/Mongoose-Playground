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
const kiwi = new Fruid({
    name: "Kiwi",
    rating : 9,
    review: "the best"
});

const orange = new Fruid({
    name: "Orange",
    rating : 6,
    review: "tasty"
});

const Banana = new Fruid({
    name: "Banana",
    rating : 10,
    review: "the King"
});


