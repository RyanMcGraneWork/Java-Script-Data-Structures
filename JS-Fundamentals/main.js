console.log("Hello from main.js");

/********************* INDEX for File *********************/
// *** Prmitive data types
// *** Non Primitive Data types - collection of values
// *** Operators
// *** Type conversions
// *** Equality
// *** Condtional statements
// *** Looping 
// *** Functions
// *** Scope
// *** Closures
// *** Function Currying
// *** this operator
// *** Prototype
// *** Prototypal inheritance
// *** class
// *** iterables and operators
// *** Generators


/************** Primitive Data types in Java Script ***************/
/*
    --> Number
    --> Strings
    --> boolean
    --> bigInt
    --> symbol
    --> null
    --> undefined

*/

//Strings
const name = "Ryan";
const language = "JavaScript";
const channel = `codevolution`;

//numbers
const total = 0
const PI = 3.14

//Booleans
const isPrimeNumber = true
const isNewUser = false

//Undefined variable
let result
console.log(result)

//setting undefined explicitly, should always use null
const res = undefined

//Null types
const data = null


//BigInt type

// Symbol type - represents unique values 

/************** Non Primitive Data types in Java Script - Typically a collection of values **************/
/*
    --> Object
    --> arrays   

*/


//Object literals, key must be string, int or symbols
const person = {
    firstName : 'Bruce',
    lastName : 'Wayne',
    age : 30  
}

console.log(person.firstName)

//arrays
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[0])

// JS is dynamically typed so anything can be assigned to a variable, 
// the most recent assignment will be the value the variable holds
let a = 10 

a = 'ryan' 

a = true 

console.log(a)


/************** Operators **************/
/*
    --> Assignment Operators
    --> Arithmetic Operators
    --> Comparison Operators
    --> Logical Operators
    --> String Operators
    --> Other Operators
*/

// Assignment operator
let x = 10
let y = 5
let z = '123'
let v = 123

//Arithmetic operator 
console.log(x % y)
console.log(++x)
console.log(--y)

//Comparison operator 
console.log(z == v ,  'comparison operator')
console.log(z != v)
console.log(z === v)
console.log(z !== v)

console.log(x > y)
console.log(x < y)

//Logical operators

//--- The AND operator, both have to be true to return true
const isValidNumber = x > 8 && 8 > y
console.log(isValidNumber)

//--- The OR operator, one of the sides has to be true to return true
const isValid = x > 20 || 8 > y
console.log(isValid)

//--- Logical NOT operator, which mitigates the value 
const isOpen = true 
console.log(!isOpen)

//String operators

//--- + operator concats two words together when used with strings
//--- Can integrate bugs with this behaviour
console.log('Bruce' + 'Wayne')

//Terernary operator 
const isEven = 10 % 2 === 0 ? 'Number is even' : 'Number is false'
console.log(isEven)


/************** Type Conversions **************/
/*
    --> Implicit conversion - also known as coercion where JavaScript itself witll
        automatically convert the type.
    --> Explicit conversion - where you manually convert the type.
*/

//Implicit type conversions 

//---Javascript automatically converts the number to a string.
console.log(2 + '3')

console.log(true + '3')

//---Numeric strings will automatically be converted to numbers if there is aritmetic operator.
console.log('4' - '2')


//---This will return 4 as true is 1 and false is 0
console.log('5' - true)

//---This will return 5
console.log('5' - false)


//Explicit type conversions
console.log(Number('5'))
console.log(parseInt('6'))
console.log(parseFloat('3.14'))

//---Converts the number 5 into a string
console.log(String(5))

//---You can also use toString, but this will not work on null or undefined
console.log((500).toString())

//---Everything returns true here, except null, undefined, 0, '', NaN
console.log(Boolean(10))

//---If you put a space in an empty string then it with returns true
console.log(Boolean(' '))


/************** Equality **************/
/* 
    == Allows coercion
    === Does not allow coercion
    == will treat these values as false always - 0, '', null, undefined
*/
const test1 = '10'
const test2 = 10

console.log(test1 == test2)
console.log(test1 === test2)

/************** Conditional Statements **************/
/* 
    if
    else
    else if
    switch
*/
const num = -5  

if(num > 0)
{
    console.log('Number is Positive')
}
else if(num < 0){
    console.log('Number is Negative')
}
else{
    console.log('Number is Zero')
}


//Switch statement
const color = 'red'

switch(color){
    case 'red': 
        console.log('Color is red')
        break
    case 'blue': 
        console.log('Color is blue')
        break
    case 'green': 
        console.log('Color is green')
        break
    default: 
        console.log('Not a valid color')
}

/************** looping code **************/
/* 
    --> for loop
    --> while loop
    --> do while loop
    --> for of loop
*/

for(let i = 1; i <= 5; i++){
    console.log('Iteration number ' + i)
}

//--- While loop
let m = 1;
while(m <= 5){
    console.log('Iteration number while ' + m)
    m++;
}

