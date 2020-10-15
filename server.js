const express = require("express");
const renderHTML = require("./routes/renderHTML.js");
const initAPIRoute = require("./routes/apiRoutes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4444;

renderHTML(app);
initAPIRoute(app);


app.listen(PORT, function(){
    console.log("Listening on port: " +  PORT)
});