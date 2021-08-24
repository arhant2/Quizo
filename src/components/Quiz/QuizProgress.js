import styles from './QuizProgress.module.css';

const QuizProgress = () => {
  return (
    <div className={styles.progress}>
      <span className={`${styles.progressEach} ${styles.progressEachVisited}`}>
        1
      </span>
      <span className={`${styles.progressEach} ${styles.progressEachDone}`}>
        2
      </span>
      <span className={`${styles.progressEach} ${styles.progressEachDone}`}>
        3
      </span>
      <span className={`${styles.progressEach} ${styles.progressEachVisited}`}>
        4
      </span>
      <span className={styles.progressEach}>5</span>
      <span className={styles.progressEach}>6</span>
      <span className={styles.progressEach}>7</span>
      <span className={`${styles.progressEach} ${styles.progressEachNow}`}>
        8
      </span>
      <span className={styles.progressEach}>9</span>
      <span className={styles.progressEach}>10</span>
      <span className={styles.progressEach}>11</span>
      <span className={styles.progressEach}>12</span>
      <span className={styles.progressEach}>13</span>
      <span className={styles.progressEach}>14</span>
      <span className={styles.progressEach}>15</span>
    </div>
  );
};

export default QuizProgress;
