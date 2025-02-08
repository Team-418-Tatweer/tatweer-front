
const ProductDistribution = () => {
  const locations = [
    { name: "Oran", pieces: 68 },
    { name: "Adrar", pieces: 68 },
    { name: "Alger", pieces: 68 },
  ];

  const warehouses = [
    { name: "Oran - WS", pieces: 68 },
    { name: "Adrar - WS", pieces: 68 },
    { name: "Alger - WS", pieces: 68 },
  ];

  return (
    <div className="bg-gray-100 p-4 flex">
      <div className="max-w-7xl flex  gap-4  mx-auto">
        {/* Product Distribution Over Region */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold">Product Distribution Over Region</h2>
            <a className="text-primary" href="#">
              See more &gt;
            </a>
          </div>
          <div className="flex space-x-4">
            {locations.map((location) => (
              <div
                key={location.name}
                className="bg-primary text-white rounded-lg p-4 flex flex-col items-center w-32"
              >
<img alt='x'/>              
  <div className="text-center">
                  <p className="font-semibold">{location.name}</p>
                  <p>{location.pieces} pieces</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Distribution Over Warehouse */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Product Distribution Over Warehouse</h2>
            <a className="text-primary" href="#">
              See more &gt;
            </a>
          </div>
          <div className="flex space-x-4">
            {warehouses.map((warehouse) => (
              <div
                key={warehouse.name}
                className="bg-primary text-white rounded-lg p-4 flex flex-col items-center w-32"
              >
<img alt='x'/>              
                <div className="text-center">
                  <p className="font-semibold">{warehouse.name}</p>
                  <p>{warehouse.pieces} pieces</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDistribution;
