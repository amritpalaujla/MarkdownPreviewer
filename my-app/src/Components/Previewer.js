import Editor from "./Editor";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

function previewer(props) {
  document.getElementById("previewer").innerHTML = marked.parse(props.input);
  return <div id="previewer"></div>;
}

export default previewer;
