import { featuresData } from "../../../data/mockData";

export default function Features() {

  return (
    <section className="py-10 mb-20 flex flex-col md:flex-row justify-around items-center gap-10">
      {featuresData.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6 border-[10px] border-gray-100">
            <span className="text-3xl text-black">{item.icon}</span>
          </div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}