export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-8">
      {/* Cột thông tin liên hệ */}
      <div className="w-full md:w-1/3 shadow-md p-8 rounded">
        <div className="border-b pb-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-red-500 text-white p-2 rounded-full">📞</span>
            <h3 className="font-bold">Call To Us</h3>
          </div>
          <p className="text-sm mb-2">We are available 24/7, 7 days a week.</p>
          <p className="text-sm font-medium">Phone: +8801611112222</p>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-red-500 text-white p-2 rounded-full">✉️</span>
            <h3 className="font-bold">Write To Us</h3>
          </div>
          <p className="text-sm mb-2">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
        </div>
      </div>

      {/* Cột Form gửi tin nhắn */}
      <div className="w-full md:w-2/3 shadow-md p-8 rounded">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input type="text" placeholder="Your Name *" className="bg-gray-100 p-3 rounded outline-none" required />
          <input type="email" placeholder="Your Email *" className="bg-gray-100 p-3 rounded outline-none" required />
          <input type="tel" placeholder="Your Phone *" className="bg-gray-100 p-3 rounded outline-none" required />
          <textarea placeholder="Your Message" className="bg-gray-100 p-3 rounded outline-none md:col-span-3 h-40" />
        </form>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white px-10 py-4 rounded hover:bg-red-600 transition">Send Message</button>
        </div>
      </div>
    </div>
  );
}