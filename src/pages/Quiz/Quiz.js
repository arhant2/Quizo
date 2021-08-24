import QuizProgress from '../../components/Quiz/QuizProgress';
import QuizTimer from '../../components/Quiz/QuizTimer';
import QuizQuestion from '../../components/Quiz/QuizQuestion';
import QuizOptions from '../../components/Quiz/QuizOptions';
import QuizActions from '../../components/Quiz/QuizActions';

const Quiz = () => {
  return (
    <>
      <QuizProgress />
      <QuizTimer />
      <QuizQuestion />
      <QuizOptions />
      <QuizActions />
    </>
  );
};

export default Quiz;
