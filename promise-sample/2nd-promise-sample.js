const { reject } = require('promise')
const promise=require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("num1 is zero")
        }
        resolve(num1+num2)

    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1*num2)
    })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,10)
}).then((product)=>{
    console.log(product)
})
.catch((err)=>{
    console.log(err)
})