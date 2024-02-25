import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleAddPost = () => {
    if (newPost.trim() !== "" || newImage) {
      const newTweetObject = {
        id: posts.length + 1,
        content: newPost,
        image: newImage ? URL.createObjectURL(newImage) : null,
        timestamp: new Date().toLocaleString(),
      };

      setPosts([newTweetObject, ...posts]);
      setNewPost("");
      setNewImage(null);
    }
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="create a post ..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="mt-2"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleAddPost}
        >
          Post
        </button>
      </div>

      <ul className="list-none p-0">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-300 py-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">{post.timestamp}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
            <p className="mb-2">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="POST" className="w-full rounded" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
