import { FaPrint, FaPaperPlane } from "react-icons/fa";

interface OrderItem {
  serial: number;
  description: string;
  quantity: number;
  unitPrice: number;
  totalCost: number;
}

const orderItems: OrderItem[] = [
  { serial: 1, description: "Children Toy", quantity: 2, unitPrice: 20, totalCost: 80 },
  { serial: 2, description: "Makeup", quantity: 2, unitPrice: 50, totalCost: 100 },
  { serial: 3, description: "Asus Laptop", quantity: 5, unitPrice: 100, totalCost: 500 },
  { serial: 4, description: "Iphone X", quantity: 4, unitPrice: 1000, totalCost: 4000 },
];

const OrderDetails = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center  p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Order Details</h1>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Completed</span>
        </div>
        <div className="mb-6">
          <p>Order ID: 21</p>
          <p>Client: Nibras Bouzidi</p>
          <p>Purchase Date: 10 February 2025</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-2 px-4 border-b">Serial No.</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Unit Price</th>
                <th className="py-2 px-4 border-b">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr key={item.serial}>
                  <td className="py-2 px-4 border-b text-center">{item.serial}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b text-center">{item.quantity}</td>
                  <td className="py-2 px-4 border-b text-center">${item.unitPrice}</td>
                  <td className="py-2 px-4 border-b text-center">${item.totalCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Notes:</p>
          <p>idk wtf to write in here, mohim note que le prakmzejamzlejamzlejaze</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="font-semibold">Total = $4680</p>
          <div className="flex space-x-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center">
              <FaPrint className="mr-2" /> Print
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center">
              <FaPaperPlane className="mr-2" /> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;