// // task 1
// створити масив та вивести його в консоль: з 5 числових значень
// let arr_num = [1, 5, 10, 348, -83];
// console.log(arr_num);

// створити масив та вивести його в консоль: з 5 стічкових значень
// let arr_str = ['string', 'integer', 'float', 'boolean', 'array'];
// console.log(arr_str);

// створити масив та вивести його в консоль: 5 значень стрічкового, числового та булевого типу
// let arr_mix = [78, true, 'Hello', 345, 'world'];
// console.log(arr_mix);


// // task 2
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
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
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++){
//     document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>');
// }



// // task 4
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <10; i++){
//     document.write(`<div>Vel sunt reiciendis tempora vero aperiam quis error sit ipsa voluptatem culpa maiores ${i}</div>`);
// }


// // task 5
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1>Provident deserunt sit placeat iste vero, ab odio maxime eum porro.</h1>`);
//     i++;
// }


// // task 6
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
// let i = 0;
// while (i < 20){
//     document.write(`<h1>nulla consectetur voluptatem quisquam quod aliquam natus maxime ${i}</h1>`);
//     i++;
// }


// // task 7
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr_num = [10, 20, 57, 82, 45, -90, 620976, 9.82, 271,  456];
// for (let i = 0; i < arr_num.length; i++){
//     console.log(arr_num[i]);
// }


// // task 8
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr_str = ['array', 'loop', 'null', 'document', 'abc', 'exe', 'while', 'div', 'write', 'place'];
// for (let i = 0; i < arr_str.length; i++){
//     console.log(arr_str[i]);
// }

// // task 9
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr_mix = [true, '76', 2468, 'key', false, -1024, 85, 'cool', 'book', true];
// for (let i = 0; i < arr_mix.length; i++){
//     console.log(arr_mix[i]);
// }


// // task 10
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [0, true, 7531, -427, false, true, 'string', 'integer', 'false', 'print'];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'boolean'){
//         console.log(arr[i]);
//     }    
// }


// // task 11
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['boolean', true, 5, true, true, 'lorem', 'cool', 32, -2578, 97];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "number"){
//         console.log(arr[i]);
//     }
// }

// // task 12
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['name', 11, 730,25555, 'true', false, 'last name', 'string', true, -98325, 45677];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'string'){
//         console.log(arr[i]);
//     }
// }


// // task 13
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
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
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(i + '<br>');
// }


// // task 15
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i + '<br>');
// }


// //task 16
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 200; i +=2){
//     console.log(i);
//     document.write(i + '<br>');
// }


// // task 17
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for( let i = 0; i < 100; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }


// // task 18
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if (i % 2 != 0){
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }


// // task 19
// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i < 3; i++) {
//     for(let y = 0;  y < 60; y++){
//         if (i == 2 && y > 0){
//             break;
//         } else {
//             console.log(i, ' ' ,y);
//             document.write(i + ' ' + y  + '<br>');
//         }
//         if (i == 2 && y > 0){
//             break;
//         } 
//     }
// }


// task 20
// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i < 3; i++ ){
//     for (let y = 0; y < 60; y++){
//         for (let z = 0; z < 60; z++){
//             if (i == 2 && y == 20 && z >0) {
//                 break;
//             } else {
//                 console.log(i + ' години  ' + y + ' хвилин  ' + z + 'секунд');
//                 document.write(i + ' години  ' + y + ' хвилин  ' + z + 'секунд <br>' );
//             } 
//         } 
//         if (i == 2 && y == 20){
//             break;
//         }  
//      }
// }


// // task 21
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr1 = ['a', 'b', 'c'];
// let str1 = '';
// for (let i = 0; i < arr1.length; i++){
//     str1 = str1 + arr1[i];
// }
// console.log(str1);
// document.write(str1);


// // rask 22
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr2 = ['a', 'b', 'c'];
// let str2 = '';
// let i = 0;
// while ( i < arr2.length) {
//     str2 = str2 + arr2[i];
//     i++;
// } 
// console.log(str2);
// document.write(str2);


// // task 23
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr3 = ['a', 'b', 'c'];
// let str3 = '';
// for (let z of arr3){
//     str3 = str3 + z;
// }
// console.log(str3);
// document.write(str3);


// // task 24
// ан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b','c'];
// for (let i = 1; i <= 3; i++){
//     arr.push(i);
// }
// console.log(arr);


// // task 25
// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].  
// let arr = [1, 2, 3];
// let arr_reverce = [];
// for (let i = arr.length-1; i >= 0; i--){
//     arr_reverce.push(arr[i]);
// }
// console.log(arr_reverce);


// // task 26
// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// for (let i = 4; i <= 6; i++){
//     arr.push(i);
// }
// console.log(arr);


// // task 27
// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6
// let arr = [1, 2, 3];
// for (let i = 6; i >= 4; i--){
//     arr.unshift(i);
// }
// console.log(arr);


// // task 28
// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());


// // task 29
// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());


// // task 30
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(3);
// console.log(arr);


// // task 31
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(0, 2);
// console.log(arr);


// // task 32
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let arr_del = arr.splice(1,2);
// console.log(arr);


// // task 33
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let arr_add = arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


// // task 34
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);


// task 35
// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [10, 121, 256, 333, 478, 90, 5, 7, 0, 53]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0 && arr[i] !== 0) {
//         console.log(arr[i]);
//     }
// }


// // task 36
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr_copy = [];
// for (let i = 0; i < arr.length; i++){
//     arr_copy.push(arr[i]);
// }
// console.log(arr);
// console.log(arr_copy);


// // task 37
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr_copy = [];
// for (let i = 0; i< arr.length; i++){
//     arr_copy[i] = arr[i];
// }
// console.log(arr_copy);