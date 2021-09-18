import { useDispatch } from "react-redux";
import { save, cancel } from "./addProductSlice";

import "./save-product-actions.scss";

export default function SaveProductActions() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(save())}>Save</button>
      <button onClick={() => dispatch(cancel())}>Cancel</button>
    </>
  );
}
