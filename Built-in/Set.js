/* Sets: Built in Data structure - Creating and working with sets */

/*
    Characteristics:
    --> Is a data structure that can hold a collection of values. Must be unique values
    --> Can contain a mix of different data types. You can store strings, booleans. numbers,
            or even objects all in the same set.
    --> sets are dynamically sized.
    --> Sets do not maintain an insertion order.
    --> Sets are iterables. they can be used in for loops..

    Sets vs Arrays:
    --> Arrays can contain duplicate values, sets cannot.
    --> Insertion order is maintained in arrays, whereas sets are not.
    --> Searching and deleteing an element in the set is faster compared to arrays.
*/


const set = new Set([1, 2, 3 ])

//Adds 4 to the end of the set
set.add(4)

//Checks to see if 4 is in the set 
console.log(set.has(4))

//Deletes 3 from the set 
set.delete(3)

//Displays the size of the set
console.log(set.size)

//Clears elements from the set 
set.clear()

//Loops and displays
for(const item of set){
    console.log(item)
}

