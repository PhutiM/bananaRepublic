import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from '@mui/material/styles';
import * as colors from "../../assets/styles/Colors";

export const useStyles = makeStyles((theme) => ({
  textInput: {
    display: "flex",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    width: "100%",
    alignSelf: "flex-end",
    fontFamily: "Roboto, Helvetica, sans-serif",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: 20,
    ["@media (min-width: 780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginLeft: 20,
    },
  },
  label: {
    marginLeft: '3%',
    marginTop: "2%",
    ["@media (min-width: 780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
      marginRight: 20,
      alignSelf: "flex-start",
      textAlign: "left",
      width: "40%",
      fontFamily: "Roboto, Helvetica, sans-serif",
      marginTop: "8%",
    },
  },
}));

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: colors.paleGrey,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

const LabledText = ({ label, placeHolder, value, formValues, setFormValues, name }) => {
  const classes = useStyles();

  const handleChange = (e) => {    
    setFormValues({...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div className={classes.main}>
      <div className={classes.label}>
        <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
      </div>

      <div className={classes.textInput}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <RedditTextField
            value={value}
            name={name}
            onChange={handleChange}
            id="outlined-basic"
            label={placeHolder}
            variant="filled"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default LabledText;
