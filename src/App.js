import Navbar from './components/Navbar/Navbar';
import Quiz from './pages/Quiz/Quiz';
import LandingPage from './pages/LandingPage/LandingPage';
import Instructions from './pages/Instructions/Instructions';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar />
        <Quiz />
        {/* <LandingPage /> */}
        {/* <Instructions /> */}
      </div>
    </div>
  );
};

export default App;
