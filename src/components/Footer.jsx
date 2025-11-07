import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
        <p>🌐 © 2025 My Website. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
            <a href="" className="text-blue-400 hover:text-blue-600">💠Facebook</a>
            <a href="" className="text-blue-400 hover:text-blue-600">💬Twitter</a>
            <a href="" className="text-blue-400 hover:text-blue-600">🔯Instagram</a>
        </div>
    </footer>
  )
}

export default Footer