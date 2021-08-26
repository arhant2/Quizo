import SvgIcon from '../../utils/SvgIcon/SvgIcon';
import styles from './LandingPageCard.module.css';

const LandingPageCard = (props) => {
  return (
    <div
      className={`${styles.card} ${props.selected ? styles.cardSelected : ''}`}
      onClick={props.onClick}
    >
      <SvgIcon icon={props.icon} className={styles.icon} />
      <p className='text'>{props.text}</p>
    </div>
  );
};

export default LandingPageCard;
