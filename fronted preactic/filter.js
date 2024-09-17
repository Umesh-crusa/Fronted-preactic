const array=[1,2,3,4,5,6,7,8,9]
const arr=array.filter((num)=>{
    return num>4;
})
console.log(arr)
//forEach 
const arra=[1,2,3,4,4,5,6,7,8,9];
   const  ar=[];
   array.forEach((num)=>{
    if(num<4)
    {
        ar.push(num)
    }
   })
    console.log(ar)