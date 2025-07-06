// components/CommentsSection.tsx
"use client"
import { useState, useEffect } from 'react'
import { usePrivy, useWallets } from '@privy-io/react-auth'
import { toast } from 'react-hot-toast'

interface Comment {
  id: string
  content: string
  createdAt: string
  author: {
    id: string
    username: string
    avatar: string | null
  }
}

// Add this date formatting function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }
  return date.toLocaleString('en-US', options)
}

export default function CommentSection({ postId, initialComments = [] }: { 
  postId: string, 
  initialComments?: Comment[] 
}) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { ready, authenticated, user } = usePrivy()
  const { wallets } = useWallets()
  
  const walletAddress = wallets?.[0]?.address

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments/${postId}`)
      const data = await res.json()
      setComments(data)
    } catch (error) {
      console.error('Failed to fetch comments:', error)
      toast.error('Failed to load comments')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newComment.trim()) {
      toast.error('Comment cannot be empty')
      return
    }

    if (!authenticated || !walletAddress) {
      toast.error('Please connect your wallet to comment')
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: newComment,
          authorId: walletAddress,
          postId
        })
      })

      if (!res.ok) throw new Error('Failed to post comment')

      setNewComment('')
      await fetchComments()
      toast.success('Comment posted!')
    } catch (error) {
      console.error('Error posting comment:', error)
      toast.error('Failed to post comment')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (initialComments.length === 0) {
      fetchComments()
    }
  }, [postId])

  return (
    <div className="mt-6 border-t border-cyan-400/20 pt-4">
      <h4 className="text-sm font-medium text-cyan-300 mb-3">
        Comments ({comments.length})
      </h4>
      
      {authenticated && (
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={authenticated ? "Add a comment..." : "Connect wallet to comment"}
            className="w-full bg-gray-800/50 border border-cyan-400/20 rounded p-2 text-sm text-cyan-100 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 disabled:opacity-50"
            rows={2}
            disabled={!authenticated}
          />
          <button
            type="submit"
            disabled={isLoading || !authenticated}
            className={`mt-2 bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-xs rounded hover:bg-cyan-400/20 transition-colors ${
              isLoading || !authenticated ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      )}

      <div className="space-y-3">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-cyan-400/10 pb-3">
              <div className="flex items-start gap-2">
                <img 
                  src={comment.author.avatar || '/default-avatar.png'} 
                  alt={comment.author.username}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-xs font-medium text-cyan-300">
                    {comment.author.username}
                  </p>
                  <p className="text-sm text-cyan-100">{comment.content}</p>
                  {/* Fixed date formatting here */}
                  <p className="text-xs text-cyan-400/60 mt-1">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-cyan-400/60 py-2">No comments yet</p>
        )}
      </div>

      {!authenticated && ready && (
        <div className="text-center py-4">
          <button
            onClick={() => toast('Connect your wallet to comment')}
            className="text-xs text-cyan-400 hover:text-cyan-300 underline"
          >
            Sign in to comment
          </button>
        </div>
      )}
    </div>
  )
}