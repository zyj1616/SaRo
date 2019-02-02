
let express = require("express");
let app = express();

app.use(express.static("public"));


app.get("/", function (req, res) {
   res.render("index.ejs");
});

app.get("/events", function (req, res) {
    res.render("archives/events.ejs")
});

app.listen(3000,'localhost', function(){
    console.log("started");
});