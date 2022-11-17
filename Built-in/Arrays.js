/* Arrays: Built in Data structure - Creating and working with Arrays */

/******************************************************
  
----- BIG 0 Time Complexity for Arrays ----- 
--> insert / remove from end of array : O(1) - constant time

--> insert / remove from the beginning of array : O(n) - Linear time 
        This is because the index at every element has to be reset in the array 

--> Access any element: O(1) - constant time  

--> Searching: O(n) - Linear Time

--> Push & Pop: O(1) - Constant Time

--> Shift / Unshift/ concat/ slice / splice - O(n) - Linear Time 

--> forEach, map, filter, reduce - O(n) - Linear Time
        you might use a .filter in your coding exam with a callback funcion that has a 
        for loop. This would be quadratic and not efficient in the eyes of the 
        interviewer.

*****************************************************/


//Creating arrays, in Js you can have different types in the array
const array = [1,2,3, 'Ryan']

//Adding element to the start of the array 
array.unshift(0)

//Adding element to the end of an array 
array.push(4)

//Removes element from the start of the array
array.shift()

//Removes the element at the end of the array
array.pop()


//console.log(array[0])
for(const item of array){
    console.log(item)
}
 

/* More array methods: filter, map, some, sort, reduce, every, concat, slice and splice  */

const characters = [
    {
        name: 'Luke skywalker',
        height: 172,
        mass: 77,
        eyecolor: 'blue',
        gender: 'male',

    },
    {
        name: 'Darth vader',
        height: 202,
        mass: 177,
        eyecolor: 'yellow',
        gender: 'male',
    },
    {
        name: 'Lee organa',
        height: 272,
        mass: 34,
        eyecolor: 'red',
        gender: 'female',

    }
]

/*************************************************************Filter method in action*************************************************************/

//Get characters with mass greater than 100
const charactersGreaterThan100 = characters.filter((character) => {
    return character.mass > 100
})
console.log(charactersGreaterThan100, 'Filter method in motion')

//Get character with height less than 200
const charactersLessThan200 = characters.filter((character) => {
    return character.height < 200
})
console.log(charactersLessThan200, 'Filter method in motion')

//get all male characters
const allMaleCharacters = characters.filter((character) => {
    return character.gender === 'male'
})
console.log(allMaleCharacters, 'Still Filter method')


/*************************************************************map method in action*************************************************************/

//Get an array of all the names inside the above array
const arrayOfAllNames = characters.map((character) => {
    return character.name
})
console.log(arrayOfAllNames)

//Get an arrray of heights:
const arrayOfHeights = characters.map((character) => {
    return character.height
})
console.log(arrayOfHeights)

//Get array of objects with just name and height property
const nameAndHeightArray = characters.map((character) => ({
    name: character.name,
    height: character.height
}))
console.log(nameAndHeightArray, 'name and height method')


//Get an array of all fist names
const arrayFirstNames = characters.map((character) =>{
    return character.name.split(" ")[0]
})
console.log(arrayFirstNames)


/*************************************************************Array some method in action*************************************************************/

//Is there at least one male character?
const oneMaleCharacter = characters.some((character) => {
    return character.gender === 'male'
})
console.log(oneMaleCharacter)


//Is there at least one character with blue eyes
const oneBlueEyeCharacter = characters.some((character) => {
    return character.eyecolor === 'blue'
})
console.log(oneBlueEyeCharacter)

//Is there at least one character taller than 300
const oneTallCharacter = characters.some((character) => {
    return character.height > 300
})
console.log(oneTallCharacter)


/*************************************************************Array sort method in action*************************************************************/

// Sort by mass - ascending
const sortByMass = characters.sort((a,b) => {
    return a.mass - b.mass
})
console.log(sortByMass)

//Sort by height 
const sortByHeight = characters.sort((a,b) => {
    return a.height - b.height
}) 
console.log(sortByHeight)


//sort by name - strings (More difficult)
const sortByName = characters.sort((a,b) => {
    if(a.name < b.name)
        return -1
    return 1
})
console.log(sortByName)


//sort by gender - strings
const sortByGender = characters.sort((a,b) => {
    if(a.gender === 'female')
        return -1;
    return 1;
})
console.log(sortByGender)

 
/*************************************************************Array reduce method in action*************************************************************/

//Get total mass of all characters
const totalMassOfCharacters = characters.reduce((acc, cur) => {
    return acc + cur.mass
}, 0)
console.log(totalMassOfCharacters)

//Get total height of all characters
const totalHeightOfCharacters = characters.reduce((acc, cur) => {
    return acc + cur.height
}, 0)
console.log(totalHeightOfCharacters)

//Get total number of characters by eye colour - String again
const totalNumberOfCharactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eyecolor;

    if(acc[color]){
        acc[color] = acc[color] + 1
    }
    else{
        acc[color] = 1
    }
    return acc;

}, {})
console.log(totalNumberOfCharactersByEyeColor)

//Total number of characters in all the characters names 
const totalCharactersInNames = characters.reduce((acc, cur) => {
    return acc + cur.name.length
}, 0)
console.log(totalCharactersInNames)

/*************************************************************Array every method in action*************************************************************/
//Does every character have blue eyes?
const allblueEyes = characters.every((character) => {
    return character.eyecolor === 'blue'
})
console.log(allblueEyes)

//Does every character have a height?
const allHeights = characters.every((character) => {
    return character.height
})
console.log(allHeights)


/*************************************************************Array concat method in action*************************************************************/
//Allows you to merge two arrays together.

const a = [1, 2, 3];
const b = [4, 5, 6];
const strings = ['a', 'b', 'c'];


//You can pass in more arrays as paramters to the concat in order to concat the array.
const concatArray = a.concat(b, strings);

//Creates a copy of the a array. <<A Shallow copy>> We can add values to this copy without affecting the a array.
const shallowCopyArray = a.concat();
shallowCopyArray.push(0);

console.log(concatArray);
console.log(shallowCopyArray);
console.log(a);

//We can also use the concat method like a push method
const c = a.concat(11, 12, a);
console.log(c);

/*************************************************************Array slice method in action*************************************************************/
//Slice method will return a shallow copy of a portion of an array. The shallow copy means when modifying the new array it wont affect the original array

const numbers = [1, 2, 3, 4, 5];

const numbersSliced = numbers.slice(1, 4);

//To get the last 3 numbers of the array you say 
// const numbersSlicedLast3 = numbers.slice(-3);

// You can grab the index aswell, grabs everything from index 1
// const numbersSlicedLast3 = numbers.slice(1);

console.log(numbers);
console.log(numbersSliced);


const participants = ['ryan', 'shane', 'sean', 'paddy', 'john', 'peter', 'simon' , 'sarah']

const winners = participants.slice(0, 3)

console.log(winners)


/*************************************************************Array splice method in action*************************************************************/
//Splice method will return an array after removing elements from an array. It manipulates the first array.

const numberz = [1, 2, 3, 4, 5];


//First 2 paramters pick the index where to start and how many elements to delete. (6, 7 pushed in will just be appended to the array)
const deleted = numberz.splice(2, 3, 6, 7)

//this console logged would display: {1, 2, 6, 7, 3, 4, 5} - starting at the second element deleting 0 appending 6 and 7 
//const deleted = numberz.splice(2, 0, 6, 7)

console.log(numberz)
console.log(deleted)
 
