import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import "./index.css";

const Navbar = ({ setEndpointValue, cartProduct, setCartOpen }) => {
  const [inputValue, setInputValue] = useState("");

  const localStorageCartProductList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartProductList"));
  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const openCartBtn = () => setCartOpen((prev) => !prev);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setEndpointValue(() => `/category/${inputValue}`);
  };

  return (
    <div className="Navbar">
      <h1 className="navName">KALIBABA</h1>

      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
        <button className="submitBtn" type="submit">
          Cerca
        </button>
      </form>

      <div>
        <BsCart2 className="cartIconMenu" onClick={openCartBtn} />
        <div className="productCartNum">
          {localStorageCartProductList
            ? localStorageCartProductList.length
            : cartProduct.length}
        </div>
      </div>
      {/* {cartOpen && (
        <CartList cartProduct={cartProduct} setCartProduct={setCartProduct} />
      )}
      <ModalCart cartProduct={cartProduct} /> */}
    </div>
  );
};

export default Navbar;
