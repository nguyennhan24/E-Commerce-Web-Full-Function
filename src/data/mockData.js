// 1. Dữ liệu cho phần Flash Sales
export const flashSalesProducts = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%", rating: 5, reviews: 88, image: "/assets/id1_HV_G92.png" },
  { id: 2, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: "-35%", rating: 4, reviews: 75, image: "/assets/id2_AK_900.png" },
  { id: 3, name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%", rating: 5, reviews: 99, image: "/assets/id3_IPS_monitor.png" },
  { id: 4, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%", rating: 4, reviews: 99, image: "/assets/id4_s_chair.png" }
];

// 2. Dữ liệu cho phần Best Selling
export const bestSellingProducts = [
  { id: 10, name: "The north coat", price: 260, oldPrice: 360, rating: 5, reviews: 65, image: "/assets/id10_the_north_coat.png" },
  { id: 11, name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4, reviews: 65, image: "/assets/id11_gucci_bag.png" },
  { id: 12, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4, reviews: 65, image: "/assets/id12_rgb_cooler.png" },
  { id: 13, name: "Small Bookself", price: 360, oldPrice: null, rating: 5, reviews: 65, image: "/assets/id13_small_bookshelf.png" }
];

// 3. Dữ liệu cho danh mục (Categories)
export const categoryList = [
  { id: "c1", icon: "📱", name: "Phones" },
  { id: "c2", icon: "💻", name: "Computers" },
  { id: "c3", icon: "⌚", name: "SmartWatch" },
  { id: "c4", icon: "📷", name: "Camera" },
  { id: "c5", icon: "🎧", name: "HeadPhones" },
  { id: "c6", icon: "🎮", name: "Gaming" },
];

// 4. Dữ liệu cho Giỏ hàng (Cart)
export const cartItemsData = [
  { id: 101, name: "LCD Monitor", price: 650, quantity: 1, subtotal: 650, img: "https://via.placeholder.com/50" },
  { id: 102, name: "H1 Gamepad", price: 550, quantity: 2, subtotal: 1100, img: "https://via.placeholder.com/50" },
];

// 5. Dữ liệu cho phần Dịch vụ (Features)
export const featuresData = [
  { id: "f1", icon: "🚚", title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
  { id: "f2", icon: "🎧", title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
  { id: "f3", icon: "🛡️", title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" }
];