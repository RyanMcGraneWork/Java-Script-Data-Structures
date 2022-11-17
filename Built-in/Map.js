/* Map Data structure - Creating and working with Map */

/*
    Characteristics:
    --> A map is an ordered collection of key-value pairs. 
            Both keys and values can be of any data type.

    --> To retrieve a value you can use the corresponding key.
    --> Maps are iterables, they can be used with a for of loop.


    Object vs Map:
    --> Keys in objects can only be string, int or symbol whereas map can 
        have any data type for its key.
    --> An object has a prototype and may contain a few default keys which may collide 
        with your own keys if not careful. A map on the other hand does not contain any keys by
        default.
    --> Objects are not iterables, whereas maps are iterables
    --> The number of items in an object must be determined manually where as it is readily available
        with the size property in a map.
    --> Apart from storing data, you can attach functionality to an object whereas ,aps are restricted 
         to just stroing data.
*/


//to create a Map we used the new map constructor. The constructor optionally accepts an 
// array as its argument.
const map = new Map([['a', 1], ['b', 2]])

//To add new values to the Map we use the set() method. 
// This is not the same as the set data structure from before.
map.set('c', 3)

//To delete something from the map
map.delete('c')

//To check if there is some value in there:
console.log(map.has('a'))

//To check the amount of key value pairs in the map
console.log(map.size)

//To clear a map out 
//map.clear()


for(const [key, value] of map)
{
    console.log(`${key}: ${value}`)
}



