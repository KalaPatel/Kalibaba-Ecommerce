const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();

  return data;
};

// {
// "id": 1,
// "title": "iPhone 9",
// "description": "An apple mobile which is nothing like apple",
// "price": 549,
// "discountPercentage": 12.96,
// "rating": 4.69,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",
// "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// "images": [
// "https://i.dummyjson.com/data/products/1/1.jpg",
// "https://i.dummyjson.com/data/products/1/2.jpg",
// "https://i.dummyjson.com/data/products/1/3.jpg",
// "https://i.dummyjson.com/data/products/1/4.jpg",
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// ]
// },
