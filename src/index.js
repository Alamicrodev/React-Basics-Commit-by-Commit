import React from "react";
import ReactDom from "react-dom";
// CSS
import './index.css';
// modules 
import { allbooks  } from "./books.js";
import Book from "./Book.js"

// Creating a base component, that will be rendered in the root grid
// creating a book list component
function Booklist(){
    return (                               
       <section className="booklist">
          { allbooks.map(
            (book) => { return <Book key={book.id} {...book} /> } 
                      ) 
          }            
       </section>
          )
 };  
 

// Rendering the base component to the root grid in index.html
ReactDom.render(<Booklist/>, document.getElementById("root"))

