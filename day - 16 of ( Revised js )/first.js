let obj = {
     name:"Ankuj",
    age:10,
    orange:1,
};

let curr = 'Apple';

    if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
   obj[curr]=1;

console.log(obj);

