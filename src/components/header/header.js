import React from "react";
import style from "./index.module.scss";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className={style.pic}/>
            <Link to="child">Hello React</Link>
        </header>
    );
};

export default Header;