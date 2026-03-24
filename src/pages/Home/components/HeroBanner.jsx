export default function HeroBanner() {
  // Danh sách các danh mục ở menu bên trái
  const sidebarMenu = [
    "Woman's Fashion", "Men's Fashion", "Electronics", 
    "Home & Lifestyle", "Medicine", "Sports & Outdoor", 
    "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-20">
      
      {/* CỘT TRÁI: Sidebar Menu */}
      <div className="w-full md:w-1/4 border-r pt-10 pr-6 flex flex-col gap-4">
        {sidebarMenu.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className="flex justify-between items-center text-gray-800 hover:text-red-500 transition"
          >
            {item}
            {/* Design có mũi tên ở 2 mục đầu tiên */}
            {(index === 0 || index === 1) && <span>&gt;</span>}
          </a>
        ))}
      </div>

      {/* CỘT PHẢI: Main Banner */}
      <div className="w-full md:w-3/4 pt-10">
        <div className="bg-black text-white p-10 md:p-16 flex items-center justify-between h-full relative overflow-hidden">
          
          {/* Nội dung Banner */}
          <div className="z-10 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              {/* Dùng emoji hoặc thay bằng thẻ <img> chứa logo Apple thật của bạn */}
              <span className="text-3xl">🍎</span> 
              <span className="font-light">iPhone 15 Series</span>
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-wide">
              Up to 10% <br/> off Voucher
            </h1>
            <a href="#" className="underline font-medium flex items-center gap-2 mt-4 hover:text-gray-300 w-max">
              Shop Now <span>&rarr;</span>
            </a>
          </div>

          {/* Vùng chứa ảnh điện thoại (Giả lập) */}
          {/* Khi có ảnh thật từ Figma, bạn thay background này bằng thẻ <img src="..." /> nhé */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-800/40">
            <img src="/assets/first_img_promo.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain group-hover:scale-105 transition-transform duration-500" />
          </div>
          
          {/* Dấu chấm chuyển slide */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></div>
          </div>
        </div>
      </div>

    </div>
  );
}