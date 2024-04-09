import express from "express";
import {dellEModel} from "../Models/indexModels.js"
import pkg from 'openai';
import * as dotenv from "dotenv"

dotenv.config()


const {Configuration,openAIApi} = pkg;



const dellERouter = express.Router();

dellERouter.route("/")
.get(async (req, res) => {
  req.status(200).send("dellE Router Send");
})
.post(async (req, res) =>{

})
export default dellERouter;
