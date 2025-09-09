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
let newData=arr.forEach((Element,index,self)=>{
    console.log(index);
    console.log(self);
    console.log(Element);
    if(Element===7){
        console.log(Element);
    }

});

// reduce method
let arr=[1,2,3,4,5,6,7,8,9,10];
let val=arr.reduce((acc,cur)=>{
    return acc+cur
},0);
console.log(val);

// hof creates a reducer for summing a property
const items=[
    {name:'book',price:300},
    {name:'pen',price:50},
    {name:'notebook',price:150},
];
const createsumreducer=(prop)=>{
    return (acc,obj)=>acc+obj[prop];
};
const total=items.reduce(createsumreducer('price'),0);
console.log(total);// output: 500

// fruits count
const fruits=['apple','banana','apple','orange','banana','apple'];
const fruitCount=fruits.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit]||0)+1;
    return acc;
},{});
console.log(fruitCount);// output: {apple: 3, banana: 2, orange: 1}

// letter count in a string
const str='masaaii';
const funcstr =str.split('');
const countstr= funcstr.reduce((acc,string)=>{
    acc[string]=(acc[string]||0)+1;
    return acc;
},{});
console.log('-->countstr:',countstr);
// output: {m: 1, a: 3, s: 1, i: 2}