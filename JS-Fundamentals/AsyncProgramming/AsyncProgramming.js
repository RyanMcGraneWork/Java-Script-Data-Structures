/****************  Promises: ****************/
/*
    --> Promise - an object used for async operations. these objects 
        have a state of pending, fulfilled or rejected.
    
    --> A Promise is created with the Promise() constructor, 
            which takes in a callback function, oftentimes called the executor.
    --> this callback function has two callback functions as parameters.
        ---resolve(value): fulfills the Promise and sets its value
        ---reject(error): rejects the Promise and sets an error message.
    
    --> The Promise object has three primary functions:

        --- then(fullFilledFn rejectedFn): calls fullfilledFn if the Promise is fulfilled
                otherwise it is rejected.
            returns a new fulfilled Promise with the return value of the callback function

        --- catch(rejectedFN): Calls this is Promise is rejected. Promise with the return value of the 
                call back function.
        
        ---finally(callback): calls the callback function whenever the Promise is settled(fulfilled or rejected)

    --> since these functions all return a new promise, they can be chained together, such as 
            promise.then(doX).then(doY).catch(handleError).finally(doZ)
            
            
    Async function:
        --> a function declared using the async keyword, causing the function to implicitly return a promise 
            and allowing for usage of the await keyword. 
        --> Async functions are primarily an alternative syntax to chaining calls to Promise.then

    await:
        --> a keyword indicating that JS should wait for a Promise to settle
                 before continuing execution of the code. 
*/

//Creating a new promise that is already resolved - it is in a fulfilled state
const promise = Promise.resolve(3)
//const promise = Promise.reject(3)

console.log(promise)

//Each .then returns a promise
promise
    .then(value => value * 2)
    .then(value => value + 1)
    // .then(value => {
    //     throw new Error('something went wrong')
    // })
    .then(console.log)
    .catch(error => {
        console.log('Oh no!' + error);
        return 10
    })
    .then(console.log)
    .finally(() => console.log('Done'));


/* Promise.all([]) */
const myPromise = Promise.resolve(10)

//returns a new promise with an array as the value containing of
//  all of the resolved values from its promises in that array
Promise.all([
    Promise.resolve(3),
    Promise.resolve(2),
    new Promise((res, rej) => setTimeout(() => res(5), 1000))

]).then(console.log).catch(console.log)

Promise.race([
    new Promise((res, rej) => setTimeout(() => res(3), 3000)),
    new Promise((res, rej) => setTimeout(() => rej(2), 2000)),
    new Promise((res, rej) => setTimeout(() => res(1), 1000))
]).then(console.log)

// Promise.any([
//     new Promise((res, rej) => setTimeout(() => res(3), 3000)),
//     new Promise((res, rej) => setTimeout(() => rej(2), 2000)),
//     new Promise((res, rej) => setTimeout(() => res(1), 1000))
// ]).then(console.log)


/************************ Async Await ************************/

//Async functions return a promise.
// The await keyword waits for the promise to settle and be fulfilled so it can use it.
async function tester(){

    try{
        const value = await new Promise((res, rej) => setTimeout(() =>  res(3), 1000));
        console.log(value)

    }catch(error){
        console.log('Oh no' + error);
    }
}

tester()

// or you can do it this way..
async function tester(){

    return await new Promise((res, rej) => 
        setTimeout(() =>  res(3), 1000));   

    // ---- the rejected case is
    // return await new Promise((res, rej) => {
    //    setTimeout(() => rej(new Error('something went wrong')), 1000);
   // });
}
tester().then(console.log).catch(error => console.log('oh no') + error)