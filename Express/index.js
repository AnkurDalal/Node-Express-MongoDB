const { name } = require('ejs')
const express=require('express')
const path=require('path')
const app=express()

const dirPath=path.join(__dirname,'Public')

app.set('view engine','ejs')
//app.use(express.static(dirPath))


app.get('',(req,resp)=>{
    resp.sendFile(`${dirPath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${dirPath}/about.html`)
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${dirPath}/Help.html`)
})
app.get('/profile',(req,resp)=>{
    const user={
        name:"Ankur",
        age:21,
        city:'Rohtak',
        skills:['java','python','html','css']
    }
    resp.render('Profile',{user})
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${dirPath}/PageNot Found.html`)
})
app.listen(5000,()=>{
   console.log("App is running")
}
)