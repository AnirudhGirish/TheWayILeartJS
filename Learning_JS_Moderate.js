//! The Way I learnt JS 
// Moderate 

//!Arrays 
// It is an object which enables storing of multiple items under a single variable name, and items can be of different datatypes

const myArray = [0, 1, 2, 3, 4]
const myArray1 = ["One", "Two", "Three"]
// Arrays in JS are resizeable
// In JS on copying array it creates shallow copies.
// Shallow and deep copy: Shallow copy of an object is a copy whose properties share same reference point. And deep copies do not share the same reference point.

//Another way of declaring array
const myArray3 = new Array(1,2,3,4)

//* Methods in Arrays

console.log(myArray)
myArray.push(5) //Push .push(value)
myArray.push(6)
console.log(myArray)
myArray.pop()  //Pop .pop()
console.log(myArray)

myArray.unshift(6)
console.log(myArray)
myArray.shift()
console.log(myArray)

console.log(myArray.includes(5)) //Question if present 
console.log(myArray.includes(1)) // returns boolean

console.log(myArray.indexOf(1)) // returns the idex of the argument value

console.log(Array.isArray("Anirudh"))// to know if it is an array
console.log(Array.from("Anirudh")) // to convert it to array

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3))//Creates an array of the argumented elements

// Slice Splice
console.log("A ", myArray)
const myArray4 = myArray.slice(1,3)
console.log("Slice ", myArray4) //Slice
console.log("B ", myArray)
const myArray5 = myArray.splice(1,3) //Splice
console.log("Splice ",myArray5)
console.log("C ", myArray)

//Push pop
const myArr = ["Alpha", "Beta", "Gamma"]
const myArr1 = ["One", "Two", "Three"]
const myArr2 = ["Alpha", "Beta", "Gamma"]
myArr.push(myArr1) // this puts array in an array and push pushes array in the existing array
console.log(myArr)
const combArr = myArr.concat(myArr1) // this puts elements of array in an onther array and concat puts up all values in new array
console.log(combArr)

//Spread operator
const combArr1 = [...myArr1, ...myArr2]
console.log(combArr1)

//Flat operator
const randArr = [1,2,3,[4,5],6,7,[8,9,[10,11],12],13,14]
const flatArr = randArr.flat(Infinity) // the .flat(value) the argument value is the depth you want flat to solve and value can be given infinity to flatten any number of depth present
console.log("Random Array with Depth", randArr)
console.log("Arrray operated with flat operator", flatArr)

//!Objects
// If objects created using literal method no singleton is created if created using constructor singleton is created
// declaring objects : method 1 (literals)
const mySymbol = Symbol("MyKey1")
const myObj = {
    name: "Anirudh",
    age: "21",
    fullname:{
        fathersname: "Girish",
        surname: "Galagali"
    },
    [mySymbol]: "mykey1",
    isHere: false,
    lastHere: ["Monday", "Saturdday"]
}
// declaring objects : method 2 (constructors)
const myObj1 = new Object()

console.log(myObj)
//Accessing objects 2 methods
console.log("Name in obj from dot method:", myObj.name) //method 1
console.log("Age in obj from dot method:",myObj.age)  //method 1
console.log("Name in obj from square bracket method:",myObj["name"])  //method 2
console.log("Age in obj from square bracket method:", myObj["age"])  //method 2
console.log(myObj[mySymbol])
console.log("Fullname in obj from dot method:",myObj.fullname) 
console.log("Fullname in obj from dot method:",myObj.fullname.fathersname) 

console.log(myObj["name"])
myObj.name = "Abhinav" // Assigning or changing values from the object
console.log(myObj["name"])

//If you dont want to allow changes of an object
// Object.freeze(myObj) to use myObj further

//Creating a function in Object
myObj.greet = function(){
    console.log("Hello JS learner")
}
console.log(myObj.greet)  //prints "[Function (anonymous)]""
console.log(myObj.greet())//prints 2 lines "Hello JS learner" "undefined"

myObj.greetName = function(){
    console.log(`Hello JS learner, ${this.name}`)
    console.log(`Hello JS learner, ${this.age}`)
}
console.log(myObj.greetName())

//Above created myObj1 using constructor method so adding values in them
myObj1.name = "Anirudh"
myObj1.age = 21
myObj1.isHere = false
myObj1.fullname = {fathersname: "Girish",surname: "Galagali"}
console.log(myObj1.name)
console.log(myObj1)

// const myObj2 = {myObj,myObj2}//gives you object in object
const myObj2 = Object.assign({},myObj,myObj1)
console.log(myObj2) //same items will be considered as one
const myObj3 = {...myObj, ...myObj1, ...myObj2}// spread operator
console.log(myObj3)

console.log(myObj.hasOwnProperty('name'));

//Objects destructuring
const repoObj = {
    name: "TheWayILearntJS",
    size: "2",
    author: "Anirudh"
}

console.log(repoObj.name)// normal method

//destructurnig
const {author} = repoObj //destructuring method 1
console.log(author)
const {size: s} =repoObj //destructuring method 2
console.log(s)

//Objects API
// In an API call mostly it returns data in JSON format that is JavaScript Object Notation
// {
//     "name": "Anirudh",
//     "root": "mac-book-pro-13",
// }
//Example of JSON format

//!Functions 
function addition(num1, num2) {
    let num3 = num1 + num2
    console.log(`The sum of 2 numbers ${num1} and ${num2} added using function is ${num3}`)
    return num3
}
let a1 = addition(100, 500)
console.log(`Hel ${a1}`)
let a2 = addition("10", 5)
console.log(`Hell ${a2}`)
let a3 = addition(10, "5")
console.log(`Hello ${a3}`)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions link to functions reference
