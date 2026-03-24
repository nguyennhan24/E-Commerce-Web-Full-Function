import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
// 1. Nhập thêm kho dữ liệu vào
import { flashSalesProducts, bestSellingProducts } from "../../data/mockData";

export default function ProductDetail() {
  // Lấy ID từ URL (lưu ý: id này đang là chuỗi String)
  const { id } = useParams(); 

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // 2. GỘP CÁC MẢNG DỮ LIỆU LẠI VÀ TÌM KIẾM SẢN PHẨM THEO ID
  const allProducts = [...flashSalesProducts, ...bestSellingProducts];
  // Ép kiểu id từ URL thành số nguyên (parseInt) để so sánh
  const foundProduct = allProducts.find(item => item.id === parseInt(id));

  // Nếu người dùng nhập linh tinh ID không có thực trên thanh địa chỉ
  if (!foundProduct) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">Sản phẩm không tồn tại!</h1>
      </div>
    );
  }

  // 3. ĐỔ DỮ LIỆU THẬT VÀO BIẾN PRODUCT INFO
  const productInfo = {
    name: foundProduct.name, // Lấy tên thật
    price: `$${foundProduct.price}.00`, // Lấy giá thật
    rating: foundProduct.rating || 5, // Lấy số sao đánh giá
    reviews: foundProduct.reviews || 0, // Lấy số lượng review
    inStock: true,
    // Giữ nguyên mô tả và size vì bạn không cần đổi
    description: "Mô tả chi tiết cho sản phẩm này đang được cập nhật. Chất lượng cao, bảo hành chính hãng.", 
    sizes: ["XS", "S", "M", "L", "XL"],
    image: foundProduct.image // Lấy ảnh thật
  };

  // Related items (gợi ý sản phẩm)
  const relatedItems = flashSalesProducts.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-gray-500 mb-10">Account / Gaming / <span className="text-black font-medium">{productInfo.name}</span></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CỘT TRÁI: Hình ảnh */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-100 p-2 rounded w-24 h-24 flex items-center justify-center cursor-pointer hover:border-2 border-red-500 transition">
                <img src={productInfo.image} alt="thumb" className="w-16 object-contain" />
              </div>
            ))}
          </div>
          <div className="bg-gray-100 flex-1 flex items-center justify-center rounded p-10">
            {/* Hiển thị ảnh thật của sản phẩm */}
            <img src={productInfo.image} alt="main" className="w-3/4 hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* CỘT PHẢI: Chi tiết sản phẩm */}
        <div className="flex flex-col gap-4">
          {/* Hiển thị tên và giá thật */}
          <h1 className="text-3xl font-semibold">{productInfo.name}</h1>
          <div className="flex items-center gap-4 text-sm">
             <span className="text-yellow-400">{'★'.repeat(productInfo.rating)}{'☆'.repeat(5 - productInfo.rating)}</span>
             <span className="text-gray-500">({productInfo.reviews} Reviews) |</span>
             <span className="text-green-500">{productInfo.inStock ? "In Stock" : "Out of Stock"}</span>
          </div>
          <p className="text-2xl font-normal">{productInfo.price}</p>
          <p className="text-sm text-gray-700 pb-4 border-b">{productInfo.description}</p>

          {/* Chọn Size */}
          <div className="flex items-center gap-4 py-2">
            <span className="font-medium text-lg">Size:</span>
            <div className="flex gap-3">
              {productInfo.sizes.map(size => (
                <button key={size} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-red-500 hover:text-white transition focus:bg-red-500 focus:text-white">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CHỌN SỐ LƯỢNG & MUA HÀNG */}
          <div className="flex gap-4 items-center mt-4">
            <div className="flex border rounded w-32 h-12">
              <button onClick={handleDecrease} className="w-1/3 text-xl hover:bg-red-600 transition duration-200">-</button>
              <div className="w-1/3 flex items-center justify-center border-x font-medium">{quantity}</div>
              <button onClick={handleIncrease} className="w-1/3 text-xl hover:bg-red-600 transition duration-200">+</button>
            </div>
            <button className="bg-red-500 text-white px-10 h-12 rounded hover:bg-red-600 transition duration-300">
              Buy Now
            </button>
            <button className="border h-12 w-12 flex items-center justify-center rounded hover:bg-gray-100 transition">❤️</button>
          </div>

          {/* Box thông tin giao hàng */}
          <div className="border rounded mt-6 flex flex-col">
            <div className="p-4 border-b flex gap-4 items-center">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="font-medium">Free Delivery</p>
                <a href="#" className="text-xs text-gray-500 underline hover:text-black">Enter your postal code for Delivery Availability</a>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-center">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-xs text-gray-500">Free 30 Days Delivery Returns. <a href="#" className="underline hover:text-black">Details</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION: RELATED ITEM --- */}
      <div className="mt-24 mb-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <h2 className="text-red-500 font-bold text-lg">Related Item</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {relatedItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
      
    </div>
  );
}