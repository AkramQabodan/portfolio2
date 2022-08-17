import { useEffect, useRef, useState } from "react";
import CodeSnippet from "../../../common/codeSnippet";
import styles from "./index.module.scss";

const CodeSnippetContainer = () => {
  const containerRef = useRef();
  const [finished, setFinished] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const codeArr = [
    <code>
      {`function Example() {

  `}
      <br />
      {`const [count, setCount] = useState(0);`}
      <br />
      {`
  return (
      <div>
  `}
      <br />
      {`<p>You clicked {count} times</p>`}
      <br />
      {`
      <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      `}
      <br />
      {`</div>
  );
  `}
      <br />
      {`}
  `}
    </code>,
    <pre>
      {`<html>
    <head>
       <title>Title of the document</title>
    </head>
    <body>
       <p>Ordinary text.</p>
       <code>Line of program code.</code>
       <p>Continuation of the ordinary text.</p>
    </body>
</html>`}
    </pre>,
    <pre>
      {`let counts=setInterval(updated);
let upto=1000;
function updated(){
      var count= document.getElementById("counter");
      count.innerHTML=--upto;
      if(upto === 0) {
          clearInterval(counts);
      }
}`}
    </pre>,
    <pre>
      {`<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route path="messages" element={<DashboardMessages />}/>
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>`}
    </pre>,
    <pre>
      {`return (
    <section ref={containerRef} className={styles.container}>
      {codeArr.map((item, index) => {
        return <CodeSnippet key={index} code={codeArr[index]} />;
      })}
    </section>
  );`}
    </pre>,
    <pre>
      {`.container {
  width: 560px;
  min-height: 182px;
  border: 1px solid $lines;
  margin-top: 9px;
  margin-bottom: 9px;
  border-radius: 12px;
  padding: 20px;
  background-color: $body-color;
}
 `}
    </pre>,
  ];
  useEffect(() => {
    const Interval = setInterval(() => {
      if (containerRef.current.scrollTop === 0 && finished) {
        setFinished(false);
      }
      if (containerRef.current.scrollTop === 462 && !finished) {
        setFinished(true);
      }
      if (finished && !isHovered) {
        containerRef.current.scrollTop--;
      }
      if (!finished && !isHovered) {
        containerRef.current.scrollTop++;
      }
    }, 50);
    return () => {
      clearTimeout(Interval);
    };
  }, [finished, containerRef, isHovered]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
      className={styles.container}
    >
      {codeArr.map((item, index) => {
        return <CodeSnippet key={index} code={codeArr[index]} />;
      })}
    </section>
  );
};
export default CodeSnippetContainer;
