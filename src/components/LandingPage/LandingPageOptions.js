import Button from '../../utils/Button/Button';
import LandingPageCard from './LandingPageCard';
import styles from './LandingPageOptions.module.css';

const LandingPageOptions = () => {
  return (
    <>
      <div className={styles.options}>
        <LandingPageCard icon='html' text='Html' />
        <LandingPageCard icon='react' text='React.js' />
        <LandingPageCard icon='node-js' text='Node.js' selected={true} />
        <LandingPageCard icon='mongodb' text='DBMS' />
        <LandingPageCard icon='windows' text='OS' />
        <LandingPageCard icon='cpp' text='DS and Algo' />
      </div>

      <div className={styles.actions}>
        <Button color='blue'>Start Quiz&nbsp;&nbsp;&nbsp;&#10148;</Button>
      </div>
    </>
  );
};

export default LandingPageOptions;
