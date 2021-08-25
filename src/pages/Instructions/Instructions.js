import Header from '../../components/Header/Header';
import Timer from '../../components/Timer/Timer';
import InstructionsMain from '../../components/Instructions/InstructionsMain';
import Button from '../../utils/Button/Button';
import Actions from '../../components/Actions/Actions';

const Instructions = () => {
  return (
    <>
      <Header
        heading='General Instructions'
        description='Please read the general instructions carefully and then click on begin quiz to begin'
      />
      <Timer />
      <InstructionsMain />
      <Actions>
        <Button color='blue'>Begin Quiz&nbsp;&nbsp;&nbsp;&#10148;</Button>
      </Actions>
    </>
  );
};

export default Instructions;
