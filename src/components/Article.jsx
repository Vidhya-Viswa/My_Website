import React from 'react'

const Article = () => {
  return (
    <article className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">📰 Latest News</h2>
      <div className="flex shadow-lg bg-white p-4 rounded-lg">
        <img className="rounded-lg" src="https://tse4.mm.bing.net/th/id/OIP.7slPHZoS9tuUTrQAxOM0kgHaFA?pid=Api&P=0&h=180" alt="News" />
        <div className="ml-4">
            <h3 className="text-xl font-semibold">Breaking: New React Features Released</h3>
            <p className="text-gray-600 mt-2">React 18 introduces several new features, including automatic batching and new APIs for concurrent rendering.</p>
        </div>
      </div>

    </article>
  )
}

export default Article