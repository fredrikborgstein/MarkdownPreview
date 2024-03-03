import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { marked } from "https://esm.sh/marked";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import sanitizeHtml from "sanitize-html-react";
marked.use({ breaks: true, gfm: true, pedantic: false });

function App() {
  const [markdown, setMarkdown] = useState(
    "# heading\n ## subheading \n ### sub-subheading \n\n **bold** \n\n *italic* \n\n `code` \n\n ```\n code block\n ``` \n\n [link](https://www.freecodecamp.org) \n\n > blockquote \n\n - list item \n\n 1. numbered list item \n\n ![alt text](https://www.markdown-here.com/img/icon256.png) \n\n `npm install marked` \n\n ```javascript \n const marked = require('marked'); \n console.log(marked('I am using markdown.')); \n ``` \n\n"
  );

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <Container>
      <heading className="container text-center">
        <h1>Markdown Editor & Previewer</h1>
      </heading>
      <Row>
        <Col>
          <div className="container" id="editor-section">
            <h2 className="editor-title">Editor</h2>
            <textarea
              id="editor"
              value={markdown}
              onChange={handleChange}
              type="text"
              rows={30}
              cols={50}
            />
          </div>
        </Col>
        <Col>
          <div className="container" id="preview-section">
            <h2 className="previewer-title">Previewer</h2>
            <div id="inner-preview-section">
              <div
                id="preview"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(marked(markdown), {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                      "img",
                      "#",
                      "blockquote",
                      "code",
                      "pre",
                      "h1",
                      "h2",
                      "h3",
                    ]),
                  }),
                }}
              ></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
