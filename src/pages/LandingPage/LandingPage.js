import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Main from '../../layouts/Main/Main';
import Header from '../../components/Header/Header';
import LandingPageOptions from '../../components/LandingPage/LandingPageOptions';
import Button from '../../utils/Button/Button';
import Actions from '../../layouts/Actions/Actions';
import quizActions from '../../store/quiz-actions';

const LandingPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const dispatch = useDispatch();

  const selectQuizHandler = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const submitHandler = () => {
    dispatch(quizActions.startQuiz(selectedQuiz));
  };

  return (
    <Main>
      <Header
        heading='Choose a quiz to begin'
        description='Choose from our handpicked quizzes and test yourself, have fun'
      />
      <LandingPageOptions
        selectedQuiz={selectedQuiz}
        onSelectQuiz={selectQuizHandler}
      />
      <Actions>
        <Button
          disabled={selectedQuiz === ''}
          onClick={submitHandler}
          color='blue'
        >
          Start Quiz&nbsp;&nbsp;&nbsp;&#10148;
        </Button>
      </Actions>
    </Main>
  );
};

export default LandingPage;
