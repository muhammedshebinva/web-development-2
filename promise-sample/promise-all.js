const { resolve, reject } = require('promise')
const Promise=require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("shebin")
        },3000)
    }) 
}
function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("5461565465")
        },2000)
    }) 
}

Promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result)
})