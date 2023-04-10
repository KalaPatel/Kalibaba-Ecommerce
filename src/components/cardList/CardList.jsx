import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading";
import "./index.css";

const CardList = ({
  title,
  endpoint,
  idTarget,
  setCartProduct,
  cartProduct,
}) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList" id={idTarget}>
      <h2 className="sectionName">{title}</h2>
      <div className="CardList__list">
        {productsList.length ? (
          productsList.map((product) => (
            <Card
              productData={{ ...product, qty: 1 }}
              key={product.id}
              setCartProduct={setCartProduct}
              cartProduct={cartProduct}
            />
          ))
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
};

export default CardList;
