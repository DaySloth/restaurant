const path = require("path");

const renderHTML = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/reservations", function(req, res){
        res.sendFile(path.join(__dirname, "../public/reservations.html"));
    });
};

module.exports = renderHTML;
