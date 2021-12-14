import { useState } from "react";
import TodoItems from './Components/TodoItems';
import Inputarea from './Components/Inputarea'


function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
setItems( prevItems => [...prevItems, inputText]);
  }

function handleClick2Delete(id){
  setItems( prevItems =>
    prevItems.filter( (item, index) => index !== id)
  );
}

//items.splice(evt.target.id, 1);
//setItems([...items]);

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Inputarea  addItem={addItem}/>
      <div>
        <ul>
          {items.map( (todoItem, index) => <TodoItems key={index} id={index} handleClick2Delete={handleClick2Delete} item={todoItem}/> )}
        </ul>
      </div>

    </div>
  );
}

export default App;
