
const express = require("express");
const app = express();
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/msg_app")

app.use(express.static("public"));


app.get("/", function (req, res) {
   res.render("index.ejs");
});

app.get("/events", function (req, res) {
    res.render("archives/events.ejs")
});

app.get("/danmu", function (req, res) {
    res.render("danmu/danmu.ejs")
});

const msgSchema = new mongoose.Schema({
	name: String,
	time: Date,
	content: String
});

const Msg = mongoose.model("Msg",msgSchema);

app.get("/danmu/",function(req, res) {
	const wanted = req.query.name;

	Msg.find({name:wanted},function(err, msgs){
		if(err){
			console.log("error");
		}
		else{
			res.render("danmu/danmu.ejs")
			console.log(msgs);
		}
	});
});


app.listen(3000,'0.0.0.0', function(){
    console.log("started");
});


