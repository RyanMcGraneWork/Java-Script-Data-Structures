/* Queue: Built in Data structure - Creating and working with Queue - Optimized version */

/******************************************************
  
----- BIG 0 Time Complexity for Queues implemented with objects ----- 
--> Enqueue has Constant time complexity: O(1) 
--> Dequeue has Constant time complexity: O(1)



----- Characteristics: -------
--> The Queue data structure is a sequential collection of elements
     that follows the principle of (FIFO) - First In First Out.
--> The first element inserted into the queue is the first element to be removed.
--> A queue of people. Analogy. FIFO. People enter at one end (rear / tail).
    People leave the queue from the other end (front / head)

--> Queue is an abstract data type. It is defined by its behaviour rather than being a 
    mathematical model.
--> The Queue data structure supports two main operations
    -- Enqueue - which adds an element to the rear/tail of the collection
    -- Dequeue - which removes the element from the front/head of the collection.

----- Queue Usage: -----
--> Printers
--> CPU task scheduling
--> Callback queue in JavaScript runtime

----- Queue implementation: -----
--> enqueue(element) - add an element to the queue 
--> dequeue() - remove the oldest element from the queue
--> peek() - gets the value of the front of the queue without removing it
--> isEmpty() - check if the queue is empty
--> size() - get the number of elements in the queue
--> print() - visualise the elements in the queue

*****************************************************/

//To implement a Queue Data structure we are going to build its class and implements its properties and methods.

class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    //Pushes elements to one end of the queue
    //this.rear is the key and the element is the value
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    //Removes the element from the front of the queue
    dequeue(){
        const item = this.items[this.front]

        //using delete as its a method on the object type.
        delete this.items[this.front]

        this.front++
        return item
    }
    
    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }
}

//Lets instantiate a new instance of the Queue Data structure.
const queue = new Queue()

console.log(queue.isEmpty())

//Pushing 3 elemeents onto the stack
queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(40)


// Getting the size of the stack
console.log(queue.size())

//printing the elements of the stack
queue.print()

// Dequeue item from start of the array
console.log(queue.dequeue())

//Checks the first element in the queue
console.log(queue.peek())

