import React, {useState} from "react";
import ToDo from "./ToDo";
import InputArea from "./InputArea";
function App() {

    const [items, setItems] = useState([]);

    function addItems(inputText){
        setItems(prevValue => {
            return [...prevValue, inputText];
        })
    }

    function deleteItem(id){
      setItems(prevValue =>{
        return prevValue.filter((item, idx) => {
          return idx !== id;
        });
      })
    }
 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd= {addItems}/>
      <div>
        <ul>
          {items.map((todo, index) => (
            <ToDo
            value ={todo}
            key = {index}
            id = {index}
            onChecked = {deleteItem}
            />
          )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;