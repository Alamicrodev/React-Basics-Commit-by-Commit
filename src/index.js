import React from "react";
import ReactDom from "react-dom";

function Greetings() {
   return (
     <div>
           <Name/> 
           <Message/> 
     </div>
   )
};


const Name = () => {
  return <h2> John Doe </h2>;
}

const Message = () => {
  return <p> This is my message </p>;
}


ReactDom.render(<Greetings/>,document.getElementById("root"))

