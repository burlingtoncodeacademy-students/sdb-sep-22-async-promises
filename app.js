// Promises

/* 
    * Promise is an object that may produce a singular value in the future.

    * Three States
        * Pending (unfinished)
        * Fulfilled (complete value result)
        * Rejected (error)
*/

let myPromise = new Promise((resolve, reject) => {
    // Modify for true to see resolve
    // Modify for false to see reject
    let sum = 1 + 3

    sum == 3 ? resolve("Success") : reject("Failed")
    console.log(myPromise)
    
    // Comment out to simulate pending
    // setTimeout(() => {
    //     sum == 3 ? resolve("Success") : reject("Failed")
    //     console.log(myPromise)
    // }, 5000);
})

// Returns a promise. It does not allow us to use the information.
console.log(myPromise)

// .then() & .catch() are resolvers. They extrapolate data out of the Promise object.
myPromise
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg))

// Asynchronous Functions

// Why are async functions necessary?

function getData() {
    // Invocation on line 47 results in return assigned to data variable
    // return "Data from a function."
    
    // Return from setTimeout waits 5 seconds but the fx gets invoked immediately anyways, hence the undefined
    setTimeout(() => {
        return "Data from a function."
    }, 5000);
}

let data = getData()
console.log(data)

// Async Function Syntax
/* 
    * async function myFx() { }
    * const myfx = async function() { }
    * const myfx = async () => { }
*/

/* 
    Async fx act just like good ole' garden JS functions apart from one:
    ! Async fx always returns a promise object
*/

// Await Keyword

/* 
    * Can be utilized only inside asynchronous functions
    * Tells JS that we must wait on promise returning fx before moving on

*/

// Async fx (because we're making it return a promise)
function first() {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("test 1")
            }, 5000);
        } else {
            reject("rejected")
        }
    })
}

// This async fx relies on first() execution to return its result
async function open() {
    // await keyword allows us to wait for promise to be resolved before continuing
    let result = await first()
    console.log("HERE", result)
    console.log("Needs to wait")
}

open()
// This code runs without waiting for open() fx to complete
console.log("Code outside async function")