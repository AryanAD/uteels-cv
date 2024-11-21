const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex flex-row justify-between items-center px-8 py-4 bg-gradient-to-r from-green-400 via-green-300 to-lime-300 shadow-lg">
        {/* Logo and Heading */}
        <div className="flex items-center gap-4">
          <img
            src=""
            alt="CV Creator Logo"
            className="w-12 h-12 rounded-full bg-gray-200"
          />
          <h1 className="text-2xl font-bold uppercase text-white">
            CV Creator
          </h1>
        </div>

        {/* Navigation Menu */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-lg font-medium text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-medium text-white hover:text-gray-200 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg font-medium text-white hover:text-gray-200 transition duration-300"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <aside className="bg-gradient-to-b from-red-300 to-pink-200 w-1/3 h-screen p-8 flex flex-col gap-8">
          <h2 className="text-2xl font-bold uppercase text-gray-800 text-center">
            Create Your CV
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-6">
            {/* Input Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                className="p-3 rounded-lg shadow-md bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 outline-none transition duration-300"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-3 rounded-lg shadow-md bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 outline-none transition duration-300"
                type="email"
                placeholder="Email"
              />
              <input
                className="p-3 rounded-lg shadow-md bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 outline-none transition duration-300"
                type="tel"
                placeholder="Phone"
              />
              <input
                className="p-3 rounded-lg shadow-md bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 outline-none transition duration-300"
                type="text"
                placeholder="Address"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-1/2 mx-auto px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition duration-300 uppercase"
              type="submit"
            >
              Submit
            </button>
          </form>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          <h1 className="text-4xl font-bold text-gray-700">
            Welcome to CV Creator
          </h1>
          <p className="mt-4 text-gray-600">
            Use the form on the left to start creating your CV.
          </p>
        </main>
      </div>
    </>
  );
};

export default App;
