import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/UI/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Pages/Home";
import Test from "./components/Test";

// Context
import { useAuthValue } from "./context/AuthContext";

// Firestore
// import db from "./config/db";

function App() {
  const { isLogin } = useAuthValue();
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {!isLogin ? <Redirect to="/auth" /> : <Home />}
        </Route>
        <Route path="/auth" exact>
          {isLogin ? <Redirect to="/" /> : <Auth />}
        </Route>
        <Route path="/test" component={Test}></Route>
      </Switch>
    </div>
  );
}

export default App;
