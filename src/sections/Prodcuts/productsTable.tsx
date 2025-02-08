import { FaSearch, FaFilter, FaDownload, FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const products = [
  {
    id: "021231",
    name: "Beigi Coffee (Navy)",
    price: "$20.00",
    category: "category1",
    qty: 234,
    lastDate: "10/02/2025 at 8:25 PM",
    status: "Available",
    image: "https://storage.googleapis.com/a1aa/image/d9rGyb1qTzRHLFb2E0uC0jTmbPIoLty1n-M_PXyZx6s.jpg",
  },
  {
    id: "021232",
    name: "Beigi Coffee (Navy)",
    price: "$20.00",
    category: "category1",
    qty: 0,
    lastDate: "10/02/2025 at 8:25 PM",
    status: "Out of Stock",
    image: "https://storage.googleapis.com/a1aa/image/d9rGyb1qTzRHLFb2E0uC0jTmbPIoLty1n-M_PXyZx6s.jpg",
  },
];

const ProductTable = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search for id, name product"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            <FaFilter className="mr-2" /> Filter
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            <FaDownload className="mr-2" /> Export
          </button>
         <a href="/dashboard/products/add"> <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">
            <FaPlus className="mr-2" /> New Product
          </button>
          </a>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-2 px-4">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">QTY</th>
              <th className="py-2 px-4">Last Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={product.image}
                    alt="Product image"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <a href="#" className="text-primary">
                      {product.id}
                    </a>
                    <div>{product.name}</div>
                  </div>
                </td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.qty}</td>
                <td className="py-2 px-4">{product.lastDate}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      product.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-2 px-4 flex space-x-2">
                  <FaEye className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                  <FaEdit className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                  <FaTrash className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
