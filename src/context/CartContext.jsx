import { createContext, useState, useContext } from "react";

// Tạo Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Lưu sản phẩm trong giỏ
  const [wishlistItems, setWishlistItems] = useState([]); // Lưu sản phẩm yêu thích

  // 1. THÊM STATE ĐỂ QUẢN LÝ THÔNG BÁO (Toast)
  const [notification, setNotification] = useState(null);

  // Hàm hiển thị thông báo
  const showNotification = (message) => {
    setNotification(message);
    // Tự động ẩn sau 3 giây (giống như setTimeout trong C++)
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Hàm thêm vào giỏ hàng
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      // Kiểm tra sản phẩm đã có trong giỏ chưa
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        // Nếu có rồi thì tăng số lượng
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Nếu chưa có thì thêm mới vào mảng
      return [...prev, { ...product, quantity }];
    });
    showNotification(`🛒 Đã thêm ${product.name} vào giỏ hàng!`);
  };

  // Hàm xóa khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Hàm thêm/xóa khỏi Wishlist (Toggle)
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        showNotification(`💔 Đã bỏ ${product.name} khỏi danh sách yêu thích!`);
        return prev.filter((item) => item.id !== product.id);
      }
      showNotification(`❤️ Đã thêm ${product.name} vào danh sách yêu thích!`);
      return [...prev, product];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, wishlistItems, addToCart, removeFromCart, toggleWishlist, notification}}>
      {children}
    </CartContext.Provider>
  );
};

// Hook để các component con sử dụng dễ dàng
export const useCart = () => useContext(CartContext);