import { Link } from "react-router-dom";

import "../sass/components/page-actions.scss";

export default function PageActions() {
  return (
    <div className="page-actions">
      <Link to="/add">
        <button id="add-product-btn">+ Add</button>
      </Link>
      <button id="delete-product-btn">R Mass Delete</button>
    </div>
  );
}
