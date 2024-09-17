console.log(" This is promises");

let prom1 =new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.5)
    {
        reject("no random number")
    }
    else{
        setTimeout(() => {
            console.log("yas i am dome")
            resolve("umesh")
        }, 3000);
    }
    })
    prom1.then((a)=>{
        console.log(a)
    }).catch((err)=>{
        console.log(err)
    })