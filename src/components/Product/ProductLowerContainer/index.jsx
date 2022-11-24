export const ProductLowerContainer = ({ product, children }) => {
  return (
    <div className="lower-container">
      <p>price: {product.price}</p>
      {children}
    </div>
  );
};
