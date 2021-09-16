import { useLocation } from "react-router-dom";
import AddProductActions from "./AddProductActions";
import EditProductActions from "./EditProductActions";

import "../sass/components/page-actions.scss";

export default function PageActions() {
  const location = useLocation();
  return (
    <div className="page-actions">
      {location.pathname === "/" && <AddProductActions />}
      {location.pathname === "/add-product" && <EditProductActions />}
    </div>
  );
}
