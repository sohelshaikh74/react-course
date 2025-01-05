import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.table(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  console.log("Prodcuts", products);
  console.table(products);

  useEffect(() => {
    productsData();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 6 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      <h1>Prodcuts</h1>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 6 - 6, page * 6).map((prod) => {
            return (
              <span key={prod.id} className="products__single">
                <h3>{prod.title}</h3>
                <img
                  src={prod.thumbnail}
                  alt={prod.tilte}
                  style={{ width: 220 }}
                />
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disable"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(products.length / 6)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                key={i}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page === products.length / 6 ? "pagination__disable" : ""
            }
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
