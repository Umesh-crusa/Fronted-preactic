// sincronise operation
console.log("Umesh is a hacker")
console.log("Rahul is a hacker")



setTimeout(() => {
    console.log("i am inside ")
},2000);
console.log("the end")

const script=(src,callback)=>{
 let sc= document.createElement("scrip");
 sc.src=src;
 sc.onload = callback("Harry");

}