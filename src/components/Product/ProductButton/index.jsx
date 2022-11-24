export default function ProductButton({ type, handleAddToCart, product }) {
  return (
    <button
      style={{
        height: "30px",
        backgroundColor: type === "veg" ? "green" : "purple",
      }}
      onClick={() => handleAddToCart(product)}
    >
      Add to Cart
    </button>
  );
}
