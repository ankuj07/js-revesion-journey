// // loop & conditions lets started

// let age = 30;
// if (age < 18) {
//     console.log("kid");
// }

// else if (age < 45) {
//     console.log('Young');
// }

// else {
//     console.log("Dada ji");
// }


// // we can also use switch statement when we having multiple conditions 

// let day = 36;
// switch (day) {
//     case 0:
//         console.log('Sunday');
//         break;

//     case 1:
//         console.log('Monday');
//         break;

//     case 2:
//         console.log('Tuesday');
//         break;

//     case 3:
//         console.log('Wednesday');
//         break;

//     case 4:
//         console.log('Thursday');
//         break;

//     case 5:
//         console.log('Friday');
//         break;

//     case 6:
//         console.log('Saturday');
//         break;

//     default:
//         console.log("Noot a valid no.");


// EK hi kaam ko baar karna 

// for (let i = 0; i <= 1; i++) {
//     console.log("Ankuj");
//     i++;
// }

// sum of first n numbers

// let sum = 0;
// for(let i=1; i<=10; i++){

//     sum+=i;
// };

// console.log(sum);

// Nestd loop = loop ke andar loop


// for (let j = 0; j <= 1; j++) {
//     for (let i = 1; i <= 5; i++) { // upaerr vale loop ki help se ham jitan achahe utani bar andar vale loop ko print karava sakarte hai
//         console.log(i);

//     }
// }

// wTH WHILE LOOP 
// let i = 5;
// while(i<=10){

//     console.log(i);
//     i++;

// }


let arr = [10, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


const obj = {
    name: 'Ankuj',
    location: "Mp",
    District: "Balaghat",
    Study: "Bhopal"
}

const key = Object.keys(obj);
console.log(key);
console.log(key.length);

for (let i = 0; i < key.length; i++) {
    console.log(obj[key[i]]);
}






