import NavLink from "../../PatchWrappers/NavLinkDowngrade";
import moduleClasses from "./MessagesUserItem.module.css";

const MessagesUserItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={moduleClasses.userContainer}>
            <img src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg" alt="" className={moduleClasses.userAvatar}></img>
            <NavLink to={path} activeClassName={moduleClasses.active} className={moduleClasses.user}>{props.name}</NavLink>
        </div>
    )
}

export default MessagesUserItem;