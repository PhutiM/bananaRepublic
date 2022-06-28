
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const FormButton = ({ text, cancelOnClick, saveOnClick, backgroundColor }) => {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: backgroundColor,
    width: '100%',
    marginTop: 20,
    height: 50,
    marginBottom: 40,
    '&:hover': {
      backgroundColor: backgroundColor,
    },
    ["@media (min-width: 780px)"]: {
      color: 'white',
      backgroundColor: backgroundColor,
      width: 150,
      height: 50,
      '&:hover': {
        backgroundColor: backgroundColor,
      },
    }
  }));

    return (
      <div>
          <ColorButton onClick={saveOnClick ? saveOnClick: cancelOnClick} variant="contained" disableElevation>{text}</ColorButton >
      </div>
    )
}

export default FormButton;