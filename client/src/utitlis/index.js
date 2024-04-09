import Loader from "../components/Loader"
import Card from "../components/Card"
import RenderCards from "../components/RenderCards"
import surpriseMePrompts from "../Constants/surpriseMe.js"

const getSurprisePrompt = (prompt)=>
{
    let newPrompt = surpriseMePrompts[Math.floor(Math.random() * prompt.length)]
    if(newPrompt === prompt)
      return getSurprisePrompt(prompt) 
    else
      return newPrompt
}


export {surpriseMePrompts,Loader,Card,RenderCards,getSurprisePrompt}