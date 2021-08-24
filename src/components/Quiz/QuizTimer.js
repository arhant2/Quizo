import SvgIcon from '../../utils/SvgIcon/SvgIcon';
import styles from './QuizTimer.module.css';

const QuizTimer = () => {
  return (
    <div className={styles.timer}>
      <SvgIcon icon='clock' className={styles.timerIcon} />
      <div className={styles.timerAct}>
        1:45:00
        <span className={styles.timerRemaining}>Remaining</span>
      </div>
    </div>
  );
};

export default QuizTimer;
