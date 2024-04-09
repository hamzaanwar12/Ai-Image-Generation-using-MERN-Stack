import app from "./app.js";
import ConnectDBwithApp from "./database.js";
import * as dotenv from "dotenv";

dotenv.config();

const startServer = async () => 
{
  await ConnectDBwithApp(process.env.DB_URL);
  const port = process.env.PORT || 3000; 
  app.listen(port, () => {
    console.log(`Server is working at port ${process.env.PORT}`);
  });
};

startServer();
