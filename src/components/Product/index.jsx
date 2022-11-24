import ProductButton from "./ProductButton";
import "./product.css";
import { ProductLowerContainer } from "./ProductLowerContainer";

export default function Product({ product, notInStock, handleAddToCart }) {
  return (
    <>
      <div className="product-container">
        <img
          src={product.img}
          alt="pickles"
          style={{ height: "50px", width: "fit-content" }}
        />
        <p>type: {product.type}</p>
        <p>
          <b>{product.name}</b>
        </p>
        <p>amountLeft: {product.amountLeft}</p>

        <ProductLowerContainer product={product}>
          {product.type === "veg" && <p>it's healthy!</p>}
          <ProductButton
            product={product}
            type={product.type}
            handleAddToCart={handleAddToCart}
          />
        </ProductLowerContainer>
      </div>
      {notInStock}
    </>
  );
}
