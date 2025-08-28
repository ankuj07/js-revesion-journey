console.log("Hello ji I am Ankuj");

function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}


console.log(module.exports);

// module.exports = {sum,sub};
module.exports.sum = sum;
module.exports.sub = sub;

// {sum: sum