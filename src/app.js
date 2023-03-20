//Connection Creation and create a new Database

const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/mohitVirtue")
.then( () => console.log("connection Establish successfully......."))
.catch( (err) => console.log("err"));


// Schema
// A mongoose schema defines the structure of the documents
// Default values,validation etc

const mohitVirtueeSchema=new mongoose.Schema( {
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// mohitVirtueeSchema : Object / Instance
/*

* Mongoose Model
** A mongoose model is a wrapper on the mongoose schema.
** A mongoose schema defines the structure of the dacument,default value,validation etc whereas a mongoose model provides 
   an interface to the database for creating,quering,updating,deleting record etc.

*/

const mohitVirtue=new mongoose.model("mongoose",mohitVirtueeSchema);

// mohitVirtue  : Class name
// mohitVirtueeSchema : Collection Name


// Create Document or Inset the db

const reactmohitVirtue=new mohitVirtue({
    firstName:'Sahzaad',
    lastName:'Singh',
    mobile_no:8366663726,
    emailId:'sahzad@gmail.com'
})

reactmohitVirtue.save();

