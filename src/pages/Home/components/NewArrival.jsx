export default function NewArrival() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-red-500 font-bold">Featured</h2> 
      </div>
      <h1 className="text-4xl font-semibold tracking-wider mb-10">New Arrival</h1>

      {/* Bố cục Grid 2 cột chính */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
        
        {/* Cột trái: Máy PS5 (Chiếm Full chiều cao) */}
        <div className="bg-black text-white rounded relative p-8 flex items-end overflow-hidden group">
          <img src="/assets/ps5.png" alt="PS5" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 object-contain group-hover:scale-105 transition-transform duration-500" />
          <div className="relative z-10 w-2/3">
            <h3 className="text-2xl font-semibold mb-3">PlayStation 5</h3>
            <p className="text-sm text-gray-300 mb-4">Black and White version of the PS5 coming out on sale.</p> 
            <a href="#" className="underline font-medium hover:text-gray-400">Shop Now</a> 
          </div>
        </div>

        {/* Cột phải: Chia làm 2 hàng */}
        <div className="flex flex-col gap-8">
          
          {/* Hàng trên: Women's Collections */}
          <div className="bg-[#0D0D0D] text-white rounded relative p-8 flex items-end h-1/2 overflow-hidden group">
            <img src="/assets/banner.png" alt="Women" className="absolute right-0 bottom-0 h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            <div className="relative z-10 w-1/2">
              <h3 className="text-2xl font-semibold mb-3">Women's Collections</h3>
              <p className="text-sm text-gray-300 mb-4">Featured woman collections that give you another vibe.</p> 
              <a href="#" className="underline font-medium hover:text-gray-400">Shop Now</a> 
            </div>
          </div>

          {/* Hàng dưới: Chia làm 2 cột nhỏ */}
          <div className="grid grid-cols-2 gap-8 h-1/2">
            {/* Loa */}
            <div className="bg-black text-white rounded relative p-6 flex items-end justify-center overflow-hidden group">
               <img src="/assets/speaker2.png" alt="Speakers" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain group-hover:scale-105 transition-transform duration-500" />
               <div className="relative z-10 text-center w-full">
                 <h3 className="text-xl font-semibold mb-1">Speakers</h3> 
                 <a href="#" className="underline text-sm font-medium hover:text-gray-400">Shop Now</a>
               </div>
            </div>
            {/* Nước hoa */}
            <div className="bg-black text-white rounded relative p-6 flex items-end justify-center overflow-hidden group">
               <img src="/assets/perfume.png" alt="Perfume" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain group-hover:scale-105 transition-transform duration-500" />
               <div className="relative z-10 text-center w-full">
                 <h3 className="text-xl font-semibold mb-1">Perfume</h3> 
                 <a href="#" className="underline text-sm font-medium hover:text-gray-400">Shop Now</a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}