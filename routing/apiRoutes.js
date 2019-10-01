const db = require("../models");
const express = require('express');

const path = require('path');
module.exports = (app)=>{
    app.post('/burger',async (request,response) =>{ //adds burger then updates page //CREATE
        
        let result = await db.burgers.create({
            burger_name: request.body.name,
            author: request.body.author.replace(/\s+/g,"").toLowerCase(),
        });
        if (result.changedRows === 0) {
            return response.status(404).end();
          } else {
            response.status(200).end();
          }

    });
    app.get('/burger',async (request,response)=>{ //possibly need for repeat select queries //READ
        let result = await db.burgers.findAll({});
        console.table(result);
        response.json(result);
        
    });
    app.put('/burger',async (req,response)=>{ //updates eaten status then redisplays UPDATE
        let result = await db.burgers.update({where:{id: req.body.id}});
        response.json(result);
        if (result.changedRows === 0) {
            return response.status(404).end();
          } else {
            response.status(200).end();
          }

    });
    app.delete('/burger/delete/:id',async (request,response)=>{ //DELETE
        let result = await db.burgers.destroy({where:{id: request.params.id}});
        if (result.changedRows === 0) {
            return response.status(404).end();
          } else {
            response.status(200).end();
          }
        
    });

}