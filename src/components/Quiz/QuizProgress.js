import QuizProgressEach from './QuizProgressEach';
import styles from './QuizProgress.module.css';

const QuizProgress = () => {
  return (
    <div className={styles.progress}>
      <QuizProgressEach progress='visited'> 1 </QuizProgressEach>
      <QuizProgressEach progress='attempted'> 2 </QuizProgressEach>
      <QuizProgressEach progress='attempted'> 3 </QuizProgressEach>
      <QuizProgressEach progress='visited'> 4 </QuizProgressEach>
      <QuizProgressEach> 5 </QuizProgressEach>
      <QuizProgressEach> 6 </QuizProgressEach>
      <QuizProgressEach> 7 </QuizProgressEach>
      <QuizProgressEach progress='current'> 8 </QuizProgressEach>
      <QuizProgressEach> 9 </QuizProgressEach>
      <QuizProgressEach> 10 </QuizProgressEach>
      <QuizProgressEach> 11 </QuizProgressEach>
      <QuizProgressEach> 12 </QuizProgressEach>
      <QuizProgressEach> 13 </QuizProgressEach>
      <QuizProgressEach> 14 </QuizProgressEach>
      <QuizProgressEach> 15 </QuizProgressEach>
    </div>
  );
};

export default QuizProgress;
