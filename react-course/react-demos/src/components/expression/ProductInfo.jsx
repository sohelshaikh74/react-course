function ProductInfo() {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };
  return (
    <div>
      <h1> ProductInfo</h1>
      <p>Name:{product.name}</p>
      <p>Price:{product.price}</p>
      <p>Availability:{product.availability}</p>
    </div>
  );
}

export default ProductInfo;
