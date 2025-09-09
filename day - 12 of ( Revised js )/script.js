// console.log("Lets start The function");

// Functons

// First method

// function Ankuj(){
//     console.log("Hii i my name ankuj" );
//     console.log(("I am from madhyapradesh"));
//     console.log("I am study in bhopal");
//     return ;
// }

// const result = Ankuj();
// console.log(result);

// When we have parameter  
// function Multiply(num1,num2){
//     console.log(num1*num2);
//     return (num1*num2);
// };

// console.log(Multiply(3,5));


// function Multiply(){
//     console.log(3*5);
//     return 0;
// }

// let result = Multiply();
// console.log(result);


// Second method

// const fun = function(){
//     console.log('Hello ji kaise ho');
//     console.log("Badiya hu tum batao");
//     console.log('Mai bhi badiya hu');
//     return "Money";

// };

// fun();


// we can start Arrow function

// const sum = (Num1, Num2) => (Num1 + Num2);
// console.log(3,6);  // mostly using Arrow function

// const cube = (num3) => (num3*num3*num3);
// console.log(cube(5));

// const sub =(Num4, Num5) => (Num4-Num5);
// console.log(sub(10,2,));

// spread & rest operator

let arr = [1,2,3,4,5];
let arr1 = [...arr];
console.log(arr1);   // Array ban jata hai 

const sum = function (...Num1){
    console.log(Num1);
}

sum(1,2,3,4,5,6,7,8,9,10);


// Revesion of objects

let obj1 ={
    name: 'Ankuj',
    college : 'Rits',
    location : 'Bhopal',
    year : "4th year"
}

// agr hame objects bs kuch specific key chahiye

console.log(obj1);
const {name, college} = obj1;
console.log(name,college);

// dusre tarike se ham aesa bhi kar sakate hai 

function fun({name, college}){
   console.log(name,college);
}