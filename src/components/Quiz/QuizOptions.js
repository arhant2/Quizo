import styles from './QuizOptions.module.css';

const QuizOptions = () => {
  return (
    <div className={styles.options}>
      <div className={styles.option}>
        <div className={styles.optionCnt}>A</div>
        <div className={styles.optionValue}>React.js</div>
        {/* <div className={styles.optionValue}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          assumenda beatae minima? Soluta hic nesciunt ipsam non alias doloribus
          ipsa, explicabo mollitia, distinctio consequatur minus aliquam
          laudantium necessitatibus qui velit, ad rem molestias. Repellat
          veniam, delectus deleniti quis aut saepe odit hic possimus itaque,
          quam repellendus libero nisi, omnis dolore?
        </div> */}
      </div>
      <div className={styles.option}>
        <div className={styles.optionCnt}>B</div>
        <div className={styles.optionValue}>Vue.js</div>
      </div>
      <div className={styles.option}>
        <div className={styles.optionCnt}>C</div>
        <div className={styles.optionValue}>Angular.js</div>
      </div>
      <div className={styles.option}>
        <div className={styles.optionCnt}>D</div>
        <div className={styles.optionValue}>All of the above</div>
      </div>
    </div>
  );
};

export default QuizOptions;
