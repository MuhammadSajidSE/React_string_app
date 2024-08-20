import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import Inputform from "./component/Inputform";
import About from "./component/About";
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";

function App() {
  const [appmod, setappmod] = useState({ "backgroundColor": "skyblue" });
  const [modtext, setmodtext] = useState("Enable dark mod");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({ mes: message, typ: type });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const chnagemod = () => {
    if (appmod.backgroundColor === "skyblue") {
      showalert("Dark mod enable", "alert-success");
      setmodtext("Enable light mod");
      setappmod({ backgroundColor: "rgb(0, 136, 255)" });
      document.body.style.backgroundColor = 'rgb(187, 187, 187)';
    } else {
      setappmod({ backgroundColor: "skyblue" });
      setmodtext("Enable dark mod");
      document.body.style.backgroundColor = 'white';
      showalert("Light mod enable", "alert-primary");
    }
  };

  return (
    <Router>
      <Navbar title="TextPlaying" abouttext="About" hometext="Home" apmod={appmod} tooglemod={chnagemod} modtxt={modtext} />
      <Alert alerttext={alert}></Alert>
      <Routes>
        <Route exact path="/" element={<Inputform heading="Try PlayWithText" modtxt={modtext} altershow={showalert} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
