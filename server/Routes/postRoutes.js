import express from "express";
import {postModel} from "../Models/indexModels.js"


const postRouter = express.Router();
postRouter.route("/")
.get(async (req, res) => {
  req.status(200).send("Post Router Send");
})
.post(async (req, res) =>{

})


export default postRouter;
