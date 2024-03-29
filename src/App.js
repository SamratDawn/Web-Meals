import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setSCartIsShown] = useState(false);
  const showCartHandler = () => {
    setSCartIsShown(true);
  };
  const hideCardHandler = () => {
    setSCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
