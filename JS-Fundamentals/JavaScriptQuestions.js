/*************** How to empty an array in JavaScript? **************

--> Method 1 - arrayList = []
--> Method 2 - arrayList.length = 0
--> Method 3 - arrayList.splice(0, arrayList.length)
--> Method 4 - while loop with pop method (not recommended)

*/

//Problem - How do we empty this array
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// --Method 1: This is recommended if you don't have references to the original array arrayList
//              anywhere else because it will actually create a new empty array.
//              you need to be careful with the way of empty the array, because if you have referenced it 
//              as another variable, then the original reference array will remain unchanged.
arrayList = []

//Example: 
var arrayLst = ['a', 'b', 'c', 'd', 'e', 'f']; // created array
var anotherArrayList = arrayLst; // Referenced arrayList by another variable
arrayLst = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']


// --Method 2: This will empty the array and update all reference variables
arrayLst.length = 0;

//Example: 
var arrayLst = ['a', 'b', 'c', 'd', 'e', 'f']; // created array
var anotherArrayList = arrayLst; // Referenced arrayList by another variable
arrayLst.length = 0; // Empty the array by setting the length to 0
console.log(anotherArrayList); // Output []



// --Method 3: This will empty the array and update all reference variables
var arraysListed = ['a', 'b', 'c'];
arraysListed.splice(0, arraysListed.length);

//Example: 
var anotherArrayListed = arraysListed; // Referenced arrayList by another variable
arraysListed.splice(0, arraysListed.length); // Empty the array by setting the length to 0
console.log(anotherArrayListed); // Output [].


// --Method 4: This will empty the array, but not recommended
while(arrayList.length){
    arrayList.pop();
}


/*************** Explain what a callback is and provide a example example **************

--> A callback is a function that is passed into another function as an argument and is 
    executed after some operation has been completed.

*/

function modifyArray(array, callback){
    //do something to the array here
    array.push(100);

    //then executes the callback function that was passed
    callback();
}

var array = [1, 2, 3, 4, 5];

modifyArray(array, function(){
    console.log("array has been modfied", array)
});


/*************** Given a string reverse each word in the sentence **************

--> Reverse the string
--> Create the function for reversing the string 
--> create a reference to this reversed string.
---> create a referecne off this new reference and reverse the words

*/

var string = "Welcome to string heaven where everything is reversed and nonsense!"

function reverseWords(string, seperator){
    return string.split(seperator).reverse().join(seperator)
}

//This will output !esnesnon dna desrever si gnihtyreve erehw nevaeh gnirts ot emocleW
var reverseEntireSentence = reverseWords(string, "")

//this will output emocleW ot gnirts nevaeh erehw gnihtyreve si desrever dna !esnesnon
var reverseEachWord = reverseWords(reverseEntireSentence, " ")

console.log(reverseEntireSentence, 'Sentenced reversed')
console.log(reverseEachWord, 'Each word reverse')



/*************** How to check if an object is an array or not **************

--> The best way to find whether an object is instance of a particular class or not using 
    toString method from Object.prototype

--> Different way to check if object is an array:
    --> Array.isArray()
    --> ObjectName.constructor === Array
    --> Instanceof Array 
    --> Prototype.toString.call()
*/

const arrayNums = [1, 2, 3]
let result = {subject: "Science", marks: 97}
let namer = "Ryan"
let names = new Array("Jill", "Jack", "Billy")

console.log(typeof arrayNums)
console.log(typeof result)
console.log(typeof namer)
console.log(typeof names)


//-- Using the Array.isArray method
console.log(Array.isArray(arrayNums), 'Using the Array.isArray method'); // true
console.log(Array.isArray(result)); // false
console.log(Array.isArray(namer)); // false
console.log(Array.isArray(names)); // true


//-- Checking the constructor of the objects to see if they are arrays
//    Very rare case the object will have no constructor, if they were instantiated with
//     Object.create(null)

console.log(arrayNums.constructor === Array, 'using the constructor'); // true
console.log(result.constructor === Array); // false
console.log(namer.constructor === Array); // false
console.log(names.constructor === Array); // true


//-- The instanceof operator checks if a constructor function is found in the 
//      prototype chain of an object.
console.log(arrayNums instanceof Array, 'using the instanceof operator'); // true
console.log(result instanceof Array); // false
console.log(namer instanceof Array); // false
console.log(names instanceof Array); // true

//-- Using the object.prototype.call() method

console.log(Object.prototype.toString.call(arrayNums), 'using the prototype.toString.call method'); // [object Array]
console.log(Object.prototype.toString.call(result)); // [object Object]
console.log(Object.prototype.toString.call(namer)); // [object String]
console.log(Object.prototype.toString.call(names)); // [object Array]

// returns true
if (Object.prototype.toString.call(arrayNums) === '[object Array]'){
    console.log('Array!')
}else{
    console.log("ranom")
}


/*************** How to check if a number is an integer **************

--> A simple way to check if a number is an integer is to see if there is a remainder left 
    when you divide by 1.

*/

