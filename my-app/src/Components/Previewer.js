import Editor from "./Editor";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

function previewer(props) {
  return (
    <div
      id="previewer"
      dangerouslySetInnerHTML={{ __html: marked.parse(props.input) }}
    ></div>
  );
}

export default previewer;
