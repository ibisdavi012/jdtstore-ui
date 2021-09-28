import NoProducts from "./NoProducts";
import Product from "./Product";
import Loader from "../../common/Loader";

import "./product-grid.scss";
import "./product-details.scss";

export default function ProductGrid({ loading, products, firstRender }) {
  if (loading) {
    return <Loader />;
  }

  if ((!products || products.length === 0) && !firstRender) {
    return <NoProducts />;
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

ProductGrid.defaultProps = { firstRender: false };
