
import { useState } from "react";

function Inputarea({addItem}){

const [inputText, setInputText] = useState("");

const handleChange = evt => setInputText(evt.target.value);

return (
  <div className="form">

  <input onChange={handleChange} type="text" value={inputText} />

  <button onClick={ _ => {addItem(inputText); setInputText('');}}>
   <span>Add</span>
   </button>

  </div>
);

}


export default Inputarea;
