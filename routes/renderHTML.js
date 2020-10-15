const renderHTML = function(app){
    app.get("/", function(req, res){
        res.send("Home page")
    });
    
    app.get("/reservations", function(req, res){
        res.sendFile(__dirname + "/public/reservations.html");
    });
};

module.exports = renderHTML;
