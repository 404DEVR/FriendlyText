import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [dark, setDark] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setDark("success");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setDark("primary");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enaabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textform
                heading="Enter your text"
                showAlert={showAlert}
                mode={mode}
                dark={dark}
              />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
