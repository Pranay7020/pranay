let object={
    name: "pranay shinde",
    age: 22,
    married: "false",
    hobbies: ["reading", "traveling", "swimming"],
    exp:{
        coName: "ABC Corp",
        role: "Software Engineer",
        duration: "2 years",
        salary: "60,000"
    },
    myfunc: () => {
        return "Hello, pranay here!";}
}
let nnn = object.myfunc();
console.log(nnn);

console.log(object.name);
console.log(object.age);
console.log(object.married);
console.log(object.hobbies);
console.log(object.exp);
for(let key in object){
    console.log(`${key}: ${object[key]}`);

}
//& arry INDEXING
 let arr = [[1, 2], 3, 4, 5];