// let obj ={
//     a:1,
//     b:"umesh"
// }

// let animal={
//     eats:"grass",

// };
// let rabbit ={
//     jumps: "carrot"
// }


class animal{
    constructor(name){
        this.name=name;
        console.log("object is created..");
    }
    eats(){
        console.log("i am eading")
    }
    jump(){
        console.log("i am jumping")
    }
}
class lion extends animal{
    constructor(name){
        super(name);
        console.log("object of lion class")
    }
}

let a=new animal("umesh")
console.log(a)

let l=new lion("lorem")
console.log(l)