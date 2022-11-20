console.log("Hello from main.js");

/************** Primitive Data types in Java Script ***************/

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

// Symbol type

/************** Non Primitive Data types in Java Script - Typically a collection of values **************/


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



