import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Tạm thời tạo các component giả để test chuyển trang
// const Home = () => <div className="p-10 text-2xl font-bold">Đây là Trang Chủ</div>;
// const Cart = () => <div className="p-10 text-2xl font-bold">Đây là Giỏ Hàng</div>;
const NotFound = () => <div className="p-10 text-2xl text-red-500 font-bold">404 Not Found</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Mọi trang nằm trong MainLayout sẽ có sẵn TopBar, Header và Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
