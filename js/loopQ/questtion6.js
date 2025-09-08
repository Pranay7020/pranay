//Count how many digits are in a given number.
let num=12345;
let count=0;
for(let i=num; i>0; i=Math.floor(i/10)){
    count++;
}
console.log("Number of digits in " + num + " is: " + count);