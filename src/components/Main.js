import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'
import './Main.css'
import Navbar from './Navbar';

function Main() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://www.reddit.com/r/reactjs.json')
      .then(res => setPosts(res.data.data.children))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, posts]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app">
        <Navbar/>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="cards-container">
        {filteredPosts.map(post => (
          <Card
            key={post.data.id}
            title={post.data.title}
            // selfText={post.data.selftext_html}
            // url={post.data.url}
            // score={post.data.score}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
