import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImage } from "../../utils";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                {/* {`/BharathCodes`} */}
                <img src="/assets/logoinv.png" className={styles.logo} />
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImage("nav/closeIcon.png")
                            : getImage("nav/menuIcon.png")
                    }
                    alt="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen && styles.menuOpen
                    }`}
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
