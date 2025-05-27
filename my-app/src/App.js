import logo from "./logo.svg";
import "./App.css";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <Editor input={input} setInput={setInput} />
      <Previewer input={input} />
    </div>
  );
}

export default App;
