export default function StockPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Stock Buy/Sell</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Stock Name</label>
            <input
              type="text"
              placeholder="e.g., TCS"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input
              type="number"
              placeholder="e.g., 10"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Buy
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Sell
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
