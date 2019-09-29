var db = require("../models");
var db = require("../models");
const express = require('express');
const burger = require('../models/burger.js');
const path = require('path');
module.exports = (app)=>{
    app.get('/',(request,responsePage)=>{    
        responsePage.render('index'); 
           
    });
    app.get('/newBurger',(request,responsePage)=>{ 
        responsePage.render('newForm'); 

    });
    
}