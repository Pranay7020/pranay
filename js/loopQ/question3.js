//Check if a given number is prime using loops.
let num=29;
for(let i=29;i<=num;i++){
    let isPrime = true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i+" is a prime number");
    }
    else{
        console.log(i+" is not a prime number");
    }
}