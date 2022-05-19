import classes from "./header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src="http://via.placeholder.com/200x70" alt="logo" />
            </div>
            <nav>
                <ul className={classes.mainNavList}>
                    <li className={classes.mainNavListItem}>
                        <a className={classes.mainNavListItemLink}>Home</a>
                    </li>
                    <li className={classes.mainNavListItem}>
                        <a className={classes.mainNavListItemLink}>Category 1</a>
                    </li>
                    <li className={classes.mainNavListItem}>
                        <a className={classes.mainNavListItemLink}>Category 2</a>
                    </li>
                    <li className={classes.mainNavListItem}>
                        <a className={classes.mainNavListItemLink}>Category 3</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;