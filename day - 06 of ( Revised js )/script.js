console.log("Start the string from today");

// primitive datatypes lertas started 

const num = 10;
// num = 20;
console.log(num);

// not allowoud rahega agr koi bhi value lete hai unaki jagah to

// non primitive datatype

const obj = {
    id:10,
    balance:500
};

obj.id = 11;
console.log(obj);

obj.balance = 30;
console.log(obj);

const obj2= {
    id:300,
    money:1000,
};


// kya ye dono equal ho sakate hai nhi ho sakate 
// location of obj = 500; mana hai jabaki 
// location of obj2 = 800; mana hai ;

// obj = obj2; // error aa rha hai because dono ka location alag alag hai dono heap me hi honge bs adresss jo hai vo stack me hoga because ye non primitive datatypes hai
// error aayega 



// string in js 

console.log("Coder Army");
console.log('Rohit negi');
console.log(`Welcome to Zumanji`);

let price = 100;
// jb mai har baar value change karunga to muje console.log me bhi change karna padega ishilye mai ${} ka use karunga jisse  running time me value change ho
console.log(`i have rupees only ${price}`);

let s1= "hello";
let s2= " hii";
let s3= s1+s2;
console.log(s3);
console.log(s1.length);
console.log(s2.length);
console.log(s3.length);

// jb double comma bi print karana ho saath hi single bhi 

console.log("hii");
console.log('"hii"');

// jb single comma bhi print karna ho 

console.log("Hello");
console.log("'Hello'");

// newline ke liye \n ka use kiya jata hai 

console.log("My name is ankuj matre from \nlocation Madhaya Pradesh");
// \n ko bhi print karana hai to escape character(\) ka use karna hota hai 

console.log("My name is ankuj matre from \\nlocation Madhaya Pradesh") // escape character ko bs aage lagana hota hai 


// Targetting Words
let Special = "Ankuj";
console.log(Special[3]);
// ya mai charAt ka bhi use kar sakata hu iiname index 0 se start hoti hai 
console.log(Special.charAt(3));

// lets startred UpperCase() & LowerCase()
console.log(Special);
console.log(Special.toUpperCase());
console.log(Special.toLowerCase());


let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder")); // -1 aayega because ye chota coder hai hi nhi
console.log(hero.includes("Coder"));


// using of slice and Substring
//   index- 01234
let Name = "Matre";
       -5-4-3-2-1
console.log(Name.slice(1,4)); // last vale ko include nhi karata hai 
console.log(Name.slice(-4,4));
console.log(Name.slice(-1,1)); // left se right taraf hona chahiye 
console.log(Name.substring(0,5));

// slice negative index ko bhi store kar sakata hai jabki substring nhi kar sakata 
// baki dono similiar hi hote hai 

let str = "Rohit is a founder of coder is army";
console.log(str.replace("is", "not"));  // single is me aaya hai not sabhi is me lana hai 
console.log(str.replaceAll("is", "not"));


let str11 = "money ! honey ! gemini ! Romini ";
console.log(str11.split("! "));  // kisi ek word ya value ko manakar sring se array bana sakate hai 