import { useState } from "react";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import CardList from "./components/cardList";
import Navbar from "./components/navbar";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CartList from "./components/cartList";
import "./App.css";

function App() {
  const [endpointValue, setEndpointValue] = useState("");
  const [cartProduct, setCartProduct] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalQty, setTotalQty] = useState(1);

  return (
    <div className="App">
      <Navbar
        setCartOpen={setCartOpen}
        setEndpointValue={setEndpointValue}
        cartProduct={cartProduct}
      />
      <Hero />
      <MiniCardList endpointValue={endpointValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        idTarget="technologySection"
        setCartProduct={setCartProduct}
        cartProduct={cartProduct}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        idTarget="selfCareSection"
        setCartProduct={setCartProduct}
        cartProduct={cartProduct}
      />
      <CardList
        title="Household Products"
        endpoint="/products?limit=10&skip=25"
        idTarget="householdSection"
        setCartProduct={setCartProduct}
        cartProduct={cartProduct}
      />
      <CardList
        title="Women"
        endpoint="/products?limit=15&skip=35"
        idTarget="womenSection"
        setCartProduct={setCartProduct}
        cartProduct={cartProduct}
      />
      <CardList
        title="Men"
        endpoint="/products?limit=10&skip=50"
        idTarget="menSection"
        setCartProduct={setCartProduct}
        cartProduct={cartProduct}
      />
      {cartOpen && (
        <CartList
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
          setTotalQty={setTotalQty}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
