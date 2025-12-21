import { 
    FaReddit, 
    FaFire, 
    FaNewspaper, 
    FaRocket, 
    FaChartLine,
    FaUniversity,
    FaGraduationCap,
    FaUsers,
    FaQuestionCircle,
    FaCalendarAlt,
    FaExternalLinkAlt
  } from 'react-icons/fa'
  
  const Sidebar = () => {
    const vitSubredditLink = "https://www.reddit.com/r/VIT/"
    
    const communities = [
      { name: "VIT Vellore", members: "45.2k", icon: <FaUniversity /> },
      { name: "VIT Chennai", members: "12.4k", icon: <FaUniversity /> },
      { name: "VIT Bhopal", members: "8.7k", icon: <FaUniversity /> },
      { name: "VIT AP", members: "6.3k", icon: <FaUniversity /> },
    ]
  
    const topics = [
      { name: "Placements", icon: <FaChartLine /> },
      { name: "Academics", icon: <FaGraduationCap /> },
      { name: "Campus Life", icon: <FaUsers /> },
      { name: "Admissions", icon: <FaQuestionCircle /> },
      { name: "Events", icon: <FaCalendarAlt /> },
    ]
  
    return (
      <aside className="w-64 space-y-6">
        {/* About Community */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <FaReddit className="text-2xl text-reddit-orange" />
            <h2 className="text-lg font-bold">r/VIT</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Official discussion forum for VIT University students, alumni, and faculty. Share experiences, ask questions, and connect with the VIT community.
          </p>
          
          {/* Reddit Link Section */}
          <div className="mb-4 p-3 bg-reddit-orange bg-opacity-10 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Official Reddit</span>
              <FaExternalLinkAlt className="text-xs" />
            </div>
            <a 
              href={vitSubredditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 bg-reddit-orange text-white text-center rounded-md text-sm font-medium hover:bg-orange-600 transition"
            >
              Visit r/VIT on Reddit
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Join 68.4k members on the official subreddit
            </p>
          </div>
  
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Created</span>
              <span className="text-sm font-medium">Jan 15, 2012</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Members</span>
              <span className="text-sm font-medium">68.4k</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Online</span>
              <span className="text-sm font-medium text-green-600">2.4k</span>
            </div>
          </div>
        </div>
  
        {/* Topics */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h3 className="font-bold mb-3">Popular Topics</h3>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                <span className="text-reddit-orange">{topic.icon}</span>
                <span className="text-sm">{topic.name}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* VIT Communities */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h3 className="font-bold mb-3">VIT Communities</h3>
          <ul className="space-y-2">
            {communities.map((community, index) => (
              <li key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-vit-blue">{community.icon}</span>
                  <div>
                    <p className="text-sm font-medium">r/{community.name}</p>
                    <p className="text-xs text-gray-500">{community.members} members</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-xs font-medium rounded-full">
                  Join
                </button>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Trending Today */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <div className="flex items-center space-x-2 mb-3">
            <FaFire className="text-reddit-orange" />
            <h3 className="font-bold">Trending Today</h3>
          </div>
          <ol className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item} className="text-sm hover:text-reddit-orange cursor-pointer">
                {item}. Placement season 2024 begins
              </li>
            ))}
          </ol>
        </div>
      </aside>
    )
  }
  
  export default Sidebar