/* JS topic on strings */

var stringOne = "I am here today to learn string methods"
var stringTwo = "I want to be the master of the to strings"

/*************** charAt() ***************/
console.log(stringOne.charAt(2))

/*************** charCodeAt() ***************/
//returns the unicode character of a character at a special index. - unicode character of a
console.log(stringOne.charCodeAt(2))


/*************** concat() ***************/
//Joins two or more strings together
console.log(stringOne.concat(' ' + stringTwo))


/*************** endsWith() ***************/
console.log(stringOne.endsWith("to"))


/*************** fromCharCode() ***************/
//this should return the character a to us. sice 97 is the unicode character of a.
console.log(String.fromCharCode(97))


/*************** includes() ***************/
// returns true since here is in the string
console.log(stringOne.includes("here"))


/*************** indexOf() ***************/
// returns the postions of the first found occurence 
console.log(stringOne.indexOf("am"))


/*************** lastIndexOf() ***************/
console.log(stringOne.lastIndexOf("methods"))


/*************** match() ***************/
//going to search a string against a regular expression and return matches
//returns an array
console.log(stringTwo.match(/the/g))



/*************** repeat() ***************/
//--this will repeat the string 3 times
console.log(stringOne.repeat(3))



/*************** replace() ***************/
//Searches a string for a specified value or a regular expression, and returns a new 
// string when the specified values are
console.log(stringTwo.replace(/the/g, "THE"))



/*************** search() ***************/
//Search a string for a specified value or regular expression and return the postion 
// of the match 
console.log(stringOne.search("methods"))



/*************** slice() ***************/
//This starts on index 2 and finishes before index 9
console.log(stringTwo.slice(2, 9))


/*************** split() ***************/
// If i split on ' ' this means i will get an array of each word in an string
// Splitting on the space 
console.log(stringTwo.split(" "))


/*************** startsWith() ***************/
//Returns true if starts with correct character
console.log(stringTwo.startsWith("I"))


/*************** substr() ***************/
//Similar to slice but grabs index 9 aswell
console.log(stringTwo.substr(2, 9))



/*************** substring() ***************/
// Here we do not count index 9, it just goes up to that number. so one less than above.
console.log(stringTwo.substring(2, 9))


/*************** toLowerCase() ***************/
console.log(stringTwo.toLowerCase())



/*************** toUpperCase() ***************/
console.log(stringTwo.toUpperCase())


/*************** trim() ***************/
//Trim will remove white space from either side of the string
var stringThree = "         Subscribe Now!"
console.log(stringThree.trim())



/* Few Questions here: */

const name = "Ryan McGrane";

//Get the first name 
console.log(name.substring(0, 4))

//Get the last name 
console.log(name.substring(5, 12))
console.log(name.substring(5))

//Get the firsr two letters of the first name
console.log(name.substring(0,2))

//Get the last two letters of the last name 
console.log(name.substring(name.length -2))


const nameAndAge = "Ryan McGrane-23"

//Get the name 
console.log(nameAndAge. substring(0, 12))

const dashIndex = nameAndAge.indexOf("-")
console.log(dashIndex)

console.log(nameAndAge.substring(0, dashIndex))

//Get the age 
console.log(nameAndAge.substring(dashIndex + 1))