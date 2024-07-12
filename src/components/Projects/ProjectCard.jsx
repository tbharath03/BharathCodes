import React from "react";
import { getImage } from "../../utils";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.container}>
            <img
                src={getImage(project.imageSrc)}
                alt={`${project.title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                {project.demo && (
                    <a className={styles.link} href={project.demo}>
                        Demo
                    </a>
                )}
                <a className={styles.link} href={project.source}>
                    Source
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
