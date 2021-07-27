//adding two numbers and multiplaying and dividing the result using call back
// function add(num1,num2,callback){
//     let err=false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }
// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }

// function div(num1,num2,callback){
//     callback(num1/num2)
// }

// add(10,20,(sum,err)=>{
//     if(err){
//         console.log("first number is zero")
//     }else{
//     console.log(sum)
//     multiply(sum,sum,(value)=>{
//         console.log(value)
//         div(value,10,(result)=>{
//             console.log(result)
//         })
//     })
//     }
// })

//this same thing doing with promise
const { resolve, reject } = require('Promise')

const Promise=require('Promise')
function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("first number is zero")
        }
        resolve(num1+num2)
    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("first number is zero")
        }
        resolve(num1*num2)
    })
}
function div(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("First number is zero")
        }
        resolve(num1/num2)
    })
}
add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((value)=>{
    console.log(value)
    return div(value,10)
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})