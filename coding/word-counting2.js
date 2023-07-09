function getCount(str) {
    return str.split(' ').filter(function(num) {
     return num != ''
    }).length;
   }

let statement = "Hello Dayanand Good Morning, Have a wornderful day it is."
console.log(getCount(statement))