import { StyledMainButton } from "../styles/buttons-styles";

type MainButtonType = {
  onClick: () => any,
  text: string
};

const MainButton = ({ onClick, text }: MainButtonType) => {
  return(
    <StyledMainButton
      onClick={onClick}
    >{text}</StyledMainButton>
  );
};

export default MainButton;