import { useState } from 'react'
import { 
  FaTimes, 
  FaImage, 
  FaLink, 
  FaPoll, 
  FaNewspaper,
  FaUniversity
} from 'react-icons/fa'

const CreatePost = ({ onCreatePost, onClose }) => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    community: 'VIT',
    tags: [],
    isOfficial: false
  })

  const communities = ['VIT', 'VIT Vellore', 'VIT Chennai', 'VIT Bhopal', 'VIT AP']
  const tagsList = ['Placements', 'Academics', 'Campus Life', 'Admissions', 'Events', 'Hostel', 'Fests']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postData.title.trim() && postData.content.trim()) {
      onCreatePost(postData)
      setPostData({
        title: '',
        content: '',
        community: 'VIT',
        tags: [],
        isOfficial: false
      })
    }
  }

  const handleTagToggle = (tag) => {
    setPostData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Create Post</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Community Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Community
            </label>
            <div className="flex flex-wrap gap-2">
              {communities.map(community => (
                <button
                  key={community}
                  type="button"
                  onClick={() => setPostData(prev => ({ ...prev, community }))}
                  className={`flex items-center px-3 py-2 rounded-full text-sm ${
                    postData.community === community
                      ? 'bg-vit-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaUniversity className="mr-2" />
                  r/{community}
                </button>
              ))}
            </div>
          </div>

          {/* Post Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Type
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                <FaNewspaper className="mr-2" />
                Text
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                <FaImage className="mr-2" />
                Image
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                <FaLink className="mr-2" />
                Link
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                <FaPoll className="mr-2" />
                Poll
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={postData.title}
              onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-vit-blue"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <textarea
              placeholder="What do you want to discuss?"
              value={postData.content}
              onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))}
              className="w-full px-4 py-3 border rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-vit-blue resize-none"
              required
            />
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {tagsList.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    postData.tags.includes(tag)
                      ? 'bg-reddit-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Official Post Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="official"
              checked={postData.isOfficial}
              onChange={(e) => setPostData(prev => ({ ...prev, isOfficial: e.target.checked }))}
              className="mr-2"
            />
            <label htmlFor="official" className="text-sm text-gray-700">
              Mark as official VIT post
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-reddit-orange text-white rounded-md hover:bg-orange-600 font-medium"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost