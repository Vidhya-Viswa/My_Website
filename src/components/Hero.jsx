import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-16">
        <img className= "mx-auto rounded-lg shadow-lg w-[350px] " src="https://tse1.mm.bing.net/th/id/OIP.HX9OpIKb8a5a2A7mbdowcAHaE8?pid=Api&P=0&h=180" alt="Hero Image" />
        <h2 className="text-3xl font-bold mt-4">🎨 Build Amazing UIs with React & Vite</h2>
        <p className="text-gray-600 mt-2">Fast, Lightweight, and modern frontend development.</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition mt-4">🚀 Get Started</button>
    </section>
  )
}

export default Hero