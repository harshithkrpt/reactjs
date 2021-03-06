import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/UI/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Pages/Home";
import Test from "./components/Test";
import Profile from "./components/Pages/Profile";
import Cart from "./components/Pages/Cart/Cart";
import WishList from "./components/Pages/WishList/WishList";
import Product from "./components/Pages/Product/Product";

import { CartContextProvider } from "./context/CartContext";
import { WishListContextProvider } from "./context/WishListContext";
import { ProductContextProvider } from "./context/ProductContext";
// Context
import { useAuthValue } from "./context/AuthContext";

function App() {
  const { isLogin } = useAuthValue();
  return (
    <WishListContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/auth" exact>
                {isLogin ? <Redirect to="/" /> : <Auth />}
              </Route>
              <Route path="/" exact>
                {!isLogin ? <Redirect to="/auth" /> : <Home />}
              </Route>
              <Route path="/product/:id" exact>
                {!isLogin ? <Redirect to="/auth" /> : <Product />}
              </Route>
              <Route path="/profile" exact>
                {!isLogin ? <Redirect to="/auth" /> : <Profile />}
              </Route>
              <Route path="/cart" exact>
                {!isLogin ? <Redirect to="/auth" /> : <Cart />}
              </Route>
              <Route path="/wishlist" exact>
                {!isLogin ? <Redirect to="/auth" /> : <WishList />}
              </Route>

              <Route path="/test" component={Test}></Route>
            </Switch>
          </div>
        </ProductContextProvider>
      </CartContextProvider>
    </WishListContextProvider>
  );
}

export default App;
