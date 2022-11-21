/* Hash Table: Custom Data structure - Creating and working with HashTables */

/******************************************************
  
----- BIG 0 Time Complexity for Hash Tables ----- 
when talking about hash tables we generallus talk aout the average time complexity and not 
the worst time complexity because in enterprise code we would have better hashing functions that
can do it with constant time. Out code below is linear but we can recognise it as constant.

--> O(1) - constant time for lookups
--> average time complexity is O(N) - making hash tables a good option for questions.



----- Characteristics: -------
--> A Hash table, also known as a hash map, is a data structure that is used to store key-value pairs.
--> Given a key, you can associate a value with that key for very fast lookup.
--> JavaScript's Object is a special implementation of the hash table data structure.
    However, Object class adds its own keys. Keys that you input may conflict and overwrite the
    inherited default properties.
--> Maps which were introduced in 2015 allow you to store key-value pairs. (you should use 
    maps when need your own keys. This is another use of the hash table data structure)
--> Writing your own hash table implementation is a very popular JavaScript interview question, 
    so we will explore it.

--> Hash tables store key value pairs
    1) 'in' => 'India' 
    1) 'au' => 'Australia' 
    1) 'fr' => 'France' 
    1) 'it' => 'Italy' 

--> We store the key value pairs in a fix sized array.
--> Arrays have a numeric index
--> How do we go from using a string as an index to number as an index?
--> A hashing function accepts the string key, converts it into a hash code using a defined 
    logic and then maps it into a numeric index that is within the bounds of the array.
--> using the index, store the value
--> The same hashing function is reused to retireve the value given a key

----- Hash Table supports Implementation: -----

--> Set to store a key-value pair
--> Get to retrieve a value given its key
--> Remove to delete a key value pair
--> Hashing function to convert a string to a numeric index


----- Hash Table Usage: -----
--> Hash tables are implemented where O(1) - constant time lookup and insertion are required.
--> Database indexing
--> Caches

----- HASH TABLE COLLISSIONS - BE AWARE -----
--> A hash function can produce collission which must be handled. 



*****************************************************/
class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    //Beginner hashing function
    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        // this.table[index] = value

        //Store reference to above index, Code modified to hande collissions
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }
            else{
                bucket.push([key, value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        //  return this.table[index]

        // Comment out above line and store a reference to that index position
        // Code updated to handle collissions
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        //this.table[index] = undefined

        //Instead of above we store an reference to that index position
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
           
            //We use array.splice to remove the item from the array
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)

table.set("name", "Bruce")
table.set("age", 70)
table.display()

console.log(table.get("name"))

table.set("mane", "Clark")
table.display()

table.set("name", "Diana")
table.remove("name")
table.display()


/* *** Code has been changed to handle collissions since this.***
// This is a bug. We removed Bruce which was stored at index 17, and this new key gets stored and set to index 17, 
// We have lost the value bruce.
// Which is a big no no in terms of Data structures. Cannot loose data.
// Becuase our hashing function gets the unicode characters of the string it will produce the same index, as the characters are the same.
// This is called a collission and must be handled.
*/