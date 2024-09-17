async function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(455)
    }, 3500);
  })
}
// async function getData(){
//     let x = await fetch('https://jsorolaceholder.typocode.com/todos/1')
//     let data = await x.json()
//     console.log(data)
//     return data
// }
// async and await
async function main(){
console.log("loding data")
console.log("Do something else")
console.log("load data")
let data = await getData()
console.log(data)
console.log("process data")
}
main()