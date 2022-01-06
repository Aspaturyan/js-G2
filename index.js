//-----------------HomeWork 1---------------------//
//task 2
function foo (str, num){
    for (let i = 0; i < str.length; i++){
        if(str.length === num){
            return true;
        } else return false
    }
} console.log(foo("hayk", 4))

//task 4
function numToBin(num){
    let number = num;
    let res = [];
    while(number>=1){
        res.unshift(Math.floor(number%2));
        number = number/2;
    } return res;
} console.log(numToBin(10))

//task 6
let lang = "ru";
switch(lang){
    case "en":
        lang = "english";
        break;
    case "hy":
        lang = "armenian";
        break;
    case "ru":
       lang = "russian";
        break;
    case "fr":
        lang = "french";
        break;
    case "it":
        lang = "italian";
        break;
} console.log(lang)

//task 7
function clock(secund){
    let sec = secund;    
    let hours = Math.floor(sec/3600);
    let minuts = Math.floor((sec/60)%60);
    let secunds = Math.floor(sec%60);
if (hours < 10){
    hours = "0" + hours
} if(minuts < 10){
    minuts = "0"+ minuts
} if (secunds < 10){
    secunds = "0" + secunds
}
return hours+ ":" +minuts+ ":" +secunds;
}console.log(clock(72456))

//task 9
function revers(str){
    let res = [];
    for(let i = str.length-1; i >= 0; i--){
        res.push(str[i]);
    }return res;
} console.log(revers('hayk'))


//---------------HomeWork 3 -----------------//
//task 2
function word(str){
    return str.split('-').map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('')
}
console.log(word('background-color'))

console.log(word('-webkit-transition')) 

// task 3
function findNum(arr, a, b){
    for(let i = 0; i <= arr.length; i++){
    return arr.filter((element) => element >= a && element <= b)
}
} console.log(findNum([2, 66, 3, 9], 1, 3))

//task 4
function same(arr1, arr2){
    return arr1.some(element => arr1[element] === arr2[element])
}console.log(same([1, 2, 3], [1, 2, 3]))

//task 5
function concatArray(arr){
    let result = [];
    arr.forEach((el)=> {
      if(Array.isArray(el)){
        result = result.concat(concatArray(el));
        return;
      }result.push(el);
    });
    return result;
  }
console.log(concatArray([1, 2, [3, 4, [5, [3]]]]))

function concatArray(arr){
    return arr.flat(Infinity)
}


// const person ={name:" lidia"};
// function sayHi(age){
//     return `${this.name} is ${age}`;

// }
// console.log (sayHi.call(person, 21));
// console.log (sayHi.bind(person, 21));

// // const person = {name:"lidia"};
// // Object.defineProperty(person,"age", {value: 21});
// // console.log(person);
// // console.log(Object.keys(person))

// // const a= {};
// // const b= {key:"b"};
// // const c={key: "c"};
// // a[b]=123;
// // a[c]=456;
// // console.log(a[b])

// // class Chameleon{
// //     static colorChange(newColor){
// //         this.newColor=newColor;
// //         return this.newColor;
// //     }
// //     constructor({newColor = 'green'} = {}){
// //         this.newColor=newColor;
// //     }
// // }
// // const freddie = new Chameleon({newColor: 'purple'});
// // console.log(freddie.colorChange('orange'));