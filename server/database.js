// import mongodb from "mongodb";
import mongoose from "mongoose";

const ConnectDBwithApp = (url,appListener) => {
  // compassDB_URL
  mongoose
    .connect(url)
    .then(() => {
      console.log("database connected");
      appListener();
    })
    .catch((error) => {
      console.log("Database not conected");
      console.log(error);
    });
};

export default ConnectDBwithApp;

/*
    This module is used to connect the application with MongoDB database. It uses mongodb not mongoose
const MongoClient = mongodb.MongoClient;
let db;
const mongoConnect = (cb)=>
{
    // "mongodb+srv://Recky776:Hamza8063@cluster0.ay7ptf3.mongodb.net/?retryWrites=true&w=majority",
    MongoClient.connect(
        Atlas_DB_URL,
        {
            ssl:true,
            serverSelectionTimeoutMS:5000,
        }).then(client=>{
            db = client.db("Demo")
            cb()
            console.log("Database Connected")
        })
        .catch(err=>
        {
            console.log(err)
        })
    };
    
    const dbConnect = ()=>
    {
        if(db)
        return db;
    throw "Database Not Found";
}


export{mongoConnect,dbConnect}
*/
