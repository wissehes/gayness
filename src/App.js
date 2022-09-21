import "./App.css";
import { useState } from "react";
import useUmami from "@parcellab/react-use-umami";

function App() {
  const [slay, setSlay] = useState(0);
  const [yassified, setYassified] = useState(false);
  const [yassification, setYassication] = useState(0);

  const umami = useUmami("/");

  const slayclick = () => {
    setSlay(slay + 1);
    umami("Slay Button", "click");
  };
  const yassify = () => {
    const slAy = getRandomSlay();

    setSlay(slay + slAy);
    setYassication(slAy);
    setYassified(true);

    umami("Yassify Button", "click");
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

          <button class="slaybutton" onClick={slayclick}>
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
