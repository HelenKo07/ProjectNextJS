import styles from "./page.module.css";
import course from "./course.json";
import { Lessons } from "./lesson";

async function getAllCourse(): Promise <typeof course> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(course), 3000)
  })
}

export default async function Home() {
  const courses = await getAllCourse();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{courses.title}</h1>
      <ul className={styles.lessons}>
        {courses.lessons.map((lesson) => {
          return (
          <li key={lesson.name} className={styles.lesson}>
            <Lessons name={lesson.name} subtitle={lesson.subtitle} points={lesson.points}/>
            
          </li>
          );
        })}
      </ul>
    </main>
  )
}