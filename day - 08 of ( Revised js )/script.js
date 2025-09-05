console.log("Today we started Array");

const arr = [1, 2, 3, 'Ankuj', 'Matre', 45, 56, 3];
// console.log(arr[2]); // aese me hm sirf single index ko print kar sakate hi negative index ko print nhi kar sakte 

// // for negative index we use at()
// console.log(arr[5]);
// console.log(arr.at(-2)); // ishe hm negative index se bhi store kar sakate hai 
// console.log(arr.at(-5));
// console.log(arr.at(-4));

// console.log(arr.length);
// const newArray = arr;
// console.log(newArray == arr); // isame true aayega 

// const newarray = structuredClone(arr);
// console.log(newarray == arr);  // output false aayega because jo newarray hai usak ek clone heap me alg ban guya hai isliye false de rha hai 

// for adding and deleting element from last we use push & pop 

// console.log(arr);
// arr.push(38);
// arr.push(59);
// console.log(arr);

// arr.pop();
// arr.pop(); // jitai baar aayega utani baar no. delete hote jaaega 
// console.log(arr);

// // for adding and deleting element from start we use unshift and shift

// console.log(arr);
// arr.unshift(90);
// arr.unshift(78);
// console.log(arr);

// arr.shift();  // delete from the start 
// arr.shift();
// console.log(arr);


// // we Also use delete operation but the problem is when we use delete operation he is leave hole for the deleting element 

// console.log(arr);
// delete arr[0];
// delete arr[3];   // jagah chod deta hai delete element ka 
// console.log(arr);


console.log(arr);
console.log(arr.indexOf('Ankuj'));
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));
console.log(arr.includes('Ankuj'));


// slice ka use array se element ko nikalane ke liye kiya jat hai pahele vala include hota hai dusra vala include nhi hota hai 

console.log(arr);
let a = arr.slice(2,5);   //
console.log(a);
console.log(arr);

// we use splice  its same to slice but isame pahale vala to include hota hai lekin dusare vala bhi include hi hoota hai so dusara vala limitv hota hai ki kitani value lena hai real resaon vahi hai 
//  splice(starting_index,total_element_delete,add value)
console.log(arr);
let b = arr.splice(2,5);  // Badia badiya 
console.log(b);

arr.splice(2,2,"money",90);
console.log(arr);
