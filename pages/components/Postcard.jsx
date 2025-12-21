import { useState } from 'react'
import { 
  FaArrowUp, 
  FaArrowDown, 
  FaCommentAlt, 
  FaShare, 
  FaBookmark,
  FaEllipsisH,
  FaUserCircle,
  FaAward
} from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'

const PostCard = ({ post, onVote, onComment }) => {
  const [userVote, setUserVote] = useState(0)
  const [showComments, setShowComments] = useState(false)

  const handleVote = (type) => {
    if (userVote === 0) {
      setUserVote(type === 'up' ? 1 : -1)
      onVote(post.id, type)
    } else if (userVote === 1 && type === 'down') {
      setUserVote(-1)
      onVote(post.id, 'down')
    } else if (userVote === -1 && type === 'up') {
      setUserVote(1)
      onVote(post.id, 'up')
    }
  }

  const handleAddComment = () => {
    const comment = prompt("Enter your comment:")
    if (comment) {
      onComment(post.id, {
        id: post.comments.length + 1,
        author: "You",
        content: comment,
        timestamp: new Date().toISOString(),
        votes: 0
      })
    }
  }

  return (
    <div className="bg-white rounded-md shadow-sm mb-4 hover:shadow-md transition-shadow">
      <div className="flex">
        {/* Vote Section */}
        <div className="w-12 bg-gray-50 rounded-l-md flex flex-col items-center py-3">
          <button 
            onClick={() => handleVote('up')}
            className={`p-1 rounded ${userVote === 1 ? 'text-reddit-orange' : 'text-gray-400 hover:text-reddit-orange'}`}
          >
            <FaArrowUp className="text-xl" />
          </button>
          <span className={`font-bold my-1 ${post.votes >= 0 ? 'text-gray-900' : 'text-blue-600'}`}>
            {post.votes}
          </span>
          <button 
            onClick={() => handleVote('down')}
            className={`p-1 rounded ${userVote === -1 ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
          >
            <FaArrowDown className="text-xl" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="text-2xl text-gray-400" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">r/{post.community}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    Posted by u/{post.author}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
                  </span>
                </div>
                {post.isOfficial && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-vit-blue text-white mt-1">
                    <FaAward className="mr-1" /> Official
                  </span>
                )}
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaEllipsisH />
            </button>
          </div>

          {/* Post Title */}
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>

          {/* Post Content */}
          <p className="text-gray-700 mb-4">{post.content}</p>

          {/* Post Image (if any) */}
          {post.imageUrl && (
            <div className="mb-4">
              <img 
                src={post.imageUrl} 
                alt="Post content" 
                className="max-h-96 rounded-md object-cover w-full"
              />
            </div>
          )}

          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setShowComments(!showComments)}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
              >
                <FaCommentAlt />
                <span className="text-sm">{post.comments.length} Comments</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                <FaShare />
                <span className="text-sm">Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                <FaBookmark />
                <span className="text-sm">Save</span>
              </button>
            </div>
            
            {/* Add Comment Button */}
            <button 
              onClick={handleAddComment}
              className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-full"
            >
              Add Comment
            </button>
          </div>

          {/* Comments Section */}
          {showComments && post.comments.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-semibold mb-3">Comments ({post.comments.length})</h4>
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-md p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <FaUserCircle className="text-gray-400" />
                        <span className="text-sm font-medium">u/{comment.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostCard