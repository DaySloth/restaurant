const reservations = require("../data/reservations.js");
const waitingList = require("../data/waitingList.js");
const { v4: uuidv4 } = require('uuid'); 

const initAPIRoutes = function(app){
    app.post("/api/reservations", function(req, res){
        let body = req.body;
        body.uid = uuidv4();

        if(reservations.length >= 5){
            waitingList.push(body);
            console.log("pushed to waiting list")
        }else{
            reservations.push(body);
        }
        console.log(reservations.length);
        res.json(body);
        });


    app.get("/api/:file", function(req, res){
        let file = req.params.file;

        if(file === "reservations"){
            res.json(reservations)
        }else if(file === "waiting"){
            res.json(waitingList);
        }else {
            res.send("Please use '/api/reservations' or '/api/waiting' to see reservations or waiting list")
        };
    });
}

module.exports = initAPIRoutes;