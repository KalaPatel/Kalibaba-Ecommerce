import { useState } from "react";
import "./index.css";

const MiniCard = ({ productData, imgSrc, imgAlt }) => {
  const [hrefPath, setHrefPath] = useState("");

  const onHandleClick = () => {
    if (
      productData.category === "smartphones" ||
      productData.category === "laptops"
    ) {
      return setHrefPath("#technologySection");
    } else if (
      productData.category === "fragrances" ||
      productData.category === "skincare"
    ) {
      return setHrefPath("#selfCareSection");
    } else if (
      productData.category === "home-decoration" ||
      productData.category === "furniture"
    ) {
      return setHrefPath("#householdSection");
    } else if (
      productData.category === "tops" ||
      productData.category === "womens-dresses" ||
      productData.category === "womens-shoes"
    ) {
      return setHrefPath("#womenSection");
    } else if (
      productData.category === "mens-shirts" ||
      productData.category === "mens-shoes"
    ) {
      return setHrefPath("#menSection");
    }
  };
  return (
    <a href={hrefPath}>
      <img
        onClick={onHandleClick}
        className="MiniCard"
        src={imgSrc}
        alt={imgAlt}
      />
    </a>
  );
};

export default MiniCard;
