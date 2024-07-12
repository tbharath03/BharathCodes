import React from "react";
import { getImage } from "../../utils";

import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImage("contact/emailIcon.png")}
                        alt="email-icon"
                    />
                    <a href="mailto:topajibharath07@gmail.com">
                        topajibharath07@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImage("contact/linkedinIcon.png")}
                        alt="linkedin-icon"
                    />
                    <a href="https://www.linkedin.com/in/tbharath07/">
                        linkedin.com/tbharath07
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImage("contact/githubIcon.png")}
                        alt="github-icon"
                    />
                    <a href="https://github.com/tbharath03">
                        github.com/tbharath03
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;
