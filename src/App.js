import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-product">
          <AddProductPage />
        </Route>
        <Route path="/">
          <ProductListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
