import classes from "./layout.module.css"

import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = (props) => {
    return (
        <div className={classes.app}>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;