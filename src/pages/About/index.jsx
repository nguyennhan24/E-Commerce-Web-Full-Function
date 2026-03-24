export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-20 mb-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-semibold mb-8">Our Story</h1>
          <p className="mb-6 leading-relaxed">Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.</p>
          <p className="leading-relaxed">Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.</p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/assets/ourstory.jpg" alt="Our Story" className="rounded shadow-lg" />
        </div>
      </div>

      {/* Phần chỉ số (Stats) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Sellers active our site", value: "10.5k", icon: "🏠" },
          { label: "Monthly Product Sale", value: "33k", icon: "💰" },
          { label: "Customer active in our site", value: "45.5k", icon: "🛍️" },
          { label: "Anual gross sale in our site", value: "25k", icon: "📈" }
        ].map((stat, i) => (
          <div key={i} className="border p-8 rounded flex flex-col items-center hover:bg-red-500 hover:text-white transition-all group">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-white/30">{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-sm text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}