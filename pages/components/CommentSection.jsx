import { useState } from 'react'
import { FaArrowUp, FaArrowDown, FaReply, FaUserCircle, FaEllipsisH } from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'

const CommentSection = ({ comments, onAddReply }) => {
  const [replyTo, setReplyTo] = useState(null)
  const [replyContent, setReplyContent] = useState('')

  const handleSubmitReply = (parentId) => {
    if (replyContent.trim()) {
      onAddReply(parentId, {
        id: Date.now(),
        author: "You",
        content: replyContent,
        timestamp: new Date().toISOString(),
        votes: 0,
        replies: []
      })
      setReplyContent('')
      setReplyTo(null)
    }
  }

  const Comment = ({ comment, depth = 0 }) => {
    const [showReply, setShowReply] = useState(false)
    const [userVote, setUserVote] = useState(0)

    const handleVote = (type) => {
      if (userVote === 0) {
        setUserVote(type === 'up' ? 1 : -1)
      } else if (userVote === 1 && type === 'down') {
        setUserVote(-1)
      } else if (userVote === -1 && type === 'up') {
        setUserVote(1)
      }
    }

    return (
      <div className={`${depth > 0 ? 'ml-6 border-l-2 border-gray-200 pl-4' : ''}`}>
        <div className="bg-white rounded-lg p-3 mb-2">
          {/* Comment Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="text-gray-400" />
              <span className="text-sm font-medium">u/{comment.author}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaEllipsisH />
            </button>
          </div>

          {/* Comment Content */}
          <p className="text-gray-700 text-sm mb-3">{comment.content}</p>

          {/* Comment Actions */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => handleVote('up')}
                className={`p-1 ${userVote === 1 ? 'text-reddit-orange' : 'text-gray-400 hover:text-reddit-orange'}`}
              >
                <FaArrowUp />
              </button>
              <span className="text-xs font-medium min-w-4 text-center">{comment.votes}</span>
              <button 
                onClick={() => handleVote('down')}
                className={`p-1 ${userVote === -1 ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
              >
                <FaArrowDown />
              </button>
            </div>
            <button 
              onClick={() => {
                setShowReply(!showReply)
                setReplyTo(comment.id)
              }}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm"
            >
              <FaReply />
              <span>Reply</span>
            </button>
          </div>

          {/* Reply Form */}
          {showReply && replyTo === comment.id && (
            <div className="mt-3">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write your reply..."
                className="w-full px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-1 focus:ring-vit-blue"
                rows="2"
              />
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  onClick={() => setShowReply(false)}
                  className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmitReply(comment.id)}
                  className="px-3 py-1 bg-vit-blue text-white text-sm rounded hover:bg-blue-700"
                >
                  Reply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="space-y-2">
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Comments ({comments.length})</h3>
      <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default CommentSection