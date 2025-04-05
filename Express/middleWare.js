const express=require('express')
const app=express()

const reqFilter=(req,resp,next)=>{
   if(!req.query.age){
    resp.send('Please Provide the AGE !')
   }else if(req.query.age<18){
    resp.send('You are Not Adult !')
   }else{
    next()
   }
}
app.use(reqFilter)

app.get('',(req,resp)=>{
    resp.send('Welcome to Home Page')
})
app.get('/help',(req,resp)=>{
    resp.send('Welcome to Help Page')
})

app.listen(8000,()=>{
    console.log('app is running on the port 8000 !')
})