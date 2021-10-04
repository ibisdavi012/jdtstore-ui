import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import "./add-product-actions.scss";
import MassDeleteButton from "../mass-delete/MassDeleteButton";

export default function AddProductActions() {

  const appStatus = useSelector((state) => state.productManagement.appStatus);

  return (
    <>
      <Link to="/add-product">
        <button id="add-product-btn" disabled={appStatus !== 'STAND_BY'}>
          <FaPlus />
          ADD
        </button>
      </Link>
      <MassDeleteButton />
    </>
  );
}
