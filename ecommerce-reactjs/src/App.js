import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/UI/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Pages/Home";
import Test from "./components/Test";
import Profile from "./components/Pages/Profile";
import Cart from "./components/Pages/Cart/Cart";

import { CartContextProvider } from "./context/CartContext";

// Context
import { useAuthValue } from "./context/AuthContext";

// Firestore
// import db from "./config/db";

function App() {
  const { isLogin } = useAuthValue();
  return (
    <CartContextProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {!isLogin ? <Redirect to="/auth" /> : <Home />}
          </Route>
          <Route path="/profile" exact>
            {!isLogin ? <Redirect to="/auth" /> : <Profile />}
          </Route>
          <Route path="/cart" exact>
            {!isLogin ? <Redirect to="/auth" /> : <Cart />}
          </Route>
          <Route path="/auth" exact>
            {isLogin ? <Redirect to="/" /> : <Auth />}
          </Route>

          <Route path="/test" component={Test}></Route>
        </Switch>
      </div>
    </CartContextProvider>
  );
}

export default App;
