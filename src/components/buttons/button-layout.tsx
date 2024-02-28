import { StyledButtonLayout } from "../styles/buttons-styles";

type ButtonType = {
  onClick: () => any,
  text: string
};

const ButtonLayout = ({ onClick, text }: ButtonType) => {
  return(
    <StyledButtonLayout
      onClick={onClick}
    >{text}</StyledButtonLayout>
  );
};

export default ButtonLayout;