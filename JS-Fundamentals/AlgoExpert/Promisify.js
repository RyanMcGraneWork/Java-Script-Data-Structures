/* 
    Write a promisify function (similar to the util.promisify Node.js function) 
    that takes in a required callback function and returns a new "promisified"
    version of the function.

    the calllback function cantake in any number of parameters, but its last parameter is guaranteed to be another 
    callback function, which takes in two paratmeters: an error and a value.
    We'll call this handleErrorAndValue for simplicity



*/



function promisify(callback){
    return function(...args){
        return new Promise((resolve, reject) => { 
            function handleErrorAndValue(error, value){
                if(error == null){
                    resolve(value);
                }else{
                    reject(error);
                }
            }
            callback.call(this, ...args, handleErrorAndValue);
        });
    };
}

exports.promisify = promisify;