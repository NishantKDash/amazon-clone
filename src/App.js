import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/"
            element={
              <Fragment>
                <Header></Header>
                <Home />
              </Fragment>
            }
          ></Route>

          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header></Header>
                <Checkout />
              </Fragment>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
