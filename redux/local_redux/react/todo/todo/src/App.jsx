import React, { useState } from "react";

function Todos() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {

    const newList = list.filter((_, index) => index !== indexToDelete);
    setList(newList);
  }



  return (
    <div style={{ padding: "20px"
    ,color: "blue"
    , hover: { color: "red" } }}>
      <h2>pranay Todo App (Basic)</h2>

      <input
        type="text"
        value={task}
        placeholder="pranay Enter your task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={add}>add karu</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>hatadu kya</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;