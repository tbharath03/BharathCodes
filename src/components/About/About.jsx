import React from "react";
import { getImage } from "../../utils";

import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImage("about/aboutImage.png")}
                    alt="me with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImage("about/cursorIcon.png")}
                            alt="cursor-icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I specialize in creating responsive websites
                                with HTML, CSS, and JavaScript. I use frameworks
                                like React.js to build user-friendly interfaces
                                that prioritize performance and design.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImage("about/serverIcon.png")}
                            alt="server-icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I engineer scalable backend solutions with
                                technologies like Java Spring and Node.js,
                                ensuring seamless performance and robust
                                functionality for dynamic web applications.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImage("about/uiIcon.png")} alt="ui-icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Programmer</h3>
                            <p>
                                I excel in solving complex problems using
                                efficient data structures and algorithms in
                                C/C++. With a strong grasp of DSA principles, I
                                innovate solutions that optimize performance and
                                deliver reliable outcomes.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
