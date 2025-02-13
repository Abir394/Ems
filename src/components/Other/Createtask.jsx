

const Createtask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap w-full items-start justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                type="date"
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
              <input
                type="text"
                placeholder="Employee name"
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                type="text"
                placeholder="Design, Dev, etc."
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 flex flex-col">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              className="w-full h-32 text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500"
            ></textarea>

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default Createtask