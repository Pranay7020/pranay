let array = [1, 2, 6, 4, 5 ,3];
let index=null;

//without in-build methods
for( let i=0; i<array.length;i++){
    if(array[i]===5){
        index+=i;
    }
    console.log(index);
}

// in-build approach

let dataIndex = array.indexOf(5);
console.log(dataIndex);

// push && pop
let array1=[1, 2, 6, 4, 5 ,3];
console.log(array1);
array1.push(7);
console.log(array1);
array1.pop();
console.log(array1);

// shift && unshift
array1.shift();
console.log(array1);
array1.unshift(0);
console.log(array1);

//array delete
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

// slice && splice
 let newarray = array1.slice(3, 1,"pranay","shinde");
 console.log(newarray);
    console.log(array1);
    let newarray=array1.slice(3,5);
    console.log(newarray);
