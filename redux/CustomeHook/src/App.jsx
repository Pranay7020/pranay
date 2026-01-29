import { useState } from "react";
import { useToggle } from "./Hook/useToggle";

function App() {
  const [string, setString] = useState("");
  const [toggle, setToggle] = useToggle(false);

  return (
    <>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setString(e.target.value)}
      />

      <p>{string}</p>   {/* 👈 now string is USED */}

      {toggle && <h1>I am invoked</h1>}
       

      <button onClick={() => setToggle(false)}>OFF</button>
      <button onClick={() => setToggle(true)}>ON</button>
      <button onClick={() => setToggle()}>TOGGLE</button>
    </>
  );
}

export default App;
