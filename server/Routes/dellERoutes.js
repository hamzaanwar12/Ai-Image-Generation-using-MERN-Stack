import express from "express";
import { dellEModel } from "../Models/indexModels.js";
import pkg from "openai";
import * as dotenv from "dotenv";

dotenv.config();
const dellERouter = express.Router();

const { Configuration, OpenAIApi } = pkg;

//configuration openAi in the app
const configuration = new Configuration({
  apiKey: process.env.OpenAISecretKey,
});
const openai = new OpenAIApi(configuration);

dellERouter
  .route("/")
  .get(async (req, res) => {
    res.status(200).send("dellE Router Send");
  })
  .post(async (req, res) => {
    try{
      const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({photo:image})
    }
    catch(error)
    {
      console.log("error")
      console.log(error)
      res.status(400).send(error)
    }
    
  });

export default dellERouter;
