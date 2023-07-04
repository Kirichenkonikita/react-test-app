import React from 'react';
import moduleClasses from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
  const myPostsArray = props.myPostsArray;
  const myPostsCurrentTextAreaValue = props.myPostsCurrentTextAreaValue;
  const onChangeSetValue = props.onChangeSetValue;
  const addMessage = props.addMessage;
  
  return (
    <div className="profile-posts-container">

      <h1 className="profile-posts-header">My posts</h1>

      <textarea value={myPostsCurrentTextAreaValue} onChange={event => onChangeSetValue(event)}></textarea>

      <button onClick={addMessage} className="profilePostsButton">Кнопочка</button>

      {myPostsArray.map(postObj => <Post postObj={postObj}/>)}
    </div>
  );
}

export default MyPosts