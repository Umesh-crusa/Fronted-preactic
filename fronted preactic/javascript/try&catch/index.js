let a = prompt("Enter the number");
let b = prompt("Enter the number");
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum=parseInt(a)+parseInt(b); 
function main() {
    
let x=1;
try {
    console.log("the sum of ",sum*x)
} catch (error) {
    console.log("bro err did come in the code")
}finally{
    console.log("files is cilised ")
}
}
let c=main()