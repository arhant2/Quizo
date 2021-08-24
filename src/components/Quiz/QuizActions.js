import Button from '../../utils/Button/Button';
import styles from './QuizActions.module.css';

const QuizActions = () => {
  return (
    <div className={styles.actions}>
      <Button color='red' className={styles.action}>
        &larr; Prev
      </Button>
      <Button color='blue' className={styles.action}>
        Next &rarr;
      </Button>
    </div>
  );
};

export default QuizActions;
