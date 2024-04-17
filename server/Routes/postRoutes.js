import express from "express";
import {v2 as cloudinary} from "cloudinary"
import {postModel} from "../Models/indexModels.js"

const postRouter = express.Router();
       
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

postRouter.route("/")
.get(async (req, res) => {
  try {
    const allPosts = await Post.find({})
    
    res.status(200).json({
      success:true,
      message:"Posts Fetched",
      data : allPosts   
    })

  } catch (error) {
    console.log("Error while FETCHING pOSTS")
    res.status(400).json({
      success:false,
      message:"Error! Posts could not be  Fetched"  
    })
    
  }
  res.status(200).send("Post Router Send");
})
.post(async (req, res) =>{

  try{
    const {name,photo,prompt} =req.body;
  const photoUrl = await cloudinary.uploader().upload(photo)

  const newPost = new postModel.create({
    name,
    photo:photoUrl.url,
    prompt,
  })

  res.status(200).json({
    success:"true",
    message:"Photo Posted",
    data : newPost   
  })
 
  }
  catch(error)
  {
    console.log("Photo Post Error")
    res.status(400).json({
      success:"false",
      message:"Photo could not Posted"   
    })
  }
  
})


export default postRouter;
