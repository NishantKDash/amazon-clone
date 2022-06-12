import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import { Fragment, useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L91APSHx0uTKzhOQCxM1ipaTEqUPmAgK6H5b3u4sn2bH8HKgEBEkpi8yIWSGDNTem7k2QjlwdunklpNpgXxub2c00m3SrH3M5"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        //the user just logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //the user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
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

          <Route
            path="/payment"
            element={
              <Fragment>
                <Header></Header>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Fragment>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
