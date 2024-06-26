import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import CreateProduct from "./components/CreateProduct";
import Page404 from "./pages/Page404";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/api/product">
          <Route index element={<ProductListPage />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
