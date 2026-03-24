import HeroBanner from "./components/HeroBanner";
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";
import BestSelling from "./components/BestSelling";
import PromoBanner from "./components/PromoBanner";
import NewArrival from "./components/NewArrival";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroBanner />
      <FlashSales />
      <hr className="my-14" /> {/* Đường kẻ ngang chia các khu vực */}
      <Categories />
      <hr className="my-14" />
      <BestSelling />
      <PromoBanner />
      <NewArrival />
      <Features />
    </div>
  );
}