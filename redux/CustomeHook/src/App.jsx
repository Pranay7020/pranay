import { useState } from "react";
import { useLocalStorage } from "./Hook/useLocalStorage.js";

function App() {
  const [input, setInput] = useState("");
  const [names, setNames] = useLocalStorage("names", []);

  const addName = () => {
    if (input.trim() === "") return;
    setNames([...names, input]); // ✅ ADD TO ARRAY
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addName}>Add</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
