const express=require('express');
const app=express()
const bodyparser=require('body-parser')
const exhbs=require('express-handlebars')
//templating engine setup
app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:'main',extname:'hbs'}))
app.set('view engine','hbs')
app.set('views','views');

app.get("/",(req,res)=>{
    let message='test'
    res.render('main',{message})
})
app.listen(8001,()=>{
    console.log("Listening on Port 8000")
})