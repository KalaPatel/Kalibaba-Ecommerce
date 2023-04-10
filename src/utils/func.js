export const shortProductDetail = (str, num) => str.slice(0, num) + " [...]";

export const idCategoryValue = (category, Catpath) => {
  if (category === "smartphones" || category === "laptops") {
    return Catpath("#technologySection");
  } else if (category === "fragrances" || category === "skincare") {
    return Catpath("#selfCareSection");
  }
};
