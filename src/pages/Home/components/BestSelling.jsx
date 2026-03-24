import ProductCard from "../../../components/product/ProductCard";
import { bestSellingProducts } from "../../../data/mockData"; // Import từ kho dữ liệu
import { Link } from "react-router-dom";

export default function BestSelling() {
  // Mock data tạm thời cho Best Selling

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-red-500 font-bold">This Month</h2> 
      </div>
      
      <div className="flex justify-between items-end mb-10">
        <h1 className="text-4xl font-semibold tracking-wider">Best Selling Products</h1> 
        <Link to="/shop" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition inline-block">
          View All Products
        </Link> 
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {bestSellingProducts.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}