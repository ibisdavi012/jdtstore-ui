import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { mass_delete } from "../product-list/productListSlice";
import { config } from "../../config";

const productsEndPoint = config.endpoints.products;

export default function MassDeleteButton() {
  const dispatch = useDispatch();

  // Get the list of selected products
  const selectedProducts = useSelector(
    (state) => state.productList.product_list.selected
  );

  // Send the DELETE requests
  const deleteProductsUsingAxios = async () => {
    const requests = [];

    const deletedProducts = [];

    // Create a request for each selected product
    selectedProducts.forEach((product) => {
      requests.push(axios.delete(`${productsEndPoint}/${product}`));
    });

    // Send request async and wait for all of them to complete
    await axios.all([...requests]).then(
      axios.spread((...responses) => {
        // Once the requests have been completed, analyse the response to check which products were deleted
        responses.forEach((response) => {
          // Generate an array with the ID of the deleted items
          if (response.data && response.data.affected_rows) {
            deletedProducts.push(response.data.content.deleted_id);
          }
        });
      })
    );
    return deletedProducts;
  };

  const createDeleteRequest = (productId) => {
    return fetch(`${productsEndPoint}/delete/${productId}`)
      .then((data) => data.json())
      .catch((error) => {
        console.log("Error");
      });
  };

  const deleteProductsUsingFetch = async () => {
    let deletedProducts = [];

    try {      
      const deleteRequests = selectedProducts.map((productId) => {
        return createDeleteRequest(productId);
      });

      const massDeleteResponse = await Promise.all(deleteRequests);
      
      deletedProducts = massDeleteResponse.map(({content})=>parseInt(content.deleted_id));

    } catch (error) {
      console.log(error);
    }

    return deletedProducts;
  };

  const deleteProducts = async () => {
    let deletedProducts;
    if (config.useFetch) {
      deletedProducts = await deleteProductsUsingFetch();
    } else {
      deletedProducts = await deleteProductsUsingAxios();
    }
    // Notify the rest of the App which products were deleted
    dispatch(mass_delete({ deleted: [...deletedProducts] }));
  };

  return (
    <button id="delete-product-btn" onClick={() => deleteProducts()}>
      <FaTrashAlt />
      Mass Delete
    </button>
  );
}
