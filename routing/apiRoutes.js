var db = require("../models");
const express = require('express');
const burger = require('../models/burger.js');
const path = require('path')
module.exports = (app)=>{
    app.post('/burger',(QueryRequest,response)=>{ //adds burger then updates page //CREATE
        

    });
    app.get('/burger',(request,responsePage)=>{ //possibly need for repeat select queries //READ
        
    });
    app.put('/burger',(queryRequest,responsePage)=>{ //updates eaten status then redisplays UPDATE
        
    });
    app.delete('/burger/delete/:id',(request,response)=>{ //DELETE
        
    });

}