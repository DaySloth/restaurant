const path = require("path");
const fs = require("fs");

const initAPIRoutes = function(app){
    app.post("/API/reservations", function(req, res){
        let body = req.body;
        fs.appendFile("../data/reservations.json", body + '\n\n', function(err){
            if(err){
                throw err;
            }

            console.log("Wrote to 'reservations.json' File");

            res.json(body);
        });
    });


    app.get("/API/:file", function(req, res){
        let file = req.params.file;

        if(file === "reservations"){
            res.sendFile(path.join(__dirname, "../data/reservations.json"));
        }else if(file === "waiting"){
            res.sendFile(path.join(__dirname, "../data/waiting.json"));
        }else {
            res.send("Please use '/API/reservations' or '/API/waiting'")
        };
    })
}

module.exports = initAPIRoutes;