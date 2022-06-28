import { makeStyles } from "@mui/styles";
import * as colors from "../../assets/styles/Colors";
import InputLabel from "@mui/material/InputLabel";

export const useStyles = makeStyles((theme) => ({
  radioIcons: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "grey",
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
      // marginLeft: 20,
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
    },
  },
  icons: {
    display: "flex",
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    alignSelf: "flex-start",
    fontFamily: "Roboto, Helvetica, sans-serif",
    float: "right",
  },
  icons: {
    display: "flex",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.paleGrey,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
  },
  iconContainerSelected: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.cloudyBlue,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
  },
  radioIcons: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  desc: {
    marginLeft: 10,
    marginRight: 10,
    color: colors.cloudyBlue,
  },
  iconMain: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
  },
}));

const RadioIcons = ({ label, items, isSelected, setIsSelected }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.label}>
      <InputLabel>{label}</InputLabel>
      </div>
      <div className={classes.icons}>
        {items.map((item, index) => (
          <div className={classes.iconMain}>
            <a
              onClick={() => setIsSelected(index)}
              className={
                index === isSelected
                  ? classes.iconContainerSelected
                  : classes.iconContainer
              }
            >
              <img className={classes.radioIcons} src={item.icon} />
            </a>
            <p className={classes.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RadioIcons;
