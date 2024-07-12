import React from "react";
import skills from "../../data/skills.json";
import { getImage } from "../../utils";
import technologies from "../../data/technology.json";

import styles from "./Experience.module.css";

const Experience = () => {
    return (
        <section className={styles.container} id="skills">
            <div className={styles.content}>
                <div className={styles.content1}>
                    <h2 className={styles.title}>Skills</h2>
                    <div className={styles.skills}>
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img
                                            src={getImage(skill.imageSrc)}
                                            alt={skill.title}
                                        />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>
                    {/* <ul className={styles.history}>
                {
                    history.map((historyItem,id )=> {
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImage(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                            <div className={styles. historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experience,id)=>{
                                    return <li key={id}>{experience}</li>
                                })}</ul>
                            </div>
                        </li>
                    })
                }
            </ul> */}
                </div>
                <div className={styles.content2}>
                    <h2 className={styles.title}>Technology</h2>
                    <div className={styles.skills}>
                        {technologies.map((skill, id) => {
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img
                                            src={getImage(skill.imageSrc)}
                                            alt={skill.title}
                                        />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
