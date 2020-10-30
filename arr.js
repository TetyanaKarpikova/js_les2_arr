// // task 1
// let arr_num = [1, 5, 10, 348, -83];
// console.log(arr_num);

// let arr_str = ['string', 'integer', 'float', 'boolean', 'array'];
// console.log(arr_str);

// let arr_mix = [78, true, 'Hello', 345, 'world'];
// console.log(arr_mix);


// // task 2
// let arr = [];
// arr[0] = 'one';
// arr[1] = -15;
// arr[2] = false;
// arr[3] = 3.14;
// arr[4] = 270;
// arr[5] = 'print';
// arr[6] = true;
// arr[7] = -11111;
// console.log(arr);


// // task 3
// for (let i = 0; i < 10; i++){
//     document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>');
// }



// // task 4
// for (let i = 0; i <10; i++){
//     document.write(`<div>Vel sunt reiciendis tempora vero aperiam quis error sit ipsa voluptatem culpa maiores ${i}</div>`);
// }


// // task 5
// let i = 0;
// while (i < 20){
//     document.write(`<h1>Provident deserunt sit placeat iste vero, ab odio maxime eum porro.</h1>`);
//     i++;
// }


// // task 6
// let i = 0;
// while (i < 20){
//     document.write(`<h1>nulla consectetur voluptatem quisquam quod aliquam natus maxime ${i}</h1>`);
//     i++;
// }


// // task 7
// let arr_num = [10, 20, 57, 82, 45, -90, 620976, 9.82, 271,  456];
// for (let i = 0; i < arr_num.length; i++){
//     console.log(arr_num[i]);
// }


// // task 8
// let arr_str = ['array', 'loop', 'null', 'document', 'abc', 'exe', 'while', 'div', 'write', 'place'];
// for (let i = 0; i < arr_str.length; i++){
//     console.log(arr_str[i]);
// }

// // task 9
// let arr_mix = [true, '76', 2468, 'key', false, -1024, 85, 'cool', 'book', true];
// for (let i = 0; i < arr_mix.length; i++){
//     console.log(arr_mix[i]);
// }


// // task 10
// let arr = [0, true, 7531, -427, false, true, 'string', 'integer', 'false', 'print'];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'boolean'){
//         console.log(arr[i]);
//     }    
// }


// // task 11
// let arr = ['boolean', true, 5, true, true, 'lorem', 'cool', 32, -2578, 97];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "number"){
//         console.log(arr[i]);
//     }
// }

// // task 12
// let arr = ['name', 11, 730,25555, 'true', false, 'last name', 'string', true, -98325, 45677];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'string'){
//         console.log(arr[i]);
//     }
// }


// // task 13
// let arr = [];
// arr[0] = true;
// arr[1] = false;
// arr[2] = 'boolean';
// arr[3] = 2764;
// arr[4] = 32;
// arr[5] = -976249;
// arr[6] = 'length'
// arr[7] = 65000;
// arr[8] = 'loop';
// arr[9] = 62,66432;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// // task 14
// for (let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(i + '<br>');
// }


// // task 15
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i + '<br>');
// }


// //task 16
// for (let i = 0; i < 100; i +=2){
//     console.log(i);
//     document.write(i + '<br>');
// }


// // task 17
// for( let i = 0; i < 100; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }


// // task 18
// for (let i = 0; i < 100; i++){
//     if (i % 2 != 0){
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }


// // task 19
// for (let i = 0; i < 2; i++) {
//     for(let y = 0;  y < 60; y++){
//         console.log(i, ' ' ,y);
//         document.write(i + ' ' + y  + '<br>');
//     }
// }

// // task 20
// let arr1 = ['a', 'b', 'c'];
// let str1 = '';
// for (let i = 0; i < arr1.length; i++){
//     str1 = str1 + arr1[i];
// }
// console.log(str1);
// document.write(str1);


// // rask 21
// let arr2 = ['a', 'b', 'c'];
// let str2 = '';
// let i = 0;
// while ( i < arr2.length) {
//     str2 = str2 + arr2[i];
//     i++;
// } 
// console.log(str2);
// document.write(str2);


// // task 22
// let arr3 = ['a', 'b', 'c'];
// let str3 = '';
// for (let z of arr3){
//     str3 = str3 + z;
// }
// console.log(str3);
// document.write(str3);


// // task 23
// let arr = ['a', 'b','c'];
// for (let i = 1; i <= 3; i++){
//     arr.push(i);
// }
// console.log(arr);


// // task 24
// let arr = [1, 2, 3];
// let arr_reverce = [];
// for (let i = arr.length-1; i >= 0; i--){
//     arr_reverce.push(arr[i]);
// }
// console.log(arr_reverce);


// // task 25
// let arr = [1, 2, 3];
// for (let i = 4; i <= 6; i++){
//     arr.push(i);
// }
// console.log(arr);


// // task 26
// let arr = [1, 2, 3];
// for (let i = 6; i >= 4; i--){
//     arr.unshift(i);
// }
// console.log(arr);


// // task 27
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());


// // task 28
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());


// // task 29
// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(3);
// console.log(arr);


// // task 30
// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(0, 2);
// console.log(arr);


// // task 31
// let arr = [1, 2, 3, 4, 5];
// let arr_del = arr.splice(1,2);
// console.log(arr);


// // task 32
// let arr = [1, 2, 3, 4, 5];
// let arr_add = arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


// // task 33
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);


// task 34


// // task 35
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr_copy = [];
// for (let i = 0; i < arr.length; i++){
//     arr_copy.push(arr[i]);
// }
// console.log(arr);
// console.log(arr_copy);


// // task 36
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr_copy = [];
// for (let i = 0; i< arr.length; i++){
//     arr_copy[i] = arr[i];
// }
// console.log(arr_copy);