import NavLink from "../PatchWrappers/NavLinkDowngrade";
import moduleClasses from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={moduleClasses.container}>
      <div><NavLink to="/profile" activeClassName={moduleClasses.active} className={moduleClasses.link}>Profile</NavLink></div>
      <div><NavLink to="/messages" activeClassName={moduleClasses.active} className={moduleClasses.link}>Messages</NavLink></div>
      <div><NavLink to="/news" activeClassName={moduleClasses.active} className={moduleClasses.link}>News</NavLink></div>
      <div><NavLink to="/music" activeClassName={moduleClasses.active} className={moduleClasses.link}>Music</NavLink></div>
      <div><NavLink to="/settings" activeClassName={moduleClasses.active} className={moduleClasses.link}>Settings</NavLink></div>
    </nav>
  );
}

export default Navbar
