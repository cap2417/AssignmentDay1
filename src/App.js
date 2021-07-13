import React from "react"
import "./style.css"
import Button from "./Button"

function Myapp(){
   return(
       <div>
   <h1 style={{textAlign:"center"}}>Hello World!</h1> 
   <h3 style={{textAlign:"center"}}>Hello React</h3>
   <Button buttontext="React"/>
   <Button buttontext="React js"/>
   <Button buttontext="React native"/>
   
   </div>
   )
}

export default Myapp