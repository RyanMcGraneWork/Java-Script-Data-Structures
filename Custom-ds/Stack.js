/* Stack: Built in Data structure - Creating and working with Stacks */

/******************************************************
  
----- BIG 0 Time Complexity for Stacks ----- 
--> insertion is O(1) - constant time complexity
--> Removal is O(1) - constant time complexity



----- Characteristics: -------
--> The stack data structure is a sequential collection of elements
     that follows the principle of (LIFO) - Last In First Out.
--> The last element inserted into the stack is the first element to be removed.
--> A stack of plates. Analogy. LIFO.
--> Stack is an abstract data type. It is defined by its behaviour rather than being a 
    mathematical model.
--> The Stack data structure supports two main operations
    -- Push, which adds an element to the stack
    -- Pop, which removes the most recent added element from the stack.

----- Stack Usage: -----
--> Browser history tracking
--> Undo operation when typing 
--> Expression conversions
--> Call stack in JavaScript runtime

----- Stack implementation: -----
--> push(element) - add an element to the top of the stack 
--> pop() - remove the top most element from the stack
--> peek() - gets the value of the top of the stack
--> isEmpty() - check if the stack is empty
--> size() - get the number of elements in the stack
--> print() - visualise the elements in the stack

*****************************************************/

//To implement a stack Data structure we are going to build its class and implements its properties.

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }
    
    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

//Lets instantiate a new instance of the stack Data structure.
const stack = new Stack()

console.log(stack.isEmpty())

//Pushing 3 elemeents onto the stack
stack.push(20)
stack.push(10)
stack.push(30)

// Getting the size of the stack
console.log(stack.size())

//printing the elements of the stack
stack.print()

console.log(stack.pop())
console.log(stack.peek())
