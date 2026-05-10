// frontend/src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PostDetail({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/posts/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`/api/posts/${id}`);
        navigate('/');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await axios.post('/api/comments', {
        content: newComment,
        postId: id,
      });
      setComments([response.data, ...comments]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await axios.delete(`/api/comments/${commentId}`);
        setComments(comments.filter((c) => c._id !== commentId));
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    }
  };

  if (loading || !post) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          By {post.authorName} • {new Date(post.createdAt).toLocaleDateString()}
          {post.updatedAt !== post.createdAt && (
            <span> (Updated: {new Date(post.updatedAt).toLocaleDateString()})</span>
          )}
        </div>
        <div className="post-content" style={{ whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
        {user && user.id === post.author._id && (
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <Link to={`/edit/${post._id}`} className="btn-primary">
              Edit Post
            </Link>
            <button onClick={handleDeletePost} className="btn-danger">
              Delete Post
            </button>
          </div>
        )}
      </div>

      <div className="comments-section">
        <h3>Comments ({comments.length})</h3>
        {user ? (
          <form onSubmit={handleAddComment} style={{ marginBottom: '2rem' }}>
            <div className="form-group">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                rows="3"
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Post Comment
            </button>
          </form>
        ) : (
          <p>
            <Link to="/login">Login</Link> to leave a comment.
          </p>
        )}

        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="comment">
              <div className="comment-meta">
                <strong>{comment.authorName}</strong> • {new Date(comment.createdAt).toLocaleDateString()}
              </div>
              <div className="comment-content">{comment.content}</div>
              {user && user.id === comment.author._id && (
                <div className="comment-actions">
                  <button
                    onClick={() => handleDeleteComment(comment._id)}
                    className="btn-danger"
                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PostDetail;