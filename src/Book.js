const Book = (props) =>  {
  // Javascript function to deal with a click event
  const clickfunc = () => {
    alert("you just clicked the button of a book called " + props.title)
  }
  // 
  function mouseoverfunc(somestring) {
    alert(somestring)
  } 

  return (
   <article className="book"> 
      <img src={ props.img }/>
      <h1>{ props.title }</h1>
      <h4>{ props.author.toUpperCase() }</h4>
      {/* If the component had children where it was called they will show here now*/}
      {props.children}
      <button onClick={clickfunc} > Click Me </button>
      {/* Note while giving it the function we are not adding () otherwise it will execute the function just when the page is loaded, because it expects a function not a value as an input*/}
      <button  onClick={() => { const n = prompt("what is your name?");
       alert("your name is " + n ) 
       }} >Example 2 button </button>
       {/* In the example 2, I am trying to show an inline function so that you know it is possible */}
       <h2 onMouseOver={() => mouseoverfunc("send this message") } >Example 3</h2> 
       {/* Third example is to show that you have different possible trgger events and also a condition where you want to pass an argument/attribute for the function, we can execute that function in another inline function that takes no arguments. */}
   </article>
)
}

export default Book;