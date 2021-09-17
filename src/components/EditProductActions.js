import { useSelector, useDispatch } from "react-redux";
import { save, cancel } from "../features/add-product/addProductSlice";

import "../sass/components/page-actions.scss";

export default function EditProductActions() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(save())}>Save</button>
      <button onClick={() => dispatch(cancel())}>Cancel</button>
    </>
  );
}
