let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.push(9);
console.log('--> arr:', arr);

// without using push method

Array.prototype.pushpa = function (...values) {
  for (let i = 0; i < values.length; i++) {
    this[this.length] = values[i]; 
  }

  for (let i = 0; i < this.length; i++) {
    console.log(i, this[i]);
  }
};

arr.pushpa(10, 11, 12, 13);
console.log('--> arr:', arr);


//using pop method
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let poppedValue = arr1.pop(8);
console.log('--> poppedValue:', poppedValue);
console.log('--> arr1:', arr1);

//without using pop method
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
Array.prorotype.dada = function () {
    let lastIndex = this.length - 1;
    delete this[lastIndex];
    this.length = lastIndex;
};
arr2.dada();
console.log('--> arr2:', arr2);

