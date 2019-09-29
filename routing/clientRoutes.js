const db = require("../models");

const express = require('express');

const path = require('path');
module.exports = (app)=>{
    app.get('/',(request,responsePage)=>{    
        responsePage.render('index'); 
           
    });
    app.get('/newBurger',(request,responsePage)=>{ 
        responsePage.render('newForm'); 

    });
    /***********************************************css routes**************************************************************/
    app.get("/style.css", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/assets/css/burger_style.css"));
    });
    app.get('/normalize.css',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/css/normalize.css'));
    });
    app.get('/skeleton.css',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/css/skeleton.css'));
    });
/***********************************************js routes**************************************************************/
    app.get('/burger_logic.js',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/javascript/burger_logic.js'));

    });
    app.get('/burger_logo',(request,response)=>{
        response.sendFile(path.join(__dirname,'../public/assets/img/download.png'));
    })
    app.get('/burger_icon',(request,response)=>{
        response.sendFile(path.join(__dirname,'../public/assets/img/PinClipart.com_burger-clip-art_1101617.png'));

    });
    app.get('/burger_plate',(request,response)=>{
        response.sendFile(path.join(__dirname,'../public/assets/img/kissclipart-cartoon-picture-of-a-dish-clipart-dish-clip-art-a741357b2802dcef.png'))
    })
    
}