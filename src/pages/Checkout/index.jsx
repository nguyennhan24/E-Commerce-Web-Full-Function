export default function Checkout() {
  // Mock data giỏ hàng mang sang
  const checkoutItems = [
    { id: 101, name: "LCD Monitor", price: 650, img: "https://via.placeholder.com/50" }, // [cite: 525, 526]
    { id: 102, name: "H1 Gamepad", price: 1100, img: "https://via.placeholder.com/50" } // [cite: 527, 528]
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-gray-500 mb-10">Account / My Account / Product / View Cart / <span className="text-black font-medium">CheckOut</span></p> {/* [cite: 502] */}
      
      <h1 className="text-3xl font-bold mb-10">Billing Details</h1> {/* [cite: 503] */}

      <div className="flex flex-col md:flex-row gap-20">
        {/* CỘT TRÁI: Form thông tin thanh toán */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Nhóm Input */}
          {[
            { label: "First Name", required: true }, // [cite: 504]
            { label: "Company Name", required: false }, // [cite: 505]
            { label: "Street Address", required: true }, // [cite: 507]
            { label: "Apartment, floor, etc. (optional)", required: false }, // [cite: 510]
            { label: "Town/City", required: true }, // [cite: 511]
            { label: "Phone Number", required: true }, // [cite: 512]
            { label: "Email Address", required: true } // [cite: 513]
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="text-gray-500 text-sm">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input type="text" className="bg-gray-100 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-gray-300" />
            </div>
          ))}
          
          <div className="flex items-center gap-3 mt-4">
            <input type="checkbox" id="saveInfo" className="w-5 h-5 accent-red-500" />
            <label htmlFor="saveInfo" className="text-sm">Save this information for faster check-out next time</label> {/* [cite: 514] */}
          </div>
        </div>

        {/* CỘT PHẢI: Tóm tắt đơn hàng & Phương thức thanh toán */}
        <div className="w-full md:w-1/2 md:pl-10 flex flex-col gap-6">
          {/* Danh sách món hàng */}
          <div className="flex flex-col gap-4 mb-4">
            {checkoutItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
                  <span>{item.name}</span>
                </div>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          {/* Tiền bạc */}
          <div className="flex justify-between border-b pb-4">
            <span>Subtotal:</span> {/* [cite: 506] */}
            <span>$1750</span>
          </div>
          <div className="flex justify-between border-b pb-4">
            <span>Shipping:</span> {/* [cite: 508] */}
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span> {/* [cite: 509] */}
            <span>$1750</span>
          </div>

          {/* Chọn phương thức thanh toán */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" id="bank" className="w-4 h-4 accent-black" />
                <label htmlFor="bank">Bank</label> {/* [cite: 529] */}
              </div>
              {/* Giả lập các logo ngân hàng */}
              <div className="flex gap-2">
                <span className="bg-gray-200 px-2 py-1 text-xs rounded">VISA</span> {/* [cite: 545] */}
                <span className="bg-gray-200 px-2 py-1 text-xs rounded">MasterCard</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <input type="radio" name="payment" id="cod" className="w-4 h-4 accent-black" defaultChecked />
              <label htmlFor="cod">Cash on delivery</label> {/* [cite: 530] */}
            </div>
          </div>

          {/* Nút đặt hàng */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <input type="text" placeholder="Coupon Code" className="border border-black px-6 py-3 rounded flex-1 outline-none" /> {/* [cite: 531] */}
            <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600">Apply Coupon</button>
          </div>
          
          <button className="bg-red-500 text-white px-8 py-4 rounded hover:bg-red-600 mt-4 w-max">
            Place Order {/* [cite: 532] */}
          </button>
        </div>
      </div>
    </div>
  );
}