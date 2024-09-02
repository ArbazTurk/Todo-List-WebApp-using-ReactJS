import "./App.css";
import React, { useState } from "react";

function App() {
  let [toDoList, setToDoList] = useState([]);

  let saveToDoList = (event) => {
    event.preventDefault();
    let toDoName = event.target.toDoName.value;

    if (!toDoList.includes(toDoName) && toDoName !== "") {
      setToDoList([...toDoList, toDoName]);
      event.target.toDoName.value = "";
    } else {
      alert("ToDo Already Exist!");
    }
  };

  let list = toDoList.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        index={index}
        toDoList={toDoList}
        setToDoList={setToDoList}
        key={value}
      />
    );
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toDoName" /> <button>Save</button>
      </form>

      <div className="to-do-list">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, index, toDoList, setToDoList }) {
  let [completeStatus, setCompleteStatus] = useState(false);
  let deleteItem = (event) => {
    event.stopPropagation();
    setCompleteStatus(false);
    setToDoList(toDoList.filter((v, i) => i !== index));
  };

  return (
    <li
      className={completeStatus ? "completed-todo" : ""}
      onClick={() => setCompleteStatus(!completeStatus)}
    >
      {value} <span onClick={deleteItem}>&times;</span>
    </li>
  );
}
