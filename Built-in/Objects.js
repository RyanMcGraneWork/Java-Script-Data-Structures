/* Objects: Built in Data structure - Creating and working with Objects */

/******************************************************
  
----- BIG 0 Time Complexity for Objects ----- 
--> insert: O(1) - Constant time

--> remove: O(1) - Constant time  

--> Access: O(1) - constant time  

--> Searching: O(n) - Linear Time

--> Object.keys(): O(n) - Linear time  
--> Object.values(): O(n) - Linear time  
--> Object.entries(): O(n) - Linear time  


*****************************************************/


const object = {
    name: 'Ryan',
    age: 23,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name)
    }
}

console.log(object)

console.log(object['age'])
console.log(object.age)

//When theres a - hiphen in the key, you cannot use dot notation
console.log(object['key-three'])

//Adds new property to the object
object.hobby = "football"
console.log(object)


//Deletion - Deleteing properties using the key value pair
delete object.hobby
console.log(object)

//Calling the function inside the object 
object.sayMyName()


/**** Object Methods: Object.keys() .values() .entries() - These three functions let you turn an object into an
 iterable object. Basically allow you to work with objects like arrays. 
 When you use the either of the three functions above you can work with .filter() . map() and so on.
*/

let keys = Object.keys(object)
console.log('keys', keys)

let values = Object.values(object)
console.log('values', values)

let entries = Object.entries(object)
console.log('Entries',entries)

console.log(entries[1][1])
