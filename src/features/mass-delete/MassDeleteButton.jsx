import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { mass_delete } from "../product-list/productListSlice";
import { config } from "../../config";

const productsEndPoint = config.endpoints.products;

export default function MassDeleteButton() {
  const dispatch = useDispatch();

  // Get the list of selected products
  const getSelectedProducts = () => {
    return [...document.querySelectorAll(':checked')].map(checkbox => parseInt(checkbox.attributes['data-product'].value));    
  }

  // Send the DELETE requests
  const deleteProductsUsingAxios = async (selectedProducts) => {
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

  const deleteProductsUsingFetch = async (selectedProducts) => {
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
    const selectedProducts = getSelectedProducts();

    let deletedProducts;
    if (config.useFetch) {
      deletedProducts = await deleteProductsUsingFetch(selectedProducts);
    } else {
      deletedProducts = await deleteProductsUsingAxios(selectedProducts);
    }
    // Notify the rest of the App which products were deleted
    dispatch(mass_delete({ deleted: [...deletedProducts] }));
  };

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  return (
    <button id="delete-product-btn" onClick={() => deleteProducts()} disabled={formStatus !== 'STAND_BY'}>
      <FaTrashAlt />
      MASS DELETE
    </button>
  );
}
