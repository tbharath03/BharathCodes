import React from "react";
import { getImage } from "../../utils";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import styles from "./Hero.module.css";

const Hero = () => {
    const [typewriterText] = useTypewriter({
        words: ["Full Stack Developer/>", "Programmer/>"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    });

    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Bharath</h1>
                <p className={styles.typewriter}>
                    I am a
                    <span className={styles.typewriterText}>
                        {` <` + typewriterText}
                    </span>
                    <span>
                        <Cursor />
                    </span>
                </p>
                <p className={styles.description}>
                    I am a motivated and versatile individual, always eager to
                    take on new challenges. With a passion for learning I am
                    dedicated to delivering high-quality results. With a
                    positive attitude and a growth mindset, I am ready to make a
                    meaningful contribution and achieve great things.
                </p>
                <div className={styles.buttons}>
                    <a
                        href="https://www.linkedin.com/in/tbharath07/"
                        className={styles.contactBtn}
                    >
                        <img src={getImage("contact/linkedinIcon.png")} />
                    </a>
                    <a
                        href="https://github.com/tbharath03"
                        className={styles.contactBtn}
                    >
                        <img src={getImage("contact/githubIcon.png")} />
                    </a>
                    <a
                        href="https://leetcode.com/u/tbharath07/"
                        className={styles.contactBtn}
                    >
                        <img src={getImage("contact/leetcodeIcon.png")} />
                    </a>
                </div>
            </div>
            <img
                className={styles.heroImg}
                src={getImage("hero/heroImage2.png")}
                alt="Hero image of me"
            />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};

export default Hero;
