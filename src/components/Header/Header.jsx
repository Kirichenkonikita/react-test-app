import Clock from "./Clock/Clock";
import moduleClasses from "./Header.module.css";

function Header() {
    return (
        <header className={`${moduleClasses.outherContainer} ${moduleClasses.bright}`}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' className={moduleClasses[`header__image`]}></img>
            <Clock />
        </header>
    )
}

export default Header;