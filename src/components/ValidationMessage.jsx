

const ValidationMessage = ({validationMessageFunct}) => {

  return (
    <p className="text-xs italic mt-2">{validationMessageFunct}</p>
  );
};

export default ValidationMessage;
