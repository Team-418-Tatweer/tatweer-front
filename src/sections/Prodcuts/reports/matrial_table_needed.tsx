import React from "react";
import { FaChevronRight } from "react-icons/fa";

const materials = [
  {
    name: "Lekhcheb",
    description: "( wlh tiri brk )",
    supplier: "MOH DJELFA",
    availability: "YES",
    quantity: 14,
    image: "https://storage.googleapis.com/a1aa/image/E9jpRKDyfHxHA7IyNr_xR6XdUKE3bD7xG9odEMz0NpE.jpg",
  },
  {
    name: "Lekhcheb",
    description: "( wlh tiri brk )",
    supplier: "MOH DJELFA",
    availability: "NO",
    quantity: 14,
    image: "https://storage.googleapis.com/a1aa/image/E9jpRKDyfHxHA7IyNr_xR6XdUKE3bD7xG9odEMz0NpE.jpg",
  },
];

const MaterialsTable: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Materials Needed Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Materials</th>
                <th className="px-4 py-2 text-left text-gray-600">Supplier</th>
                <th className="px-4 py-2 text-left text-gray-600">Availability</th>
                <th className="px-4 py-2 text-left text-gray-600">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={material.image}
                      alt="Material"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{material.name}</div>
                      <div className="text-gray-500 text-sm">{material.description}</div>
                    </div>
                  </td>
                  <td className="px-4 py-2">{material.supplier}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        material.availability === "YES" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {material.availability}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <span className="mr-3">{material.quantity}</span>
                    <FaChevronRight className="text-gray-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaterialsTable;
