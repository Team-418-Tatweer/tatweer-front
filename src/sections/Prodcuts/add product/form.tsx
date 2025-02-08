import { FaCloudUploadAlt } from "react-icons/fa";

const ProductInfoForm = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl border border-blue-200">
        <h2 className="text-lg font-semibold mb-4">Product infos</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="rawMaterials" className="block text-sm font-medium text-gray-700">
              Raw Materials needed
            </label>
            <input
              type="text"
              id="rawMaterials"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Name ( Ex: blue summer shirt.. )"
            />
          </div>
          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
              Product category
            </label>
            <select
              id="productCategory"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Please select a category..</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Type something"
            />
          </div>
          <div>
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
              Product price
            </label>
            <input
              type="text"
              id="productPrice"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Please enter the price ( Ex: 100 DZD )"
            />
          </div>
          <div>
            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FaCloudUploadAlt className="text-primary text-3xl mx-auto" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                  >
                    <span>Drag and drop a file here or click</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700">
              Product quantity
            </label>
            <input
              type="text"
              id="productQuantity"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Please enter a number ( Ex: 10 )"
            />
          </div>
          <div>
            <label htmlFor="warehouseConcerned" className="block text-sm font-medium text-gray-700">
              Warehouse concerned
            </label>
            <input
              type="text"
              id="warehouseConcerned"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Please enter a number ( Ex: 10 )"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Add product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoForm;
