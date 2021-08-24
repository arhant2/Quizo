import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Quiz from './pages/Quiz/Quiz';
import LandingPage from './pages/LandingPage/LandingPage';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Navbar />
        <Main>
          <Quiz />
          {/* <LandingPage /> */}
        </Main>
      </div>
    </div>
  );
};

export default App;
