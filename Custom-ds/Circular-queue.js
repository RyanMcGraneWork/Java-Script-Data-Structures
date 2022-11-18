/* Circular Queue: Built in Data structure - Creating and working with Circular Queue - Optimized version */

/******************************************************
  
----- BIG 0 Time Complexity for Circular Queues implemented ----- 
--> Enqueue has Constant time complexity: O(1) 
--> Dequeue has Constant time complexity: O(1)


----- Characteristics: -------
--> The size of the queue is fixed and a single block of memory
     is used as if the first element is connected to the last element.

--> Also refered to as a circular buffer or ring buffer and follows the
    FIFO principle.

--> A circular queue will reuse the empty block created during the dequeue operation

--> When working with queues of fixed maximum size, a circular queue is a great implementation choice.

--> The Circular Queue data structure supports two main operations
    -- Enqueue - which adds an element to the rear/tail of the collection
    -- Dequeue - which removes the element from the front/head of the collection.

----- Circular Queue Usage: -----
--> Clock
--> Streaming data
--> Traffic lights

----- Queue implementation: -----
--> enqueue(element) - add an element to the queue 
--> dequeue() - remove the oldest element from the queue
--> isFull() - check if the queue is full
--> isEmpty() - check if the queue is empty
--> peek() - gets the value of the front of the queue without removing it
--> size() - get the number of elements in the queue
--> print() - visualise the elements in the queue

*****************************************************/

//The capacity parameter represents the maximum size of the queue
class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.items.length === 0
    }

    //Pushes elements to one end of the queue
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1

            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    //Removes the element from the front of the queue
    dequeue(){
        if(!this.isEmpty()){
          return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }


    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }


    print(){
        if(!this.isEmpty()){
            console.log('Queue is empty..')
        } else{
            let i;
            let string = ''
            for(i = this.front; i !== this.rear; i = (i+1) % this.capacity){
                string += this.items[i] + " "
            }
            string += this.items[i]
            console.log(string)
        }
    }
}
const queue = new CircularQueue(5)

console.log(queue.isEmpty())

queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
queue.enqueue(500)

console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())


