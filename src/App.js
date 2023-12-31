import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import React from 'react';


function App(props) {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='mainContainer'>
            <Routes>
              <Route path="/profile" element={<Profile profileComponentState={props.state.profileComponentState} myPostsComponentState={props.state.myPostsComponentState} dispatch={props.dispatch} />} />
              <Route path="/messages/*" element={<MessagesContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>

          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
