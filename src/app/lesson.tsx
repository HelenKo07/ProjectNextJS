"use client";

import { useState } from "react";
import styles from "./lesson.module.css";

type LessonProps = {
  name: string;
  subtitle: string;
  points: string[];
};

type LikeState = "unset" | "Liked" | "Dislike";

export function Lessons({ name, subtitle, points }: LessonProps) {
    const [likeState, setLikeState] = useState<LikeState>("unset");
  //   const [disState, setDisState] = useState<LikeState>("unset");
    const setLike = () => setLikeState("Liked");
  //   const setDislike = () => setDisState("Dislike");

  return (
    <details>
      <summary>
        <h2 className={styles.name}>{name}</h2>
      </summary>
      <p className={styles.subtitle}>
        {subtitle}
        <button className={styles.buttonLike} type="button" onClick={setLike}>
          {likeState === "unset" ? "like" : likeState}
        </button>{" "}
        {/* <button className={styles.buttonDis} type="button" onClick={setDislike}>
          {disState === "unset" ? "dislike" : disState}
        </button> */}
      </p>
      <ol className={styles.points}>
        {points.map((point, index) => {
          return (
            <li key={index} className={styles.point}>
              {point}
            </li>
          );
        })}
      </ol>
    </details>
  );
}
