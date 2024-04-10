// import mongodb from "mongodb";
import mongoose from "mongoose";

const ConnectDBwithApp = (url) => {

  mongoose
    .connect(url)
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("Database not conected");
      console.log(error);
    });
};

export default ConnectDBwithApp;

