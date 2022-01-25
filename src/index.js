import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';


// Setup vars
const allbooks = [ {
     id: 1,
     title: "Atlas of the Heart",
     author: "Amelia Hepworth",
     img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL200_SR200,200_.jpg"
}, 
 {   id: 2,
     title: "My Little Golden Book about Betty White",
     author: "Deborah Hopkinson",
     img: "https://images-na.ssl-images-amazon.com/images/I/81gtzoeueoS._AC_UL200_SR200,200_.jpg"
}, 
 {   id: 3, 
     title: "Harry Potter and the socerer's stone",
     author: "J.K Rowling",
     img: "https://m.media-amazon.com/images/I/81zhvrYl7yL._SX140_.jpg"
}, 
]

// Creating a base component, that will be rendered in the root grid
// creating a book list component
function Booklist(){
  //returns jsx
    return (                                
      // The jsx has section element being passed, remember it must only return one element but that element can have multiple nested elements
       <section className="booklist">
          {/* here we send a js variable called allbooks which is an array of various book objects  */}
          { allbooks.map(
            // .map function allows us to create a new array with a function applied on each element
            (book) => { return <Book key={book.id} {...book} /> }
            // the book is one individual js object, that such a function is working on
            // whatever the function returns replaces that elements position in the new array. 
            // we return the Book component with various attributes passed in {...book} is basically title={book.title} author= {book.author} img={book.img}
            // note: key is a unique attr of each element that if not given react gives an queit error in console. usually it is passed in the apis.     
                      ) 
          }            
       </section>
          )
 };  
 
const Book = (props) =>  {
  const clickfunc = () => {
  }
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

