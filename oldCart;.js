const onAddCartBtn = () => {
  setCartProduct((prev) => {
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
    } else if (!!prev.find((x) => x.id === productData.id)) {
      return [
        ...(prev.filter((prev) => prev.id !== productData.id) &&
          productData.qty > 2),
        {
          id: productData.id,
          title: productData.title,
          description: productData.description,
          price: productData.price,
          thumbnail: productData.thumbnail,
          qty: totalQty + 1,
          console: console.log(prev),
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
