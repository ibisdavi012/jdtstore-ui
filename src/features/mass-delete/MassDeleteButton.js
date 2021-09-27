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
    const deletedProducts = [];

    selectedProducts.forEach((product) => {
      requests.push(axios.delete(`${productsEndPoint}/${product}`));
    });

    await axios.all([...requests]).then(
      axios.spread((...responses) => {
        responses.forEach((response) => {
          if (response.data && response.data.affected_rows) {
            console.log(response.data);
            deletedProducts.push(response.data.content.deleted_id);
          }
        });
      })
    );

    console.log(deletedProducts);

    dispatch(mass_delete({ deleted: deletedProducts }));
    setDeleting(false);
  };

  return (
    <button id="delete-product-btn" onClick={() => deleteProducts()}>
      <FaTrashAlt />
      Mass Delete
    </button>
  );
}
