// frontend/src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList({ user }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div>
      <h1 style={{ color: 'white', marginBottom: '2rem' }}>All Blog Posts</h1>
      {posts.length === 0 ? (
        <div style={{ color: 'white', textAlign: 'center' }}>
          No posts yet. Be the first to create one!
        </div>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <Link to={`/post/${post._id}`} style={{ textDecoration: 'none' }}>
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <div className="post-meta">
              By {post.authorName} • {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className="post-content">
              {post.content.length > 200 
                ? post.content.substring(0, 200) + '...' 
                : post.content}
            </div>
            <Link to={`/post/${post._id}`} className="btn-primary">
              Read More →
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;