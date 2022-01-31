/* let student = 'Mustafa';

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

sayHi(student) */

let students = ['John', 'Jane', 'Joe'];
// sayHi(students)

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }

// for (let i = 0; i < students.length; i++) {
//     sayHi(students[i])
    
// }
// function sayHi(student){
//     for (let i = 0; i < student.length; i++) {
//         console.log(`Welcome ${student[i]}`)
//     }
// }
// const bill = function(item, tax){
//     let total = 0;
//     for(let i =0; i < item.length; i++){
//         total += item[i]+item[i]*tax;
//     }
//     return total;
// }

// console.log(bill([10,15,20],0.18))

// function bolme(num1,num2){
//     return num2 ? num1/num2: "Zero division"
// }
// console.log(bolme(8/2));


// function pascalNumber1(n){
// let sum = 0;
// for(let i = 1; i < n+1; i++){
// sum +=i
// }
// return sum
// // }
// // function bolme(num1, num2){
// //     return num2 ? num1 /num2 : "Zero Devision Error";
// }

// function pascalNumber3 (n){
//     if(n === 1) return 1;
//     return n + pascalNumber3(n-1)
// }
// console.log(pascalNumber3(5));

// let iife = (function trian(num) {
//     if (num === 1) return 1;
//     return num + trian(num-1);
// })(3);
// console.log(iife);

// strings
let str1 = "Hello "
let str2 = "World!"
let str3 = `${str1+str2}`
console.log(str3);