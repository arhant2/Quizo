import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Quiz from './pages/Quiz/Quiz';
import LandingPage from './pages/LandingPage/LandingPage';
import Instructions from './pages/Instructions/Instructions';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar />
        <Main>
          {/* <Quiz /> */}
          {/* <LandingPage /> */}
          <Instructions />
        </Main>
      </div>
    </div>
  );
};

export default App;
