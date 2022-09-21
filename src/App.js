import "./App.css";
import { useState } from "react";

function App() {
  const [slay, setSlay] = useState(0);
  const [yassified, setYassified] = useState(false);
  const [yassification, setYassication] = useState(0);

  const countup = () => setSlay(slay + 1);
  const yassify = () => {
    const slAy = getRandomSlay();

    setSlay(slay + slAy);
    setYassication(slAy);
    setYassified(true);
  };

  const getRandomSlay = () => Math.round(Math.random() * 10);

  return (
    <div className="App">
      <header className="App-header">
        <h1 class="maintext">
          Did <span class="thick">you</span>{" "}
          <p class="slay" onClick={yassify}>
            slay
          </p>
          today?
        </h1>
        <div class="slayclass">
          {/* <button onClick={countup}>slay.</button> */}

          <button class="slaybutton" onClick={countup}>
            SLAY
          </button>

          <p>
            You slayed <span class="slaycount">{slay}</span> times.
          </p>
          {yassified && (
            <p class="yassified">YOU YASSIFIED! +{yassification} slays.</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
