import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import "./add-product-actions.scss";
import MassDeleteButton from "../mass-delete/MassDeleteButton";

export default function AddProductActions() {

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  return (
    <>
      <Link to="/add-product">
        <button id="add-product-btn" disabled={formStatus !== 'STAND_BY'}>
          <FaPlus />
          ADD
        </button>
      </Link>
      <MassDeleteButton />
    </>
  );
}
