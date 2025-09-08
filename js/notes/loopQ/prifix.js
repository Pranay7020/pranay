// let arr =["dog","racecar","car"];
let arr =["flower","flow","flight"];

function prefix(){
    let jhola =arr[0];
    let jhola_leng = jhola.length;
    for(let i=1;i<arr.length;i++){
        let currenstring = arr[i];
        while(jhola!== currenstring.substring(0,jhola_leng)){
            jhola_leng--;
            if(jhola_leng===0)
                jhola = jhola.substring(0,jhola_leng);
            
        }
    }
    return jhola;
}

let ans = prefix();
console.log(ans);