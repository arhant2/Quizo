import QuizProgress from '../../components/Quiz/QuizProgress';
import Timer from '../../components/Timer/Timer';
import QuizQuestion from '../../components/Quiz/QuizQuestion';
import QuizOptions from '../../components/Quiz/QuizOptions';
import Button from '../../utils/Button/Button';
import Actions from '../../components/Actions/Actions';

const Quiz = () => {
  return (
    <>
      <QuizProgress />
      <Timer />
      <QuizQuestion />
      <QuizOptions />
      <Actions align='right'>
        <Button color='red'>&larr; Prev</Button>
        <Button color='blue'>Next &rarr;</Button>
      </Actions>
    </>
  );
};

export default Quiz;
