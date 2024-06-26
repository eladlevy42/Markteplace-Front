import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import CreateProduct from "./components/CreateProduct";
import Page404 from "./pages/Page404";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/product">
          <Route index element={<ProductListPage />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
