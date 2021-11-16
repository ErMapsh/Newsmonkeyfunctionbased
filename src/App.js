import React, {useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  //useState variable:
  const [mode, setmode] = useState("Light");
  const NewsMonkey ="NEWSMONKEY";
  const [alert, setalert] = useState(null);
  const [progress, setprogress] = useState(0);

  //for api
  const api = process.env.REACT_APP_NEWS_API;

  //for loader:
  // const state = {
  //   progress: 0,
  // };

  const setProgress = (no) => {
    setprogress(no);
  };

  //for first later uppercase
  const UP = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };

  const showAlert = async (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    // if we dont setup timeout for our warning , then is begin a bug.
    // we want to reslove this bug, then use this timeout
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = async () => {
    if (mode === "Light") {
      setmode("Dark");
      document.body.style.background = "black";
      document.body.style.color = "white";
      showAlert("Enable Dark Mode", "success");
    } else {
      setmode("Light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Enable Light Mode", "success");
    }
  };
  return (
    <div>
      <Router>
        <LoadingBar color="#3aeb34" progress={progress} height="3px" />
        <Navbar
          setProgress={setProgress}
          mode={mode}
          togglemode={togglemode}
          NewsMonkey={NewsMonkey}
        />
        <Alert mode={mode} alert={alert} UP={UP} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                api={api}
                a
                setProgress={setProgress}
                key="sports"
                mode={mode}
                pageSize={20}
                country="in"
                category="general"
                UP={UP}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="business"
                mode={mode}
                pageSize={20}
                country="in"
                category="business"
                UP={UP}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="entertainment"
                mode={mode}
                pageSize={20}
                country="in"
                category="entertainment"
                UP={UP}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="health"
                mode={mode}
                pageSize={20}
                country="in"
                category="health"
                UP={UP}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="science"
                mode={mode}
                pageSize={20}
                country="in"
                category="science"
                UP={UP}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="sports"
                mode={mode}
                pageSize={20}
                country="in"
                category="sports"
                UP={UP}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="technology"
                mode={mode}
                pageSize={20}
                country="in"
                category="technology"
                UP={UP}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
