import React, { useState } from "react";

function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
