import { useState } from "react";
import Product from "../Product";
import { products } from "../../data/products";
import ProductButton from "../Product/ProductButton";

const notInStock = (
  <div>
    <p>not in stock!</p>
    <ProductButton>remove from cart</ProductButton>
  </div>
);

export default function Showcase() {
  const [totalPrice, setTotalPrice] = useState(1);

  const handleAddToCart = (product) => {
    setTotalPrice(totalPrice + product.price * product.amountLeft);
  };

  if (!products || products.length === 0) return <div>not items found :(</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
        margin: "1rem",
      }}
    >
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          notInStock={product.notInStock ? notInStock : ""}
          handleAddToCart={handleAddToCart}
        />
      ))}

      {totalPrice}
    </div>
  );
}
