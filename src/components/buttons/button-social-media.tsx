import { StyledButtonSocialMedia } from "../styles/buttons-styles";

type ButtonSocialMediaType = {
  onClick: () => any,
  text: string
}

const ButtonSocialMedia = ({onClick, text}: ButtonSocialMediaType) => {
  return(
    <StyledButtonSocialMedia
      onClick={onClick}
    >{text}</StyledButtonSocialMedia>
  );
};

export default ButtonSocialMedia;