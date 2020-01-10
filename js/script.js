const fruits = ['apple','orange','strawberry','chery'];
console.log(fruits[0]);
//for replacing
console.log(fruits[1]="musumbi");
console.log(fruits);
//adding value to last using push method
pfruits=fruits.push("musk melon");
console.log(pfruits);
console.log(fruits);
//add to begining of array using unshift
fruits.unshift("mango");
console.log(fruits);
//remove last element of array using pop
fruits.pop();
console.log(fruits);
//tells the place of item using indexof
console.log(fruits.indexOf("strawberry"));

const person={
             name:'sagar',
             age:'23',
             hobbies:['cricket','swimming','music'],
             height:'5.5',
             weight:'50',
             address:{
                 taluk:'karkala',
                 city:'hebri',
                 state:'karnataka'
                }
             }
             console.log(`name is ${person.name}age is ${person.age}hobbies is${person.hobbies} height is${person.height} weight is ${person.weight} address is ${person.address}`)
//to get single value
console.log(person.name);
//get array value
console.log(person.hobbies[1]);
//get embedded object
console.log(person.address.city);

//array of object
const todos = [
    {
        id:1,
        text:'work from home',
        isCompletet: false

    },
    {
        id:2,
        text:'have a coffee',
        isComplete:false
    },
    {
        id:3,
        text:'have lunch',
        isComplete:true
    }
];
//get specific object value
console.log(todos[0].text);
//loops
//for
//for(let i = 0;i <= 10; i++){
    //console.log('for lop number: ${i}');

//}
//while
//let i=0;
//while(i<=10){
  //  console.log('while loop number: ${i}');
    //i++;
//}
//for of loop
for (let d of todos){
    console.log(d.text)
}
// higher order array function
//map is higher order array function.
//filter
const todo1 = todos.filter(function(todo){
return todo.id==1;
});
console.log(todo1);