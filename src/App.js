import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";  // Updated

function App() {
  const [mode, setMode] = useState("light");
  const [gmode, setGmode] = useState("light");
  const [bmode, setBmode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled ", "success");
    }
  };
  const toggleGmode = () => {
    if (gmode === "light") {
      setGmode("dark");
      document.body.style.backgroundColor = "lightgreen";
      showAlert("Green mode is enabled ", "success");
    } else {
      setGmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled ", "success");
    }
  };
  const toggleBmode = () => {
    if (bmode === "light") {
      setBmode("dark");
      document.body.style.backgroundColor = "lightblue";
      showAlert("Blue mode is enabled ", "success");
    } else {
      setBmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled ", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="home"
          about="about"
          mode={mode}
          toggleMode={toggleMode}
          gmode={gmode}
          toggleGmode={toggleGmode}
          bmode={bmode}
          toggleBmode={toggleBmode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Updated */}
            <Route exact path="/about" element={<About />} /> {/* Updated */}
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter your Text to Analyze"
                mode={mode}
                gmode={gmode}
                bmode={bmode}
              />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
