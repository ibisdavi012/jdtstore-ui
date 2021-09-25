import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mass_delete } from "../product-list/productListSlice";

export default function MassDeleteButton() {
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);
  const selectedProducts = useSelector(
    (state) => state.productList.product_list.selected
  );

  useEffect(() => {
    if (deleting) {
      console.log("SELECTED", selectedProducts);
      dispatch(mass_delete({ deleted: selectedProducts }));
      setDeleting(false);
    }
  }, [deleting]);

  return (
    <button id="delete-product-btn" onClick={() => setDeleting(true)}>
      R Mass Delete
    </button>
  );
}
