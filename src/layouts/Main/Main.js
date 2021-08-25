import styles from './Main.module.css';

const Main = (props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Main;
