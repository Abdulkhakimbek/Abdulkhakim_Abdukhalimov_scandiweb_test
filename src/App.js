import React from "react";
import Layout from "./components/Layout";
import { Category, ProductDetails } from "./pages"

class App extends React.Component {
  render() {
    return (
      <Layout Children={
        <>
          <Category />
          <ProductDetails />
        </>
      }>

      </Layout>
    );
  }
}

export default App;