import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListPage from "./features/product-list/ProductListPage";
import AddProductPage from "./features/add-product/AddProductPage";
import ErrorPage from "./errors/ErrorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/add-product">
          <AddProductPage />
        </Route>
        <Route exact path="/">
          <ProductListPage />
        </Route>
        <Route path="*">
          <ErrorPage error={404} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
