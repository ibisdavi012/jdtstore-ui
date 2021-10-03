import { FaDatabase, FaTimes } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { save_request, cancel } from "./addProductSlice";

import "./save-product-actions.scss";

export default function SaveProductActions() {

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(save_request())} disabled={formStatus !== 'STAND_BY'}>
        <FaDatabase />
        Save
      </button>
      <button onClick={() => dispatch(cancel())} disabled={formStatus !== 'STAND_BY'}>
        <FaTimes />
        Cancel
      </button>
    </>
  );
}
