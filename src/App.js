import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Category from "./pages/Category";
import PDP from "./pages/PDP";
import AppMock from "./pages/MockQuery";

class App extends React.Component {
  render() {
    return (
      <Layout
        Children={
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/category" element={<Category />} />
              <Route path="/pdp" element={<PDP />} />
            </Routes>
          </BrowserRouter>
        }
      >


      </Layout>
    );
  }
}

export default App;