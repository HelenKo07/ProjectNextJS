import styles from './page.module.css';
import course from './course.json';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <ul> 
        {course.lessons.map((lesson)=> {
          return <li key={lesson.name} className={styles.lesson}>
            <h2 className={styles.name}>{lesson.name}</h2>
            <p className={styles.title}>{lesson.title}</p>
          </li>
          })}
        
      </ul>
    </main>
  );
}
