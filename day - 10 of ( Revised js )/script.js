// console.log("Lets starts to learn objects");

// // Aaj hamane javascript ko create karane ke 3 Method dekhenge 


// // 

// const obj = {
//     Name : "Ankuj",
//     Age : 20,
//     Dob : 2005,
//     location : "MadhayaPradesh",
//     pincode : 123456,
//     Old_location : 'Ratibad_Bhopal',
//     0 : 123,
//     1 : 456,

// };

// console.log(obj);
// console.log(obj.Dob);
// console.log(obj.Old_location);
// // no. ko hame defined nhi karana padata hai lekin string ko hame defined karna hota hai 
// // Agr hamara key me bich me underline na ho to muje hame "string" lagake console me likhana padata hai 


// // Hm object ko dusare tariko se bhi access kar sakate hai

// console.log(obj['pincode']);
// console.log(obj['Old_location']);

// second method to create object

const car = new Object();
car.brand = "TATA";
car.year = "2025";
car.model = "Electric Car";

console.log(car);

// proprty we can on 
car.Owner_name = "Ankuj matre";
car.License_Owner = "Pyarelal matre";
console.log(car);

// we can also dete property  
delete car.Owner_name;
console.log(car);

// we also modify
car.License_Owner = "Ankuj";
console.log(car);

// Third method

// jaise muje kisi perticular chij me bar bar vahi information daalna hota hai mai ishka use kiya jata hai 

// class Car {
// constructor(brand, model, year) {
// this.brand = brand;
// this.model = model;
// this.year = year;
// }
// }
// const myCar = new Car("Ford", "Mustang", 2021);

car.keys();