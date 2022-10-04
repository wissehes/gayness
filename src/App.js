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

  const getRandomSlay = () => Math.round(Math.random() * 10) + 5;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="maintext">
          Did <span className="thick">you</span>{" "}
          <p className="slay" onClick={yassify}>
            slay
          </p>
          today?
        </h1>
        <div className="slayclass">
          {/* <button onClick={countup}>slay.</button> */}

          <button className="slaybutton" onClick={slayclick}>
            SLAY
          </button>

          <p>
            You've got <span className="slaycount">{slay} Slay</span> points!
          </p>
          <p
            className={yassified ? "yassified yassifiedvisisble" : "yassified"}
          >
            YOU YASSIFIED! +{yassification} slays.
          </p>
        </div>
      </header>

      <div className="slaytext">
        <p>Hit the Slay button!🌈</p>
      </div>
    </div>
  );
}

export default App;
