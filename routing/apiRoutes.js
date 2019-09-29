const db = require("../models");
const express = require('express');

const path = require('path')
module.exports = (app)=>{
    app.post('/burger',(QueryRequest,response) =>{ //adds burger then updates page //CREATE
        

    });
    app.get('/burger',async (request,response)=>{ //possibly need for repeat select queries //READ
        let result = await db.burgers.findAll({});
        console.table(result);
        response.json(result);
        
    });
    app.put('/burger',(queryRequest,responsePage)=>{ //updates eaten status then redisplays UPDATE
        
    });
    app.delete('/burger/delete/:id',(request,response)=>{ //DELETE
        
    });

}