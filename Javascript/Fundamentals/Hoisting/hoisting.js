/* 1 */

console.log(hello);
var hello = 'world';

/* AFTER HOISTING */

// var hello;
// console.log(hello); // logs undefined
// hello = 'world'; 


/* 2 */

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/* AFTER HOISTING */

// var needle;
// function test() {
//     var needle = 'magnet';
//     var needle = 'magnet';
//     console.log(needle);
// }


/* 3 */

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/* AFTER HOISTING */

// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); // logs only okay
// }
// brendan = 'super cool';
// console.log(brendan); // logs super cool


/* 4 */

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/* AFTER HOISTING */

// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food); // logs half-chicken
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // logs chicken


/* 5 */

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/* AFTER HOISTING */

// var mean;
// mean(); // error: mean is not a function (hasn't been assigned yet)
// console.log(food); // error: unknown variable 'food'
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food); // chicken
//     food = "fish";
//     console.log(food); // fish
// }
// console.log(food); // error: unknown variable 'food'


/* 6 */

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/* AFTER HOISTING */

// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre); // rock
//     genre = "r&b";
//     console.log(genre); // r&b
// }
// console.log(genre) // undefined
// genre = "disco";
// rewind() // rock, r&b
// console.log(genre); // disco


/* 7 */

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/* AFTER HOISTING */

// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // seattle
//     dojo = "burbank";
//     console.log(dojo); // burbank
// }
// dojo = "san jose";
// console.log(dojo); // san jose
// learn(); // seattle, burbank
// console.log(dojo); // san jose


/* 8 */

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/* AFTER HOISTING */

// function makeDojo(name, students){
//     const dojo;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; // error: assignment to constant
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // dojo { name: "Chicago", students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // error: assignment to constant