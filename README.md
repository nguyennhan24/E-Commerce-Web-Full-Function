# Exclusive - E-Commerce Web Full Function

Dự án phát triển giao diện website thương mại điện tử (E-Commerce) toàn diện, mô phỏng các tính năng mua sắm thực tế. Dự án được xây dựng với mục tiêu rèn luyện kỹ năng xây dựng giao diện người dùng (UI) kết hợp quản lý trạng thái (State Management) phức tạp trong React.

## Các tính năng nổi bật & Kiến thức áp dụng

Dự án này bao gồm đầy đủ các luồng thao tác của một trang web bán hàng, kết hợp với các kỹ thuật tối ưu mã nguồn:

* **Quản lý trạng thái tập trung (Context API):** Thay vì truyền dữ liệu (props) qua nhiều tầng component, dự án sử dụng `CartContext` để quản lý toàn cục các trạng thái như `cartItems` (giỏ hàng), `wishlistItems` (danh sách yêu thích) và `notification` (thông báo Toast). Điều này giúp mọi component (như TopBar, Header, ProductCard) đều có thể truy cập và cập nhật số lượng hàng hóa ngay lập tức.
* **Hệ thống Routing (React Router DOM):** Sử dụng `MainLayout` làm component bọc ngoài (layout wrapper) chứa Header và Footer. Các trang con (Home, Cart, ProductDetail,...) được render thông qua `<Outlet />`, giúp giao diện chuyển hướng mượt mà không cần tải lại toàn bộ trang.
* **Hiển thị thông báo động (Toast Notification):** Một component `Toast` được đặt ở cấp cao nhất (trong MainLayout) và lắng nghe sự thay đổi của biến `notification` từ Context. Khi người dùng thêm vào giỏ hoặc yêu thích, hệ thống dùng `setTimeout` để hiển thị thông báo và tự động ẩn đi sau 3 giây.
* **Giao diện đáp ứng & Tiện ích (Tailwind CSS):** Sử dụng hoàn toàn utility-classes của Tailwind để xây dựng các bố cục phức tạp như Grid (cho danh sách sản phẩm) và Flexbox (cho thanh điều hướng, căn chỉnh layout).
* **Lọc và Tìm kiếm (URL Search Params):** Trang `Shop` áp dụng hook `useSearchParams` để đọc tham số URL (ví dụ: `?category=phones`), từ đó linh hoạt lọc mảng sản phẩm tương ứng mà không cần tạo nhiều trang riêng biệt.

## Hình ảnh giao diện (UI Previews)

Dưới đây là một số giao diện chính của hệ thống đã được hoàn thiện:

### 1. Trang chủ (Home Page & Flash Sales)
Giao diện trang chủ nổi bật với Hero Banner và khu vực Flash Sales đếm ngược thời gian thực, giúp thu hút sự chú ý của khách hàng.
![Home Page](./readme_img/Screenshot%202026-03-24%20151009.png)

### 2. Danh mục & Sản phẩm bán chạy (Categories & Best Selling)
Phân chia sản phẩm theo danh mục với các icon trực quan và làm nổi bật các mặt hàng bán chạy nhất trong tháng.
![Categories](./readme_img/Screenshot%202026-03-24%20151045.png)

### 3. Trang chi tiết sản phẩm (Product Detail)
Trang hiển thị chi tiết hình ảnh, giá cả, đánh giá, phần chọn size và điều chỉnh số lượng mua hàng. Đi kèm là các thông tin vận chuyển và đổi trả.
![Product Detail](./readme_img/Screenshot%202026-03-24%20151240.png)

### 4. Giỏ hàng (Cart)
Quản lý các sản phẩm đã thêm vào giỏ, cho phép người dùng thay đổi số lượng, nhập mã giảm giá (Coupon) và tự động tính toán tổng tiền (Subtotal/Total).
![Cart](./readme_img/Screenshot%202026-03-24%20151214.png)

### 5. Khám phá thêm (Promo Banner & New Arrival)
Các banner quảng cáo được thiết kế xen kẽ với kỹ thuật bố cục hình ảnh sắc nét, giới thiệu các bộ sưu tập mới nhất (PlayStation 5, Nước hoa, Loa,...).
![New Arrival](./readme_img/Screenshot%202026-03-24%20151104.png)

## Công nghệ sử dụng
* **Framework:** React 18 + Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** React Context API

## Cài đặt & Khởi chạy cục bộ

Làm theo các bước sau để chạy dự án trên máy tính của bạn:

1. Clone dự án về máy:
   ```bash
   git clone <link-repo-cua-ban>

2. Di chuyển vào thư mục dự án:
   ```bash
    cd E-Commerce-Web-Full-Function

3. Cài đặt các thư viện phụ thuộc (Dependencies):
   ```bash
    npm install

4. Khởi chạy server phát triển (Development Server):
   ```bash
    npm run dev