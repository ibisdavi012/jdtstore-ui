import { useSelector } from "react-redux";
import NoProducts from "./NoProducts";
import Product from "./Product";
import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";
import Loader from "../../common/Loader";

import "./product-grid.scss";
import "./product-details.scss";

export default function ProductGrid({ loading, products }) {
  if (loading) {
    return <Loader />;
  }

  if (!products || products.length === 0) {
    return <NoProducts />;
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => {
        switch (product.type) {
          case "dvd":
            return <Dvd key={index} product={product} />;
          case "book":
            return <Book key={index} product={product} />;
          case "furniture":
            return <Furniture key={index} product={product} />;
          default:
            return <Product key={index} product={product} />;
        }
      })}
    </div>
  );
}
