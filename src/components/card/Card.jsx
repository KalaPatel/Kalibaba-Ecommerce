import { shortProductDetail } from "../../utils/func";
import { BsCart2 } from "react-icons/bs";
import "./index.css";
import { useState } from "react";

const Card = ({ productData, setCartProduct, cartProduct }) => {
  const [productQty, setProductQty] = useState(1);

  const onAddCartBtn = () => {
    setCartProduct((prev) => {
      console.log(prev);
      if (!!prev.find((x) => x.id === productData.id)) {
        setProductQty(() => productQty + 1);
        return [
          ...prev.filter((prev) => prev.id !== productData.id),
          {
            id: productData.id,
            title: productData.title,
            description: productData.description,
            price: productData.price,
            thumbnail: productData.thumbnail,
            qty: productQty,
          },
        ];
      } else {
        return [
          ...prev,
          {
            id: productData.id,
            title: productData.title,
            description: productData.description,
            price: productData.price,
            thumbnail: productData.thumbnail,
            qty: 1,
          },
        ];
      }
    });

    const localStorageCartProduct = JSON.parse(
      localStorage.getItem("cartProductList") || "[]"
    );

    localStorage.setItem(
      "cartProductList",
      JSON.stringify([...localStorageCartProduct, ...cartProduct])
    );
  };

  return (
    <div className="Card">
      <div className="cardImg_wrapper">
        <img
          className="card_image"
          src={productData.thumbnail}
          alt={productData.title}
        />
      </div>
      <p
        style={{
          backgroundColor: `rgba(${
            9 * Math.round(productData.discountPercentage)
          }, 204, 104)`,
        }}
        className="rating"
      >
        - {Math.round(`${productData.rating}`)}%
      </p>
      <p className="card_price">$ {productData.price}</p>
      <div className="cardText_wrapper">
        <h3 className="card_title">
          {shortProductDetail(productData.title, 10)}
        </h3>
        <p className="card_desc">
          {shortProductDetail(productData.description, 20)}
        </p>
        <div className="rating_wrapper">
          <code>⭐ {productData.rating}</code>
          <BsCart2 className="cart_Icon" onClick={onAddCartBtn} />
        </div>
      </div>
    </div>
  );
};

export default Card;
