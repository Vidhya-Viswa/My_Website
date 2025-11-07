import React from 'react'

const Header = () => {
  return (
    <header className="h-96 bg-cover bg-center flex items-center justify-center text-white"
        style = {{
            backgroundImage: "url('https://tse4.mm.bing.net/th/id/OIP.htEOKnhzwgosNhr931Z_awHaDG?pid=Api&P=0&h=180')",
        }}>
        <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4">🚀 Welcome to my Website</h1>
    </header>
  )
}

export default Header


