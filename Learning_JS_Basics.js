//  *************************** The Way I Learnt JavaScript Master ****************************

// ! Reference Documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript

// ! JavaScript is a dynamically typed language

// Print statement
console.log("Hello")

// Print on pop up in browser
// *alert("Hello") cant run in terminal can only be run on a browser

// !Variables

// **const
const myVariable = 144552 //Cant be changed
console.log(myVariable)
// myVariable = 2 //Not allowed
// console.log(myVariable) will say not accepted

// **For variables always use let
let myVariable1 = "ani@india.com" //Scope is justified
console.log(myVariable1)
myVariable1 = "ani@lla.com"
console.log(myVariable1)

// **For variables var is not used widely
var myVaraiable2 = "121212" //Scope is not justified
console.log(myVaraiable2)
myVaraiable2 = "212121"
console.log(myVaraiable2)

// **Not recommended
myVariable3 = "India"
console.log(myVariable3)
myVariable3 = "Bengaluru"
console.log(myVariable3)


// Another method to print
console.table([myVariable, myVariable1, myVaraiable2, myVariable3])

// If a variable is declared and not given any value js considers it be undefined
let myVariable4 
console.log(myVariable4)


// !Data Types 
// *Data types are catagorised into 2 types based on the way data is stored in memory and is accessed from memory
/* Primitive Data Types (These are given to user making a copy of them when called) //! Stack
   number (int) - number
   bigint       - 
   string       - string
   boolean      - boolean
   null         - object
   undefined    - undefined
   symbol       - unique value
*/

let myVar0 = 1
let myVar1 = "ani"
let myVar2 = false
let myVar3 = null
let myVar4 
let myVar5 = Symbol('123') // will produce a unique value, even if another symbol is passed same data the value wil not be same will always be unique

console.table([myVar0, myVar1, myVar2, myVar3, myVar4])
console.table([typeof (myVar0),typeof (myVar1),typeof (myVar2),typeof (myVar3),typeof (myVar4)])

//*String
// String can be declared in one more way
const myString = new String('Hello World') // new keyword for using objects and () in string constructor we put string
console.log(myString[0])// Using this method to declare makes a key value pair where each letter is a value and numbers 0 to last index are key so by using this we can access any letter in the string using its key
console.log(myString.__proto__)// Their are many prototypes of string which you can access and give is one method and learning max of these prototypes makeup for learning complete stack Ex of prototypes are .length .toUpperCase() and all
//*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 
/*
    .length
    .toUpperCase()
    .toLowerCase()
    .charAt(value)
    .indexOf(value)
    .substing(start , end)
    .slice (start , end) this can take neg values
    .trim()
    .replace('findvalue' , 'replacevalue')
    .includes(value) will give true or false
    .split(seperator) or .split(separator , limit) will give a array of elements made split by the separator
*/

//*Number
// Numbers can be declared in one more way
const myNumber = new Number(100)
console.log(myNumber)// Using this method to declare makes a key value pair where datatype is the key and number or the input is the value, Their are many prototypes of number which you can access and give is one method
/*
    .toString()
    .toFixed(value) to get the # of digits after . as much as value
    .toPrecision(value) 
    .toLocaleString() puts commas to make a long number readable and this will be US standards for indian values in argument put ('en = IN')

*/

// to show stack is used and we get a copy of the memory 
let myStack1 = "One"
let myStack2 = myStack1
console.log(myStack1)
myStack2 = "Two"
console.log(myStack1)
console.log(myStack2)

/* Non-Primitive Data Types (When these are called upon they directly give refrence from the memory) //! Heap
   Array     - Undefined
   Objects   - object
   Functions - object function
*/

const array = ["one", "two", "three", "four"]

let myObject = {
    name : "Anirudh",
    age : 21,
    city : "Kalaburgi"
}

const myFunction = function(){
    console.log("Hello Function")
}

console.table([typeof(arrary), typeof(myObject), typeof(myFunction)])

// to show heap is used and we get reference of the memory
let myHeap = {
    email: "ani@123.com",
    upi: "user@ybl"
}
let myHeap1 = myHeap
console.log(myHeap.email)
myHeap1.email = "ani@321.com"
console.log(myHeap.email)
console.log(myHeap1.email)

// !Data Type Conversion
let varo = 300
console.log(varo)
console.log(typeof varo) //number

varo = "300"
console.log(varo)
console.log(typeof varo) //string

let varoInNum = Number(varo)
console.log(varoInNum)
console.log(typeof varoInNum) //number

varo = "30a"
console.log(varo)
console.log(typeof varo) //string
varoInNum = Number(varo)
console.log(varoInNum) //NaN = Not a Number
console.log(typeof varoInNum) //number

varo = null
console.log(varo) //null
console.log(typeof varo) //object
varoInNum = Number(varo)
console.log(varoInNum) //0
console.log(typeof varoInNum) //number

varo = undefined
console.log(varo) //undefined
console.log(typeof varo) //undefined
varoInNum = Number(varo)
console.log(varoInNum) //NaN
console.log(typeof varoInNum) //number

// *Above we showed conversion to Number the same way variables can be converted to different datatypes 
// ** Number()
// ** String()
// ** Boolean()

// !Operations

// *Basic Operations
console.log(2+2) //add
console.log(2-2) //sub
console.log(2*2) //mul
console.log(2/2) //div
console.log(2**2)//pow
console.log(2%2) //mod


// *Concat
let str0 = "Hello"
let str1 = " World"
let str3 = str0+str1
console.log(str3)

// Modern method of concatination (Also called as String interpolation)
const value = "Anirudh"
const age = 21

console.log(`My name is ${value} and my age is ${age}`)
console.log(`My name is ${value.toUpperCase} and my age is ${age}`) // this can also be done

console.log("1"+2)  //12
console.log(1+"2")  //12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log(1+"2"+2)//122

// *Comparision
console.log(2>3)
console.log(2<3)
console.log(2>=3)
console.log(2<=3)
console.log(2==3)
console.log(2!=3)

console.log(2 === 2)//will check even the datatype is same or not

//! Maths 
// It is a default library in JS its datatype is object and has functions in it i.e prototye
/*
    Math.abs(value)
    Math.round(value)
    Math.ceil(value)
    Math.floor(value)
    Math.max(array of values)
    Math.min(array of values)
    Math.random() values will be between 0-1  
*/

//! Datesc 
// Datatype of date is object
let myDate = new Date()
console.log(myDate)
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

let myDate1 = new Date(2002, 7 , 9, 14, 30)
console.log(myDate1.toLocaleString())
console.log(myDate1.getTime())