import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* 顶部导航 */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#EA5543]">MyBrand</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-[#EA5543]">Features</a>
          <a href="#contact" className="hover:text-[#EA5543]">Contact</a>
        </nav>
      </header>

      {/* Hero 区块 */}
      <section className="text-center py-20 bg-[#fff6f5] px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyBrand</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          We help you build better websites, faster. Start your journey with us today.
        </p>
        <a href="#contact" className="bg-[#EA5543] text-white px-6 py-3 rounded-xl hover:bg-[#190805] transition">
          Get Started
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 text-center bg-white">
        <h3 className="text-3xl font-bold mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Fast', 'Modern', 'Scalable'].map((item, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-md">
              <h4 className="text-xl font-semibold text-[#EA5543] mb-2">{item}</h4>
              <p className="text-gray-600">Build with confidence using {item.toLowerCase()} tools.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact 表单 */}
      <section id="contact" className="bg-gray-50 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" required className="w-full p-3 border rounded" />
            <input type="email" placeholder="Your Email" required className="w-full p-3 border rounded" />
            <textarea placeholder="Your Message" rows={4} required className="w-full p-3 border rounded"></textarea>
            <button type="submit" className="bg-[#EA5543] text-white px-6 py-3 rounded hover:bg-[#190805] transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  )
}
