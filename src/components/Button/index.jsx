
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const FormButton = ({ text, cancelOnClick, saveOnClick, backgroundColor }) => {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: backgroundColor,
    '&:hover': {
      backgroundColor: backgroundColor,
    },
    width: 150,
  }));

    return (
      <div>
          <ColorButton onClick={saveOnClick ? saveOnClick: cancelOnClick} variant="contained" disableElevation>{text}</ColorButton >
      </div>
    )
}

export default FormButton;