import { Fragment } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <ProductGrid />
      <Footer />
    </Fragment>
  );
}

export default App;
