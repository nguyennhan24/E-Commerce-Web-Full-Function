import { Outlet, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Toast from "../product/Toast"

const TopBar = () => (
  <div className="bg-black text-white text-sm py-2 text-center">
    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="font-bold underline cursor-pointer">ShopNow</span>
  </div>
);

// ĐÃ SỬA: Chuyển sang dùng { ... return (...) } để có thể viết logic bên trong
const Header = () => {
  // 1. Phải dùng ngoặc nhọn { } và đặt logic ở đây
  const { cartItems, wishlistItems } = useCart();

  // 2. Tính tổng số lượng (ví dụ: 2 chuột + 1 bàn phím = 3)
  // Dùng hàm reduce để cộng dồn quantity của từng món
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b py-4 px-10 flex justify-between items-center bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold">
          <Link to="/">Store</Link>
      </h1>
      
      {/* ... (phần nav giữ nguyên) */}
      <nav className="flex gap-6 font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/signup" className="hover:underline">Sign Up</Link>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input type="text" placeholder="What are you looking for?" className="bg-gray-100 px-4 py-2 rounded-md outline-none" />
        </div>
        
        {/* Wishlist Icon */}
        <Link to="/wishlist" className="relative text-xl">
          ♡ {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* 3. SỬA TẠI ĐÂY: Dùng totalCartItems thay vì cartItems.length */}
        <Link to="/cart" className="relative text-xl">
          🛒 {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-12 mt-20 text-center">
    <p>Nhân Nguyễn</p> {/* */}
  </footer>
);

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        <Outlet /> 
      </main>
      
      {/* 2. Đặt Toast ở đây. Nó sẽ trôi nổi trên màn hình dựa theo code CSS của nó */}
      <Toast />
      
      <Footer />
    </div>
  );
}