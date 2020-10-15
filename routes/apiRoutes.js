const path = require("path");
const fs = require("fs");
const reservations = require("../data/reservations.js");
const waitingList = require("../data/waitingList.js");

const initAPIRoutes = function(app){
    app.post("/api/reservations", function(req, res){
        let body = req.body;

        if(reservations.length >= 5){
            waitingList.push(body)
        }else{
            reservations.push(body);
        }
        
        res.json(body);
        });


    app.get("/api/:file", function(req, res){
        let file = req.params.file;

        if(file === "reservations"){
            res.json(reservations)
        }else if(file === "waiting"){
            res.json(waitingList);
        }else {
            res.send("Please use '/api/reservations' or '/api/waiting'")
        };
    });
}

module.exports = initAPIRoutes;