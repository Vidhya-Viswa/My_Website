import React from 'react'
import {
    FaBook, FaReact, FaRocket
} from "react-icons/fa"

const Links = [
    {
        name: "Vite Documentation",
        icon: <FaBook />,
        href: ""
    },
    {
        name: "React Guide",
        icon: <FaReact />,
        href: ""
    },
    {
        name: "Frontend Trends",
        icon: <FaRocket />,
        href: ""
    }
]

const Aside = () => {
  return (
    <aside className="p-6 bg-gray-200 rounded shadow-md">
        <h2 className="text-xl font-bold">📌 Related Links</h2>
        <ul className="space-y-2 mt-2">
            {Links.map((link) => (
                <li key={link.name}>
                    <a href={link.href} className="flex items-center text-blue-500 gap-1 hover:underline">
                        {link.icon} {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default Aside