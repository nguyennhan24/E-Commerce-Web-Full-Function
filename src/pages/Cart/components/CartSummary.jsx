export default function CartSummary() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 mt-20">
      {/* Cột mã giảm giá */}
      <div className="flex items-start gap-4 w-full md:w-1/2">
        <input type="text" placeholder="Coupon Code" className="border px-6 py-3 rounded w-full outline-none" /> {/* [cite: 464] */}
        <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 whitespace-nowrap">Apply Coupon</button> {/* [cite: 465] */}
      </div>

      {/* Box Cart Total */}
      <div className="border border-black rounded p-6 w-full md:w-[400px]">
        <h3 className="font-medium text-xl mb-6">Cart Total</h3> {/*  */}
        
        <div className="flex justify-between border-b pb-4 mb-4">
          <span>Subtotal:</span> {/* [cite: 467] */}
          <span>$1750</span> {/* [cite: 472] */}
        </div>
        <div className="flex justify-between border-b pb-4 mb-4">
          <span>Shipping:</span> {/* [cite: 468] */}
          <span>Free</span> {/* [cite: 473] */}
        </div>
        <div className="flex justify-between mb-6">
          <span>Total:</span> {/* [cite: 469] */}
          <span>$1750</span> {/* [cite: 474] */}
        </div>

        <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition">
          Proceed to checkout {/* [cite: 470] */}
        </button>
      </div>
    </div>
  );
}