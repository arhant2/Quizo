import SvgIcon from '../../utils/SvgIcon/SvgIcon';
import styles from './Timer.module.css';

const Timer = () => {
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

export default Timer;
