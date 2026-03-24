import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { flashSalesProducts, bestSellingProducts } from "../../data/mockData";

export default function Shop() {
  // Hook này giúp đọc phần "?category=..." trên thanh URL
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  // Gom toàn bộ data lại thành 1 mảng lớn
  const allProducts = [...flashSalesProducts, ...bestSellingProducts];

  // Lọc sản phẩm: Nếu có categoryFilter thì lọc, không thì lấy tất cả
  const displayedProducts = categoryFilter 
    ? allProducts.filter(item => item.category === categoryFilter)
    : allProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Tiêu đề động: Đổi tên theo danh mục */}
      <div className="mb-10">
        <p className="text-gray-500 mb-2">Home / <span className="text-black font-medium">Shop</span></p>
        <h1 className="text-3xl font-bold capitalize">
          {categoryFilter ? `${categoryFilter} Products` : "All Products"}
        </h1>
      </div>

      {/* Hiển thị lưới sản phẩm */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayedProducts.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20">Không tìm thấy sản phẩm nào trong danh mục này.</p>
      )}
    </div>
  );
}