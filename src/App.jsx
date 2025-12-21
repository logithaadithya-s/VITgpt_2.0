import { useState, useEffect } from 'react'
import Header from "../pages/components/Header"
import Sidebar from "../pages/components/Slider"
import PostCard from '../pages/components/Postcard'
import CreatePost from '../pages/components/Createpost'
import { FaPlus, FaReddit, FaFire, FaNewspaper, FaRocket } from 'react-icons/fa'

// Mock data for posts
const initialPosts = [
  {
    id: 1,
    title: "Placement Season 2024 begins - Official Guidelines",
    author: "VIT_PlacementCell",
    community: "VIT",
    content: "The placement season for the academic year 2023-24 has officially started. All students are requested to register on the placement portal and complete their profiles. Important dates and company schedules will be announced soon.",
    votes: 245,
    comments: [
      {
        id: 1,
        author: "Student2024",
        content: "Any updates on Google's recruitment drive?",
        timestamp: "2024-01-10T10:30:00Z",
        votes: 42
      },
      {
        id: 2,
        author: "SeniorAlumni",
        content: "Pro tip: Start preparing DSA and System Design now!",
        timestamp: "2024-01-10T11:45:00Z",
        votes: 89
      }
    ],
    timestamp: "2024-01-10T09:00:00Z",
    tags: ["Placements", "Official", "Important"],
    isOfficial: true,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Best hostel recommendations for freshers?",
    author: "Fresher2024",
    community: "VIT Vellore",
    content: "I'll be joining VIT Vellore this July. Looking for hostel suggestions - preferably ones with good WiFi and food. Any recommendations from seniors?",
    votes: 187,
    comments: [
      {
        id: 1,
        author: "HostelSenior",
        content: "Go for Block 5 or 7. Best facilities and closer to academic blocks.",
        timestamp: "2024-01-09T14:20:00Z",
        votes: 56
      }
    ],
    timestamp: "2024-01-09T12:15:00Z",
    tags: ["Hostel", "Freshers", "Campus Life"],
    isOfficial: false
  },
  {
    id: 3,
    title: "Riviera 2024 - What to expect?",
    author: "CulturalCommittee",
    community: "VIT",
    content: "Riviera 2024 is going to be bigger than ever! We have international artists, tech exhibitions, and cultural performances lined up. Early bird passes available now.",
    votes: 312,
    comments: [
      {
        id: 1,
        author: "FestLover",
        content: "Can't wait! The lineup looks amazing this year.",
        timestamp: "2024-01-08T16:30:00Z",
        votes: 24
      },
      {
        id: 2,
        author: "Alumni2020",
        content: "Best memories from Riviera 2019. Miss those days!",
        timestamp: "2024-01-08T17:45:00Z",
        votes: 15
      }
    ],
    timestamp: "2024-01-08T15:45:00Z",
    tags: ["Events", "Riviera", "Cultural"],
    isOfficial: true,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Struggling with Data Structures course? Study group forming",
    author: "CSStudent",
    community: "VIT",
    content: "Looking for motivated students to form a study group for Data Structures. We'll solve problems daily and help each other with assignments. DM if interested!",
    votes: 89,
    comments: [
      {
        id: 1,
        author: "StudyBuddy",
        content: "I'm in! I'm available after 6 PM daily.",
        timestamp: "2024-01-07T18:20:00Z",
        votes: 12
      }
    ],
    timestamp: "2024-01-07T16:00:00Z",
    tags: ["Academics", "Study Group", "Data Structures"],
    isOfficial: false
  },
  {
    id: 5,
    title: "VIT Chennai Campus Tour - Virtual Session",
    author: "AdmissionsCell",
    community: "VIT Chennai",
    content: "We're hosting a virtual campus tour for prospective students this Saturday. Register on our website to join and get your questions answered live.",
    votes: 156,
    comments: [],
    timestamp: "2024-01-06T11:30:00Z",
    tags: ["Admissions", "Virtual Tour", "Official"],
    isOfficial: true
  }
];

