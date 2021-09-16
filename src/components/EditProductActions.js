import { Link } from "react-router-dom";
import "../sass/components/page-actions.scss";

export default function EditProductActions() {
  return (
    <>
      <Link to="/add-product">
        <button>Save</button>
      </Link>
      <button>Cancel</button>
    </>
  );
}
