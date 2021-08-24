import styles from './LandingPageHeader.module.css';

const LandingPageHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Choose a quiz to begin</h1>
      <p className={styles.description}>
        Choose from our handpicked quizzes and test yourself, have fun
      </p>
    </header>
  );
};

export default LandingPageHeader;
