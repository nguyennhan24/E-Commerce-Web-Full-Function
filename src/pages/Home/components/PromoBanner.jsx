export default function PromoBanner() {
  return (
    <section className="mb-20 bg-black text-white rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      
      <div className="z-10 w-full md:w-1/2 flex flex-col gap-8">
        <span className="text-green-400 font-semibold">Categories</span>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Enhance Your <br /> Music Experience 
        </h1>
        
        {/* Vòng tròn đếm ngược */}
        <div className="flex gap-4">
          <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold">
            <span>23</span> <span className="text-[10px] font-normal">Hours</span>
          </div>
          <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold">
            <span>05</span> <span className="text-[10px] font-normal">Days</span>
          </div>
          <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold">
            <span>59</span> <span className="text-[10px] font-normal">Minutes</span>
          </div>
          <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold">
            <span>35</span> <span className="text-[10px] font-normal">Seconds</span>
          </div>
        </div>

        <button className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 w-max transition">
          Buy Now!
        </button>
      </div>

      {/* Ảnh giả lập chiếc loa */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 relative z-10 flex justify-center">
        <div className="w-64 h-64 bg-gray-700 rounded-full opacity-50 blur-3xl absolute"></div>
        <img src="/assets/speaker.png" alt="Speaker" className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
      </div>
    </section>
  );
}