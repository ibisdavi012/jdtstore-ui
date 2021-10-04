import { FaDatabase, FaTimes } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { save_request, cancel } from "../../store/productManagementSlice";

import "./save-product-actions.scss";

export default function SaveProductActions() {

  const appStatus = useSelector((state) => state.productManagement.appStatus);

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(save_request())} disabled={appStatus !== 'STAND_BY'}>
        <FaDatabase />
        Save
      </button>
      <button onClick={() => dispatch(cancel())} disabled={appStatus !== 'STAND_BY'}>
        <FaTimes />
        Cancel
      </button>
    </>
  );
}
