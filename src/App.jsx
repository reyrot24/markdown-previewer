import { useState } from "react";
import { marked } from "marked";
import "./style.css";

function App() {
  const [text, setText] = useState(`
  # H1 
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First Item
  - Second Item
  - Third Item

  > blockquote

  ![alt text](image.org)

  **bold text**
  `);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        value={text}
        className="textarea"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
