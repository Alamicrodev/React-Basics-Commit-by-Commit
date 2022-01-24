import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

function Booklist() {
  return (
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = () =>  {
return (
   <article className="book"> 
     <Img></Img>
      <Title/>
      <Author/>
   </article>
)
}

const Img = () => { return (
  <img src="https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL200_SR200,200_.jpg" />
)};


const Title = () => { return ( <h1>Atlas Of The Heart</h1> ) };

const Author = () => { return ( <h4 style={{color:'#3333', fontSize: '0.75rem', marginTop: "0.25rem"}} > This is an Author </h4> ) };

const Description = () => { return ( <p> lorem20 </p> ) };


ReactDom.render(<Booklist/>, document.getElementById("root"))

