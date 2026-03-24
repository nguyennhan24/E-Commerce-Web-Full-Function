import CartTable from "./components/CartTable";
import CartSummary from "./components/CartSummary";

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-gray-500 mb-10">Home / <span className="text-black font-medium">Cart</span></p> {/* [cite: 447] */}
      
      <CartTable />
      <CartSummary />
    </div>
  );
}