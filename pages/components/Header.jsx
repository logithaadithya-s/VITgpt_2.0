import { FaReddit, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaReddit className="text-3xl text-reddit-orange" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">VIT University</h1>
                <p className="text-xs text-gray-500">r/VIT</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search VIT discussions..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border focus:outline-none focus:ring-2 focus:ring-vit-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-reddit-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              Create Post
            </button>
            
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <FaBell className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100 cursor-pointer">
              <FaUserCircle className="text-2xl text-gray-500" />
              <span className="hidden md:block text-sm font-medium">VIT Student</span>
              <IoIosArrowDown className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header