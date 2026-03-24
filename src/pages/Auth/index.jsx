import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Dùng để chuyển hướng trang sau khi đăng nhập

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập kiểm tra đăng nhập
    if (email && password) {
      alert(`Chào mừng quay trở lại, ${email}!`);
      navigate("/"); // Đăng nhập xong đẩy về trang chủ
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-32 mb-20 mt-10">
      <div className="w-full md:w-1/2 bg-[#CBE4E8] rounded-r-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x600" alt="Login" className="w-full object-cover" />
      </div>

      <div className="w-full md:w-1/2 px-4 max-w-md">
        <h1 className="text-4xl font-semibold mb-4">Log in to Exclusive</h1>
        <p className="mb-8">Enter your details below</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="Email or Phone Number" 
            className="border-b py-2 outline-none focus:border-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Lưu dữ liệu khi gõ
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border-b py-2 outline-none focus:border-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition">
              Log In
            </button>
            <button type="button" className="text-red-500 hover:underline text-sm">Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
}