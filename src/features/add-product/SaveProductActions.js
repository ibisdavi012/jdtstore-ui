import { FaDatabase, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { save_request, cancel } from "./addProductSlice";

import "./save-product-actions.scss";

export default function SaveProductActions() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(save_request())}>
        <FaDatabase />
        Save
      </button>
      <button onClick={() => dispatch(cancel())}>
        <FaTimes />
        Cancel
      </button>
    </>
  );
}
