import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function Add() {
  return <p>Add New</p>;
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/add">
            <h2>Adding Form</h2>
          </Route>
          <Route path="/">
            <ProductGrid />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
