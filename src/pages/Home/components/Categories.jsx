import { categoryList } from "../../../data/mockData";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="mb-20 border-b pb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-red-500 font-bold">Categories</h2>
      </div>

      <div className="flex justify-between items-end mb-10">
        <h1 className="text-4xl font-semibold tracking-wider">Browse By Category</h1>
        <div className="flex gap-2">
          <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">&larr;</button>
          <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">&rarr;</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categoryList.map((cat, index) => (
          /* Đã xóa dòng comment bị lỗi ở đây */
          <Link 
            to={`/shop?category=${cat.name.toLowerCase()}`}
            key={index} 
            className="border rounded flex flex-col items-center justify-center gap-4 py-8 cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-5xl opacity-80 group-hover:opacity-100">{cat.icon}</span>
            <span className="font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}