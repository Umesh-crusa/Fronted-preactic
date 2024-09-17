const array=[1,2,3,75]
const arr=array.map((num)=> num*10)
    .map((num)=>num+1)
    .map((num)=>num*100)
    .filter((num)=>num>=1210)
    console.log(arr)