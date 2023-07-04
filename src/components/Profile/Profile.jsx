import AvatarBlock from './AvatarBlock/AvatarBlock';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import moduleClasses from './Profile.module.css'

function Profile(props) {
  return (
    <main className={moduleClasses.outherContainer}>

      <img className={moduleClasses.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE2v46Kxg4KgFj0UsxwurHzZNDAdq-mvQEw&usqp=CAU' alt="avatar"></img>

      <AvatarBlock />
      
      <MyPostsContainer/>

    </main>
  );
}

export default Profile