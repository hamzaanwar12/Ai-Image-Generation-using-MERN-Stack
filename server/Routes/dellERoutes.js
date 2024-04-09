import express from "express";
import {dellEModel} from "../Models/indexModels.js"
import pkg from 'openai';
import * as dotenv from "dotenv"

dotenv.config()
const dellERouter = express.Router();


const {Configuration,OpenAIApi} = pkg;

//configuration openAi in the app
const configuration = new Configuration(
  {
    apiKey:process.env.OpenAISecretKey
  }
)
const openai = new OpenAIApi(configuration)

dellERouter.route("/")
.get(async (req, res) => {
  res.status(200).send("dellE Router Send");
})
.post(async (req, res) =>{

})
export default dellERouter;
