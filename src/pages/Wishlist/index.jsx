import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/product/ProductCard";

export default function Wishlist() {
  const { wishlistItems, addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl">Wishlist ({wishlistItems.length})</h1>
        <button className="border border-black px-8 py-3 rounded hover:bg-gray-100 transition">
          Move All To Bag
        </button>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {wishlistItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-20">Danh sách yêu thích đang trống.</p>
      )}
    </div>
  );
}