let testNum = 6

console.log(typeof(testNum));

function isInt(num){
    return num % 1 === 0;
}

console.log(isInt(4));

console.log(isInt(7.2))

/*************** Implement Enqueue and Dequeue using only two stacks **************

--> Enqueue means to add an element
--> Dequeue means to remove an element

*/

var inputStack = [] // first stack
var outputStack = [] // second stack


// For enqueue, just push the item into the first stack
function enqueue(stackInput, item){
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput){
    // Reverse the stack such that the first element of the output stack is the
    // last element of the input stack. After that, pop the top of the output to
    // get the first element that was ever pushed into the input stack

    if(stackOutput.length <= 0){
        while(stackInput.length > 0){
            var elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }

    return stackOutput.pop();
}

/*************** Duplicate an array **************

--> Use concat to duplicate the array

*/

function duplicate(arr){
    return arr.concat(arr);
}

const duplicateArray = duplicate([1,2,3,4,5,6])

console.log(duplicateArray)

// Reverse the array
const reverseArray = duplicateArray.reverse()
console.log(reverseArray)


/*************** Write a 'multiplication' function which will properly **************

--> Problem:
    --> console.log(mul(2)(3)(4)); // output : 24
    --> console.log(mul(4)(3)(4)); // output : 48

    --> know as function currying

*/
function multiplication(x){
    return function(y){         //anonymous function 
       return function(z){      //anonymous function 
            return x * y * z
        };
    };
};

console.log(multiplication(2)(3)(4))
console.log(multiplication(4)(3)(4))


/*************** Write a function that would allow you to do this **************

--> Problem:
        var addSix = createBase(6);
        addSix(10); // returns 16
        addSix(21); // returns 27
    
    
--> Solution:
        You can create a closure to keep the value passed to the function createBase even 
        after the inner function is returned.
        The inner function that is being returned is created within an outer function, 
        making it a closure, and it has access to the variables withing the outer function,
        in this case the variable baseNumber
*/
function createBase(baseNumber){
    return function(N){
        return baseNumber + N;
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

console.log(addSix(10))


/*************** FizzBuzz challenge **************

--> Problem:
     --> Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3
        "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
    
*/
for(let i = 0; i <= 100; i++){
    let fizz = i % 3 == 0;
    let buzz = i % 5 == 0;
    console.log(fizz ? (buzz ? 'FizzBuzz' : 'Fizz') : buzz ? 'Buzz': i)
}

/*************** Given two strings, return true if they are anagrams of one another **************

--> Problem:
    --> Anagram

    Example:
    --> "Mary" is an anagram of Army
    
    Solution:
    --> create the function accepting two arguments, first and second words
    --> Convert to lower case using toLowerCase string method
    --> split and sort and join back the array to a string
*/

var firstWord = "Mary had a shoe";
var secondWord = "Army dah a hoes";

function isAnagram(first, second){

    //For case insensitivity, change both words to lowercase.
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    //Sort the strings, and join the resulting array to a string. Comapre the results.
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

console.log(isAnagram(firstWord, secondWord)); // true

/*************** How would you use a closure to create a private counter? **************/
/*
You can create a function within an outer function (a closure) that allows you to update a private variable 
but the variable wouldn't be accessible from outside the function without the use of a helper function
*/

function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }
  
  // error if we try to access the private variable like below
  // _counter;
  
  // usage of our counter function
  var c = counter();
  c.add(5); 
  c.add(9); 
  
  // now we can access the private variable in the following way
  c.retrieve(); // => The counter is currently at: 14

  /* Promises:
    Callbacks 
    Promises
    Async Await
  
  */

    //callbacks
        const fetch = require('node-fetch')
        const fs = require('fs')

        setTimeout(() => {
            console.log('waited 1 second')
        }, 1000);
    
    //callbacks example 2:
        let btn;
        btn.addEventListener('click', () => {
            
        })
    //error first call back 
        fs.readFile('./test.txt', 'utf-8', (err, data) => {
            if(err){
                console.log("error")
                console.log(err)
            }
            else{
                console.log('Got data')
                console.log(data)
            }
        });

    //Creating a Promise
    const myPromise = new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random() * 2);
        if(rand === 0){
            resolve();
        }else{
            reject();
        }
    })

    //Invoke the newly created promise
    myPromise
        .then(() => console.log('success'))
        .catch(() => console.log('Not success'))

    //use existing promises
    fs.promises.readFile('./text.txt', 'utf-8')
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    //Fetch with promises
    fetch('https://djsdj')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    //Async await 
    const loadfile = async () => {
        try{
            const data = await fs.promises.readFile('./test.txt', 'UTF-8')
        }
        catch (error){
            console.log(error)
        }
    }

// -- Palindrome
export function isPalindrome(string)
{
    let leftIdx = 0;
    let rightIdx = string-length - 1;
    while(leftIdx < rightIdx){
        if(string[leftIdx] !== string[rightIdx]){
            return false
        }
        leftIdx++;
        rightIdx--;
    }
    return true;
}