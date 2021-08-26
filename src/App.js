import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Quiz from './pages/Quiz/Quiz';
import LandingPage from './pages/LandingPage/LandingPage';
import Instructions from './pages/Instructions/Instructions';
import Result from './pages/Result/Result';
import styles from './App.module.css';

const App = () => {
  const appState = useSelector((state) => state.appState);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar />
        {appState === 'inital' && <LandingPage />}
        {appState === 'starting' && <Instructions />}
        {appState === 'running' && <Quiz />}
        {appState === 'completed' && <Result />}
      </div>
    </div>
  );
};

export default App;
