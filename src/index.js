import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';


// Setup vars
const book1  = {
     title: "Atlas of the Heart",
     author: "Amelia Hepworth",
     img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL200_SR200,200_.jpg"
} 

const book2  = {
     title: "My Little Golden Book about Betty White",
     author: "Deborah Hopkinson",
     img: "https://images-na.ssl-images-amazon.com/images/I/81gtzoeueoS._AC_UL200_SR200,200_.jpg"
} 


// Creating a vbase component, that will be rendered in the root grid
function Booklist() {
  return (
    <section className="booklist">
      {/* Notice how i am passing some attributes while calling these components */}
      <Book title={book1.title} author={book1.author} img={book1.img}/>
      {/* Notice how this second book component also has a child element? <p> tag */}
      <Book title={book2.title} author={book2.author} img={book2.img}>
        <p> This book is trash </p>
      </Book>
    </section>
  )
}

// Creating a book component with an image, name and author name jsx elements. 
// using javscript variables in there. 
const Book = (props) =>  {
// The props variable being passed in is a JS object with all the attributes that were passed in
  return (
   <article className="book"> 
      <img src={ props.img }/>
      <h1>{ props.title }</h1>
      <h4>{ props.author.toUpperCase() }</h4>
      {/* If the component had children where it was called they will show here now*/}
      {props.children}
   </article>
)
}

// Rendering the base component to the root grid in index.html
ReactDom.render(<Booklist/>, document.getElementById("root"))