//--- do while loop
let n = 1;
do{
    console.log('Iteration number do while ' + n)
    n++;
} while(n <= 5)


//--For of loop - used for objects and so on.
const numArray = [1, 2, 3, 4, 5]

for(const num of numArray){
    console.log('Iteration number for of loop', num)
}

/************** Functions **************/
/*  fundamental building block in javascript.
    --> Functions are reusable.
    --> help divide a complex problem into smalled tasks.
*/

//---Function parameter username
function greet(username){
    console.log('Good morning, buenas dias!, Guten Morgen ' + username)
}

//---Function argument 'ryan'
greet('Ryan')
greet('Conor')


//---Function that adds its two arguments 
function add(a, b)
{
    return a + b
}

const nameMerge = add('susan', 'mary')
console.log(nameMerge)

//Arrow Functions
const arrowSum = (a, b) => {
    return a + b
}

const sum = arrowSum(25, 25)
console.log(sum)




/************** Scope  **************/
/* 
    scope basically determines the accessibility or visibility of variables
    --> Block Scope
    --> Function Scope
    --> Global Scope
    --> Nested Function Scope
 
*/
//Global Scope
const myNum = 100

//This will not ovveride whats in the local scopes
//const myName = 'Ryan'

//Block scope - let and consts variables can only be accessed in their block scope
// Can access global scope variables aswell
if(true)
{
    const myName = 'Ryan'
    console.log(myName)
    console.log(myNum)
}
//--- console.log(myName) - out of the block scope will throw an error


//Function Scope - let and consts only available in the function scope
//---myName is same variable used in different scopes so they don't override.
function testFunctionScope(){
    const myName = 'Mcgrane'
    console.log(myName)
    console.log(myNum)
}
//---console.log(myChair) - out of function scope will throw an error

testFunctionScope();


//Nested Function Scope (lexical scoping)
//-- JavaScript will start at the inner function to check to see if the variables are 
//-- present. It will work its way back up a level each time until it finds the variable.
let aa = 10
function outer(){
    let bb = 20
    function inner(){
        let cc = 30
        console.log(aa, bb, cc)
    } 
    inner()
}
outer()


/************** Closure  **************/
/* 
   --> A combination of a function bundled together with references to its surrounding
   state. Closures are created every time a function is created, at function creation time.

   --> In JS, when we return a function from another function, we are effectively returning a 
   combination of the function definition along with the functions scope. This would let the function 
   definition have an associated persistent memory which could hold on to live data between executions.
   That combination of the function and its scope chain is what is called a closure in JS.
 
*/

//-- 1 is returned because of nested function scope 

function outter(){
    let counter = 0
    function innner(){
        counter++
        console.log(counter)
    }
    innner()
}
outter()

//-- this one returns 1 and 2 as we are returning the function instead of invoking it in the inner function
//-- this is closures

function outter(){
    let counter = 0
    function innner(){
        counter++
        console.log(counter)
    }
    return innner
}
const fn = outter()
fn()
fn()



/************** Function Currying  **************/
/* 
   --> Currying is a process in functional programming in which we transform a function with 
         multiple arguments into a sequence of nesting functions that take one argument at a time.

   --> Function f(a, b, c) is transformed to f(a)(b)(c)

   --> currying can be used to create reusable functions 
 
*/

function summed(a, b, c){
    return a + b + c
}

console.log(summed(2, 3, 5), 'Not steph Curry')

//sum(2,3,5) -> to sum(2)(3)(5)

function curry(fn)
{
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(summed)
console.log(curriedSum(2)(3)(5), 'Curried sum function')

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)


/************** this Keyword  **************/
/* 
   --> How to determine 'this' keyword in JS
   --> Implicit Binding
   --> Explicit binding
   --> New binding
   --> Default binding

   --> *** Order of Precedence ***
    --> New binding
    --> Explicit binding
    --> Implicit binding
    --> Default binding 
 
*/

// Implicit Binding - states that when a function is invoked with the dot notation
// the object to the left of the dot, is what this keyword is referencing. 
const superHero = {
    name: 'Batman',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
}

// -- dot notation to invoke the function
superHero.sayMyName()


//Explicit Binding - using the call method allows you to specify the context in whcih it is invoked.
function sayMyName(){
    console.log(`My name is ${this.name}`)
}

sayMyName.call(superHero)

// New binding - when we say new, JS under the hood will add an empty object {} to hold the 
// name property in an object
function superPerson(name){
    this.name = name
}

const p1 = new superPerson('Superman')
const p2 = new superPerson('Wonderwoman')

console.log(p1.name, p2.name)

// Default binding - this keyword relies on global scope. You need to have the variable declared globally.
sayMyName()
 


