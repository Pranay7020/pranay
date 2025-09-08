let arr =[1,7,7,3,2,7,8,4,7,0];

let newArr=[];
arr.map((Element)=>{
    if(Element===7){
        newArr.push(Element);
    };

});

//filter method
let filterArr = arr.filter((Element)=>{
    if(Element===7){
        return Element;

    }
});
console.log(newArr);
console.log(filterArr);

//forEach method
let newData=arr.forEach(Element,index,self)=>{
    
    console.log(index);
    console.log(self);
    console.log(Element);
    if(Element===7){
        console.log(Element);
    }

}