import "./index.css";
import { shortProductDetail } from "../../utils/func";

const ModalCart = ({ cartData, setCartProduct, setTotalQty }) => {
  const qtyItemSum = () => {
    setCartProduct((prev) => [
      ...prev.filter((prev) => prev.id !== cartData.id),
      {
        id: cartData.id,
        title: cartData.title,
        description: cartData.description,
        price: cartData.price,
        thumbnail: cartData.thumbnail,
        qty: cartData.qty + 1,
      },
    ]);
    setTotalQty(cartData.qty);
  };

  const qtyItemSubtraction = () => {
    setCartProduct((prev) => [
      ...prev.filter((prev) => prev.id !== cartData.id),
      {
        id: cartData.id,
        title: cartData.title,
        description: cartData.description,
        price: cartData.price,
        thumbnail: cartData.thumbnail,
        qty: cartData.qty - 1,
      },
    ]);
    if (cartData.qty == 1) {
      setCartProduct((prev) => [
        ...prev.filter((prev) => prev.id !== cartData.id),
      ]);
    }
  };
  return (
    <div className="ModalCart">
      <div className="productCartImg">
        <img src={cartData.thumbnail} alt={cartData.title} />
      </div>

      <div className="productCartInfo">
        <h4>{shortProductDetail(cartData.title, 9)}</h4>
        <p>$ {cartData.price}</p>
      </div>
      <div className="qtySection">
        <button className="lessBtn" onClick={qtyItemSubtraction}>
          -
        </button>
        <p>{cartData.qty}</p>
        <button className="plusBtn" onClick={qtyItemSum}>
          +
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