/************** Prototype **************/
/* 
   --> Allows us to add to our existing function on function invokation. 
   --> So we added the function getfullName() by accessing the importantPerson
        prototype feature which allows us to define once and use for any instantiated object 
        of this constructor function.
    --> because JS is dynamic, we can attach properties of functions / objects at any time   
    --> In JS every function has a Prototype property which points to an object.
    
    Two main uses of Prototype:
    --> Share propeties and methods across instances
    --> is inheritance
*/

//-- Constructor function
function ImportantPerson(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const vipPerson = new ImportantPerson('Bruce', 'Wayne')
const vipPerson2 = new ImportantPerson('Clark', 'Kent')

// --This will only be useful for 1 time. We want this get full name function usable all the time 
// --so we need to implement prototype
//      vipPerson.getFullName = function()
//        {
//          return this.firstName + ' ' + this.lastName
//        }

ImportantPerson.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

console.log(vipPerson.getFullName(), 'Protype working')
console.log(vipPerson2.getFullName(), 'Protype working')

/************** Prototypal Inheitance **************/
/* 
   --> 
  
*/

function SuperHeroPerson(fName, lName){

    //this ={}
    ImportantPerson.call(this, fName, lName)
    this.isSuperHero = true
}

SuperHeroPerson.prototype.fightCrime = function(){
    console.log('Fighting crime')
}

//Method is inherited through the prototype chain
SuperHeroPerson.prototype = Object.create(ImportantPerson.prototype)

const batman = new SuperHeroPerson('Bruce', 'Wayne')

SuperHeroPerson.prototype.constructor = SuperHeroPerson
console.log(batman.getFullName())

/************** Classes **************/
/* 
   --> Class Keyword 
   --> Classes are just syntactical sugar over the standard protypal inheritance
   --> know how to:
    --> create a class
    --> initalise properties
    --> add methods
    --> create an indtance of the class
    --> inherit with super and extends key words

*/

//re-writing the above code with a class

class Persons{
    constructor(firstNme, lastNme){
        this.firstName = firstNme
        this.surName = lastNme
    }

    sayMyNames(){
        return this.firstName + ' ' + this.surName
    }
}

const classP1 = new Persons('Conor', 'McG')
console.log(classP1.sayMyNames())

//-- Class based inheritance implemented in JS. Syntactical sugar for the above prototype code.
//-- the super key word allows us to call the constructor from the class were extending.
class SuperHuman extends Persons{
    constructor(firstNme, lastNme){
        super(firstNme, lastNme)
        this.isSuperHeros = true
        
    }

    fightCrime(){
        console.log('Fighting Crime')
    }
}

const superman = new SuperHuman('Clark', 'Kent')
console.log(superman.sayMyNames())
console.log(superman)

/************** Iterables and Iterators **************/
/* 
   --> For loop
   --> While loop
   --> do While loop

   --> the introduction of iterables and iterators in JS, make it easier for us 
        to iterate over data of any data types, making all our code uniform and easier 
        to understand.

    -->An object which implements the iterable protocol is called an iterable.
    --> For an object to be an iterable it must implement a method at the key 
        [Symbol.iterator]
    --> That method should not accept any argument and should return an object which 
        conforms to the iterator protocol.
    --> The iterator protocol decides wheter an object is an iterator.
    --> The object must have a next() method that returns an object with two properties.
        -- value: which gives the current element
        -- done: which is boolean value indicating whether or not there are any more elements
                could be iterared upon.
*/

//-- Strings
const str = 'Ryan'

//-- For loop
for(let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}

//-- For of loop
for(const char of str){
    console.log(char)
}


//-- Arrays
const array = ['B', 'O', 'H', 'S']

//-- for loop
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//-- for of loop
for(const item of array){
    console.log(item)
}

//Creating own iterator or iterable
//JS does this internally for strings, arrays, maps and sets under the hood
const obj = {
    [Symbol.iterator]: function(){
        let step = 0
        const iterator = {
            next: function(){
                step++
                if(step === 1){
                    return {value: 'Hello', done: false}
                }else if(step === 2){
                    return {value: 'World', done: true}
                }
                return {value: undefined, done: true}
                
            }
        }
        return iterator
    }
}

for(const word of obj){
    console.log(word)
}

/************** Generators **************/
/* 
   --> Generators are for instead of writing your own iterators and iterables, generators
    are a special class of functions that simplify the task of writing iterators.

    --> Going to create the example above to show the difference.

    --> no need to implement a lot of the functions above:
        like symbol.iterator ot next()
   
*/

function normalFunction(){
    console.log('Hello')
    console.log('World')
}

//-- Special function uses *
//-- Generator functions can pause their exeuction
//-- Yield is an operator in which a generator can pause itself.
function* generatorFunction(){
    yield 'Helloppp'
    yield 'Worlddd'
}

//-- Invoking the function, Generator functions always return a generatorObject
//-- this generatorObject is an iterator, so can be used in for of loops
const generatorObject = generatorFunction()

for(const word of generatorObject){
    console.log(word)
}