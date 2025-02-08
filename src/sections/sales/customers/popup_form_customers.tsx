import React from "react";

type CustomerFormProps = {
  onSubmit: (event: React.FormEvent) => void;
};

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg border-2 border-blue-500">
        <h2 className="text-2xl font-semibold mb-2">Customer</h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
        </p>
        
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="full-name">Name Customer</label>
            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="full-name" placeholder="Full name" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone</label>
            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="phone" placeholder="Phone" />
          </div>
          
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="purchases">Purchases</label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="purchases" placeholder="Total Purchases" />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="order-quantity">Order Quantity</label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="order-quantity" placeholder="Order Quantity" />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">Address</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="address" placeholder="Input address"></textarea>
          </div>
          
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
            Save Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
