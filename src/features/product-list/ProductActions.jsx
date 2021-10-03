import { useState } from "react";
import { useDispatch } from "react-redux";
import { select } from "./productListSlice";

export default function ProductActions({ productId, onCheckChanged }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const toggleChecked = (e) => {
    onCheckChanged(!checked);
    dispatch(select({ productId: parseInt(productId), checked: !checked }));
    setChecked(!checked);
  };

  return (
    <div className="product__actions">
      <input
        type="checkbox"
        name=""
        id=""
        className="delete-checkbox"
        onChange={(e) => toggleChecked(e)}
        checked={checked}
      />
    </div>
  );
}
