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

/*
// mohitVirtue  : Class name
// mohitVirtueeSchema : Collection Name


// Create Document or Inset the db

const createDocument = async () => {
    try {
        const reactmohitVirtue=new mohitVirtue({
            firstName:'Nidhi',
            lastName:'Rai',
            mobile_no:836683726,
            emailId:'Nidhi@gmail.com'
    })
    */

    // Insert two or more dacuments inside the collections
   const createDocument = async () => {
    try{
        const reactmohitVirtue=new mohitVirtue({
            firstName:'Nidhi1',
            lastName:'Rai',
            mobile_no:836683726,
            emailId:'Nidhi@gmail.com'
    })
    const mongoosemohitVirtue=new mohitVirtue({
        firstName:'mongoose',
        lastName:'bhai',
        mobile_no:836683626,
        emailId:'mongoose@gmail.com'
   })
   const backmohitVirtue=new mohitVirtue({
    firstName:'back',
    lastName:'pulpul',
    mobile_no:836383726,
    emailId:'back@gmail.com'
   })
   const nodemohitVirtue=new mohitVirtue({
    firstName:'node',
    lastName:'jadhav',
    mobile_no:831683726,
    emailId:'jadhav@gmail.com'
})
    
    const result=await mohitVirtue.insertMany([reactmohitVirtue,mongoosemohitVirtue,backmohitVirtue,nodemohitVirtue]);
    console.log(result);
}
 catch(err){
    console.log(err);
 }
}



// createDocument();                Used for create the dacuments in the collections

// but here i am going to perform Read operation show i need to comment this parts.


const getDacument=async () => {
    const result = await mohitVirtue.find();
    console.log(result);
}
getDacument();



/*
// Expected Output

_id: 641834dfad2c4d9421c19742
firstName:"Sahzaad"
lastName:"Singh"
mobile_no:8366663726
emailId:"sahzad@gmail.com"
date:2023-03-20T10:26:39.291+00:00
__v: 0
*/


