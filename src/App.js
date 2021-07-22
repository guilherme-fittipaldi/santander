import Slide from "./Slide";
import Header from "./Header.js";
import React from "react";

function App() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="App">
      <Header index={index} />
      <Slide index={index} setIndex={setIndex} />
      <input
        type="button"
        onClick={() => {
          if (index !== 0) {
            setIndex(index - 1);
          }
        }}
        value="Previous"
      />
      <input
        style={{ float: "right" }}
        type="button"
        onClick={() => setIndex(index + 1)}
        value="Next"
      />
    </div>
  );
}

export default App;
