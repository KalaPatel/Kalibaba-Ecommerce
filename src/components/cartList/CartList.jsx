import "./index.css";
import ModalCart from "../modalCart";

const CartList = ({ cartProduct, setCartProduct, setTotalQty }) => {
  return (
    <div className="CartList">
      {cartProduct.map((element) => (
        <ModalCart
          cartData={element}
          key={element.id}
          setCartProduct={setCartProduct}
          setTotalQty={setTotalQty}
        />
      ))}
    </div>
  );
};

export default CartList;
