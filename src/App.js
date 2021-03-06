import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Post from './Post';

function App() {
  return (
    <div className="app">
        <Header />

      <div className="app__body">
          <Sidebar />
          <Feed />
          <Post />
          {/* Widgets */}
      </div>
      
    </div>
  );
}

export default App;
