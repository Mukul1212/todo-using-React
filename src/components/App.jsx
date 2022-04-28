import React ,{useState} from "react";

function App() {


  const [inputText , setInputText] = useState("");
  const [items, setItem] = useState([]);


  function handleChange (event){
    const newValue = event.target.value;
    // console.log(newValue)
    setInputText(newValue);
}
function add(){
 setItem((preValue) =>{
   return [
     ...preValue, inputText
   ]
})
// setItem("")
}
return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={add}>
  <span>add</span>
</button>
      </div>
      <div>
        <ul>
          <li>Bye milk</li>
           {
           items.map((todoItem) => {
              return<li>{todoItem}</li>
             
            })
          } 
        </ul>
      </div>
    </div>
  );
}

export default App;
