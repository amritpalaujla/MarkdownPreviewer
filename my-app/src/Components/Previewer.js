import Editor from "./Editor";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import DOMPurify from "dompurify";

function previewer(props) {
  return (
    <div id="headerWhole">
      <div className="header">
        <b>Previewer</b>
      </div>
      <div
        id="previewer"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(props.input)),
        }}
      ></div>
    </div>
  );
}

export default previewer;
