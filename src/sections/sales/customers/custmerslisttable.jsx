import React from "react";
import {  FaFilter, FaSort, FaSearch, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {[ FaFilter, FaSort].map((Icon, index) => (
          <button key={index}  className="text-white text-2xl">
            <Icon />
            
          </button>
        ))}
      </div>
      <div className="relative">
        <input
          className="pl-10 pr-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none"
          placeholder="Search"
          type="text"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
};

const TableRow = ({ customer }) => {
  return (
    <tr className="border-b items-center">
      <td className="py-2 px-4 items-center ">{customer.id}</td>
      <td className="py-2 px-4 flex items-center space-x-2">
        <img
          alt="Customer profile picture"
          className="w-8 h-8 rounded-full"
          height="30"
          src={customer.image}
          width="30"
        />
        <span>{customer.name}</span>
      </td>
      <td className="py-2 px-4">{customer.contact}</td>
      <td className="py-2 px-4">{customer.address}</td>
      <td className="py-2 pb-2 px-4 flex items-center space-x-2">
        <FaCalendarAlt />
        <span>{customer.orders} Orders</span>
      </td>
      <td className="py-2 px-4 text-blue-500">{customer.total}$</td>
    </tr>
  );
};

const Table = ({ customers }) => {
  return (
    <div className="flex-1 overflow-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-blue-100">
            {['Customer ID', 'Customer Full Name', 'Contact info', 'Address', 'Order Quantity', 'Total $'].map((heading) => (
              <th key={heading} className="py-2 px-4 text-left">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <TableRow key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between border-t">
      <span>1 - 10 of 13 Pages</span>
      <div className="flex items-center space-x-2">
        <button className="text-gray-500">
          <FaChevronLeft />
        </button>
        <span>1</span>
        <button className="text-gray-500">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const Customers_table = () => {
  const customers = [
    {
      id: "#CM9801",
      name: "Nibras Norelislam Bouzidi",
      contact: "05xxxxxx05",
      address: "Meadow Lane Oakland",
      orders: 50,
      total: 12312,
      image:
        "https://storage.googleapis.com/a1aa/image/CME2K5fE1jp9oi-wBzVsY1jTUeJvRrHFkt9OkEuO7Go.jpg",
    },
    {
        id: "#CM9801",
        name: "Nibras Norelislam Bouzidi",
        contact: "05xxxxxx05",
        address: "Meadow Lane Oakland",
        orders: 50,
        total: 12312,
        image:
          "https://storage.googleapis.com/a1aa/image/CME2K5fE1jp9oi-wBzVsY1jTUeJvRrHFkt9OkEuO7Go.jpg",
      },
      {
        id: "#CM9801",
        name: "Nibras Norelislam Bouzidi",
        contact: "05xxxxxx05",
        address: "Meadow Lane Oakland",
        orders: 50,
        total: 12312,
        image:
          "https://storage.googleapis.com/a1aa/image/CME2K5fE1jp9oi-wBzVsY1jTUeJvRrHFkt9OkEuO7Go.jpg",
      },
      {
        id: "#CM9801",
        name: "Nibras Norelislam Bouzidi",
        contact: "05xxxxxx05",
        address: "Meadow Lane Oakland",
        orders: 50,
        total: 12312,
        image:
          "https://storage.googleapis.com/a1aa/image/CME2K5fE1jp9oi-wBzVsY1jTUeJvRrHFkt9OkEuO7Go.jpg",
      },
    {
      id: "#CM9802",
      name: "Sohaib Zouambia",
      contact: "05xxxxxx05",
      address: "Larry San Francisco",
      orders: 50,
      total: 12312,
      image:
        "https://storage.googleapis.com/a1aa/image/CME2K5fE1jp9oi-wBzVsY1jTUeJvRrHFkt9OkEuO7Go.jpg",
    },
    // Add more customer objects here
  ];

  return (
    <div className="bg-gray-100  flex flex-col">
      <Header />
      <Table customers={customers} />
      <Footer />
    </div>
  );
};

export default Customers_table;
