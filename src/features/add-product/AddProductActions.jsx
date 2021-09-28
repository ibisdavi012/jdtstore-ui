import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./add-product-actions.scss";
import MassDeleteButton from "../mass-delete/MassDeleteButton";

export default function AddProductActions() {
  return (
    <>
      <Link to="/add-product">
        <button id="add-product-btn">
          <FaPlus />
          Add
        </button>
      </Link>
      <MassDeleteButton />
    </>
  );
}
