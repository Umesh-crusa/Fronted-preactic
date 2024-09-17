let arr=[1,12,6,8,5];
// // let ar=[1,2,44,4,43];
// //     arr.concat(ar);
// // console.log(arr)
// // // console.log(arr.toString)
// // // console.log(arr.length)
// // // console.log(arr.join(" and "))
// // // console.log(arr.pop())
// // console.log(arr.push(100))
// // console.log(arr.concat(ar));

// // arr.forEach((value, index,arr)=>{
// //     console.log(value,index,arr)
// // })
// /*it is the foor in loop use object verabials*/
// // let obj={
// //     a:1,
// //     b:2,
// //     c:3

// // }
// // for (const key in obj) {
// //     if (Object.hasOwnProperty.call(obj, key)) {
// //         const element = obj[key];
// //         console.log( key,element)
        
// //     }
// // }
// // /*it is the foor of loop use for the array only*/
// // for (const value of arr) {
// //     console.log( value)
// // }
// //without function array qu
// let arra=[];
// // for (let index = 0; index < arr.length; index++) {
// //     const element = arr[index];
// //     arra.push(element**2);
    
// // }
// // map function find the que
let arra =arr.map((e)=>{
    return e**2;
})
console.log(arra);
// // filter function use

const g = (e)=>{
    if(e>7)
    {
        return true;
    }
    return false;
}
console.log(arra.filter(g))
//readuce function 
const red =(a,b)=>{
    return a+b;
}
console.log(arr.reduce(red));
// //Array.from function 
console.log(Array.from("umesh"));
// //revers function in array
console.log(arr.reverse())
console.log(arr.sort())
let array=[2,22,34,44,5,6]
console.log(array.reverse())