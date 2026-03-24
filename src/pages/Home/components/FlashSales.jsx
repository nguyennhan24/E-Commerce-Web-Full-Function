import ProductCard from "../../../components/product/ProductCard";
import { flashSalesProducts } from "../../../data/mockData";
import { Link } from "react-router-dom";

export default function FlashSales() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-red-500 font-bold">Today's</h2>
      </div>
      <div className="flex justify-between items-end mb-10">
        <h1 className="text-4xl font-semibold tracking-wider">Flash Sales</h1>
        {/* Đếm ngược */}
        <div className="flex gap-4 font-bold text-2xl">
          <span>03 <span className="text-sm text-gray-500 font-normal">Days</span></span> : 
          <span>23 <span className="text-sm text-gray-500 font-normal">Hours</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {flashSalesProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/shop" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition">
          View All Products
        </Link> 
      </div>
    </section>
  );
}