import LandingPageCard from './LandingPageCard';
import styles from './LandingPageOptions.module.css';

const LandingPageOptions = () => {
  return (
    <div className={styles.options}>
      <LandingPageCard icon='html' text='Html' />
      <LandingPageCard icon='react' text='React.js' />
      <LandingPageCard icon='node-js' text='Node.js' selected={true} />
      <LandingPageCard icon='mongodb' text='DBMS' />
      <LandingPageCard icon='windows' text='OS' />
      <LandingPageCard icon='cpp' text='DS and Algo' />
    </div>
  );
};

export default LandingPageOptions;
