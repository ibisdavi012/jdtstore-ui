import { useLocation } from "react-router-dom";
import AddProductActions from "../features/add-product/AddProductActions";
import SaveProductActions from "../features/add-product/SaveProductActions";

import "./page-actions.scss";

export default function PageActions() {
  const location = useLocation();
  return (
    <div className="page-actions">
      {location.pathname === "/" && <AddProductActions />}
      {location.pathname === "/add-product" && <SaveProductActions />}
    </div>
  );
}
