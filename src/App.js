import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import AddProductPage from "./pages/AddProductPage";
import ErrorPage from "./pages/ErrorPage";

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