const vitSubredditLink = "https://www.reddit.com/r/VIT/";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [filter, setFilter] = useState('hot');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleVote = (postId, type) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          const newVotes = type === 'up' ? post.votes + 1 : post.votes - 1;
          return { ...post, votes: newVotes };
        }
        return post;
      })
    );
  };

  const handleAddComment = (postId, comment) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          return { 
            ...post, 
            comments: [...post.comments, comment]
          };
        }
        return post;
      })
    );
  };

  const handleCreatePost = (newPost) => {
    const post = {
      id: posts.length + 1,
      ...newPost,
      votes: 0,
      comments: [],
      timestamp: new Date().toISOString(),
      author: "CurrentUser"
    };
    
    setPosts(prevPosts => [post, ...prevPosts]);
    setShowCreatePost(false);
  };

  const handleSortPosts = (sortType) => {
    setFilter(sortType);
    let sortedPosts = [...posts];
    
    switch(sortType) {
      case 'hot':
        sortedPosts.sort((a, b) => b.votes - a.votes);
        break;
      case 'new':
        sortedPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
      case 'top':
        sortedPosts.sort((a, b) => b.comments.length - a.comments.length);
        break;
      default:
        break;
    }
    
    setPosts(sortedPosts);
  };

  // Sort posts initially by hot
  useEffect(() => {
    handleSortPosts('hot');
  }, []);

  return (
    <div className="min-h-screen bg-reddit-gray">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Create Post Button for Mobile */}
            <div className="lg:hidden mb-4">
              <button 
                onClick={() => setShowCreatePost(true)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-reddit-orange text-white rounded-md font-semibold hover:bg-orange-600 transition"
              >
                <FaPlus />
                Create Post
              </button>
            </div>

            {/* Filter/Sort Options */}
            <div className="bg-white rounded-md p-4 mb-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex space-x-1 bg-gray-100 rounded-md p-1">
                  <button 
                    onClick={() => handleSortPosts('hot')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${filter === 'hot' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <FaFire className={filter === 'hot' ? 'text-reddit-orange' : 'text-gray-500'} />
                    <span className="text-sm font-medium">Hot</span>
                  </button>
                  <button 
                    onClick={() => handleSortPosts('new')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${filter === 'new' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <FaNewspaper className={filter === 'new' ? 'text-reddit-orange' : 'text-gray-500'} />
                    <span className="text-sm font-medium">New</span>
                  </button>
                  <button 
                    onClick={() => handleSortPosts('top')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${filter === 'top' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <FaRocket className={filter === 'top' ? 'text-reddit-orange' : 'text-gray-500'} />
                    <span className="text-sm font-medium">Top</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-vit-blue w-full lg:w-64"
                  />
                  <FaReddit className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onVote={handleVote}
                    onComment={handleAddComment}
                  />
                ))
              ) : (
                <div className="bg-white rounded-md p-8 text-center shadow-sm">
                  <FaReddit className="text-4xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No discussions found</h3>
                  <p className="text-gray-500 mb-4">Try different search terms or create a new post</p>
                  <button 
                    onClick={() => setShowCreatePost(true)}
                    className="px-6 py-2 bg-reddit-orange text-white rounded-md font-medium hover:bg-orange-600 transition"
                  >
                    Create First Post
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Sidebar />
            
            {/* Create Post Button for Desktop */}
            <div className="hidden lg:block mt-6">
              <div className="bg-white rounded-md p-4 shadow-sm">
                <h3 className="font-semibold mb-3">Create a post</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Share your thoughts, questions, or experiences with the VIT community
                </p>
                <button 
                  onClick={() => setShowCreatePost(true)}
                  className="w-full py-3 bg-reddit-orange text-white rounded-md font-semibold hover:bg-orange-600 transition"
                >
                  Create Post
                </button>
              </div>
            </div>

            {/* Official Reddit Link Highlight */}
            <div className="mt-6 bg-gradient-to-r from-reddit-orange to-orange-500 rounded-md p-4 text-white shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Join the Official r/VIT</h3>
                <FaReddit className="text-2xl" />
              </div>
              <p className="text-sm mb-4 opacity-90">
                Connect with 68.4k+ VIT students and alumni on Reddit
              </p>
              <a 
                href={vitSubredditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 bg-white text-reddit-orange text-center rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Visit Official Reddit
              </a>
            </div>

            {/* Trending Now */}
            <div className="mt-6 bg-white rounded-md p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-reddit-orange rounded-full"></div>
                <h3 className="font-bold">Trending Now</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Placement statistics 2023 released",
                  "New library timings announced",
                  "Tech symposium registrations open",
                  "Hostel fee structure updated",
                  "Internship opportunities for CSE"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group cursor-pointer">
                    <span className="text-sm font-semibold text-gray-400">{index + 1}</span>
                    <span className="text-sm group-hover:text-reddit-orange transition">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePost
          onCreatePost={handleCreatePost}
          onClose={() => setShowCreatePost(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-reddit-dark text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <FaReddit className="text-2xl text-reddit-orange" />
                <span className="text-xl font-bold">VIT Discussions</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Unofficial Reddit-style platform for VIT University
              </p>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>This is a fan-made platform. Official VIT Reddit:</p>
              <a 
                href={vitSubredditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-reddit-orange hover:underline"
              >
                reddit.com/r/VIT/
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-500">
            <p>© 2024 VIT Discussions. Not affiliated with VIT University or Reddit.</p>
            <p className="mt-1">Made with ❤️ for the VIT community</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;