// App.js
import { useState } from "react";

import "./App.css";

import Counter from "./components/Counter";
import Timer from "./components/Timer";
import TimerTwo from "./components/TimerTwo";
import TimerThree from "./components/TimerThree";
import TimerFour from "./components/TimerFour";
import IronbnbList from "./components/Ironbnb";

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {/* {show && <Counter />} */}

      {/* {show && <Timer />}  */}

      {/* {show && <TimerTwo />}  */}

      {/* {show && <TimerThree />}  */}

      {/* {show && <TimerFour />}  */}

      <IronbnbList />

    </div>
  );
}

export default App;
