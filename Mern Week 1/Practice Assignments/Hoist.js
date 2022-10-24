// Problem 1
// console.log(hello);
// var hello = 'world';

// Prediction "undefined"
// Output is "undefined"


// Problem 2
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// Prediction
// var needle = 'haystack';
// var needle = 'magnet';
// test();
// function test() {
//     console.log(needle);
// }
// console.log(needle); // magnet

// Output
// Original | Prediction
// magnet | magnet

// Problem 3
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// Prediction
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); // super cool

// Output
// Original | Prediction
// super cool | super cool

// Problem 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// Prediction
// var food = 'chicken';
// console.log(food); // chicken
// eat();
// food = 'half-chicken';
// console.log(food); // half-chicken

// Output
// Original | Prediction
// chicken, half-chicken | n/a

// Problem 5
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// Prediction
// Error mean is not a function

// Output
// Original | Prediction
// Error mean is not a function | Error mean is not a function

// Problem 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// Prediction
// console.log(genre); // undefined
// var genre = "disco";
// rewind();
// genre = "rock";
// console.log(genre); // rock
// var genre = "r&b";
// console.log(genre); // r&b
// console.log(genre); // disco

// Output
// Original | Prediction
// undefined | undefined
// rock | rock
// r&b | r&b
// disco | disco

// Problem 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// Prediction
// dojo = "san jose";
// console.log(dojo); // san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); // seattle
//     var dojo = "burbank";
//     console.log(dojo); // burbank
// }
// console.log(dojo);

// Output
// Original | Prediction
// san jose | san jose
// seattle | seattle
// burbank | burbank
// seattle | n/a