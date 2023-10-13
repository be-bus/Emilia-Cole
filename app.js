const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/view/home.html'))// especifica que archivo devuelve...
})
app.get('/music',(req,res)=>{
    res.sendFile(path.join(__dirname,'/view/music.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/view/about.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'/view/contact.html'))
})
app.listen(3030,()=>console.log('Servidor Corriendo...'))
app.use(express.static(path.join(__dirname,'public')))