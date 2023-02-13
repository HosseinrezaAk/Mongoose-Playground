const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new Schema({
    name: { //data validation with specific validation message
        type: String,
        required: [true, "Please check your entry, no name specified"]
    },
    rating: { //data validation
        type: Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
   
    rating: 4,
    review: "Pretty solid as a fruit."
});

// fruit.save();
const personSchema = new Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);
const pineapple = new Fruit({
    name : "Pineapple",
    rating: 6,
    review: "not bad"
});
const person = new Person({
    name : "Alex",
    age: 23,
    favouriteFruit: pineapple
});

person.save();

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


// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfuly saved all the fruits");
//     }
// });

// READING DATA
Fruit.find( function(err, fruits){
    if(err){
        console.log(err);

    }else{
        mongoose.connection.close(); // to close the connection
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
        
    }
});

//UPDATE 

// Fruit.updateOne({_id:"63e89f43af1c25ff278d2f54"},{name: "Peach"}, function(err){
//    if(err){
//     console.log(err);

//    }else{
//     console.log('Successfuly Updated the document');
//    } 
// });

// Fruit.deleteOne({name: "Peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfuly deleted the data");
//     }
// })


