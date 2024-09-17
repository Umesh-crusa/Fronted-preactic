let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // alert("hello my all frinds")
    document.querySelector(".box").innerHTML="<b>it's umesh kumar</b> i enjoy"
})


button.addEventListener("dblclick",()=>{
    alert("hello my all frinds")
})

document.addEventListener("keydown",(e)=>{
console.log(e.key ,e.keyCode)
})