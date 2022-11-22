/* without calling Array.prototype.map(), Array.prototype.reduce(), Array.prototype.filter() or array.prototypr.forEach()
    implement the three similar functions on the array prototype:
    --> myMap(callback)  
    --> myFilter(callback)
    --> my Reduce(callback, initialValue)
*/


Array.prototype.myMap = function (callback) {
    // Write your code here.
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(callback(this[i], i, this));
    }
    return output
    
};

Array.prototype.myFilter = function (callback) {
// Write your code here.
    const output = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) === true){
            outpush.push(this[i]);
        }
    }
    return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
// Write your code here.
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++){
        if(i === 0 && initialValue === undefined)
            accumulator = this[i];
        else{
            accumulator = callback(accumulator, this[i], i, this)
        }
    }
    return accumulator
};
