import React from 'react'

const TableHeading = [
    {
        colName: "Avatar",
        icon: "👤",
    },
    {
        colName: "Name",
        icon: "🧑",
    },
    {
        colName: "Status",
        icon: "✅",
    }
];

const tableData = [
    {
        avatar: "https://tse3.mm.bing.net/th/id/OIP.FHKjmPNLXC1ZL4NhlPtrUwAAAA?pid=Api&P=0&h=180",
        name: "Vidhya",
        status: "Active",
    },
    {
        avatar: "https://tse3.mm.bing.net/th/id/OIP.FHKjmPNLXC1ZL4NhlPtrUwAAAA?pid=Api&P=0&h=180",
        name: "Snega",
        status: "Inactive",
    },
];

const Table = () => {
  return (
    <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">📊 User Data</h2>
        <table className="min-w-full border border-collapse">
            <thead>
                <tr>
                    {TableHeading.map((heading) => (
                        <th key={heading.colName} className="bg-gray-300 border border-gray-400 px-4 py-2">
                            {heading.icon} {heading.colName}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((user, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">
                            <img width={50} height={50} src={user.avatar} alt="User Avatar" className="rounded-full" />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                        <td className={`border border-gray-300 px-4 py-2 ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>{user.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table