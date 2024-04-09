import express from "express";
import {dellEModel} from "../Models/indexModels.js"


const dellERouter = express.Router();

dellERouter.route("/")
.get(async (req, res) => {
  req.status(200).send("dellE Router Send");
})
.post(async (req, res) =>{

})
export default dellERouter;
