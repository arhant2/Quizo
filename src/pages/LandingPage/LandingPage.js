import Header from '../../components/Header/Header';
import LandingPageOptions from '../../components/LandingPage/LandingPageOptions';
import Button from '../../utils/Button/Button';
import Actions from '../../components/Actions/Actions';

const LandingPage = () => {
  return (
    <>
      <Header
        heading='Choose a quiz to begin'
        description='Choose from our handpicked quizzes and test yourself, have fun'
      />
      <LandingPageOptions />
      <Actions>
        <Button color='blue'>Start Quiz&nbsp;&nbsp;&nbsp;&#10148;</Button>
      </Actions>
    </>
  );
};

export default LandingPage;
