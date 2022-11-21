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


/*************** Explain what a callback is and provide a saimple example **************

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
console.log(Array.isArray(arrayNums)); // true
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

if (Object.prototype.toString.call(arrayNums) === '[object Array]'){
    console.log('Array!')
}else{
    console.log("ranom")
}


