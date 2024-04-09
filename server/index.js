import app from "./app.js";
import ConnectDBwithApp from "./database.js";


const startServer = async () => {
 
  ConnectDBwithApp(process.env.DB_URL,() =>
    app.listen(process.env.PORT, () => {
      console.log(`Server is working at port ${process.env.PORT}`);
    })
  );
};

startServer();
