import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Sử dụng kho dữ liệu

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlistItems } = useCart();
  
  // Kiểm tra xem sản phẩm này đã nằm trong Wishlist chưa để đổi màu icon
  const isWishlisted = wishlistItems.find(item => item.id === product.id);

  return (
    <div className="group relative flex flex-col gap-4">
      <div className="relative bg-gray-100 flex items-center justify-center h-64 rounded-md overflow-hidden">
        {/* Nút Wishlist */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button 
            onClick={() => toggleWishlist(product)} 
            className={`p-1.5 rounded-full shadow transition-colors ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`}
          >
            ❤️
          </button>
        </div>

        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-32 object-contain hover:scale-110 transition-transform" />
        </Link>

        {/* Nút Add to Cart thực tế */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-0 w-full bg-black text-white py-3 text-sm font-medium
                     translate-y-full group-hover:translate-y-0 transition-transform duration-300
                     opacity-0 group-hover:opacity-100 active:bg-gray-800"
        >
          Add To Cart
        </button>
      </div>
      {/* ... phần thông tin sản phẩm giữ nguyên */}
      <div className="flex flex-col gap-1">
        <Link to={`/product/${product.id}`} className="font-medium hover:text-red-500 transition-colors">
          {product.name}
        </Link>
        <div className="flex gap-3 text-red-500 font-medium">${product.price}</div>
      </div>
    </div>
  );
}