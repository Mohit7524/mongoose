//Connection Creation and create a new Database

const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/mohitVirtue")
.then( () => console.log("connection done successfully......."))
.catch( (err) => console.log("err"));
