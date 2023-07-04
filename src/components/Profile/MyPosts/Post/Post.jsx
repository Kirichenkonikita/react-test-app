import moduleClasses from './Post.module.css'

function Post(props) {
  return (
    <div className={moduleClasses.container}>
      <img className={moduleClasses.avatar} src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png' alt="postImage"></img>
      <div>Post 1, {props.postObj.text}</div>
      <button className={moduleClasses.like}>like</button>
      <button className={moduleClasses.dislike}>dislike</button>
    </div>
  );
}

export default Post