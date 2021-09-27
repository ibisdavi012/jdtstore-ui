import axios from "axios";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { mass_delete } from "../product-list/productListSlice";

const productsEndPoint = "http://localhost/products";

export default function MassDeleteButton() {
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);
  const selectedProducts = useSelector(
    (state) => state.productList.product_list.selected
  );

  const deleteProducts = async () => {
    const requests = [];

    selectedProducts.forEach((product) => {
      console.log(product);
      requests.push(axios.delete(`${productsEndPoint}/${product}`));
    });

    await axios.all([...requests]).then(
      axios.spread((...responses) => {
        console.log("here", responses);
      })
    );

    //setDeleting(true);
  };

  useEffect(() => {
    if (deleting) {
      dispatch(mass_delete({ deleted: selectedProducts }));
      setDeleting(false);
    }
  }, [deleting]);

  return (
    <button id="delete-product-btn" onClick={() => deleteProducts()}>
      <FaTrashAlt />
      Mass Delete
    </button>
  );
}
