import { makeStyles } from "@mui/styles";
import * as colors from "../../assets/styles/Colors";
import { FaceIcon, ArrowIcon } from "../../assets/images";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useStyles = makeStyles((theme) => ({
  main: {
    margin: -10,
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    ["@media (min-width: 780px)"]: {
      // eslint-disable-line no-useless-computed-key
      margin: -10,
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "100vh",
      backgroundColor: colors.white,
    },
  },
  column1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    paddingBottom: 50,
    paddingTop: '10%',
    ["@media (min-width: 780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "column",
      fontFamily: "Roboto, Helvetica, sans-serif",
      backgroundColor: colors.yellow,
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  column2: {
    paddingTop: '10%',
    ["@media (min-width: 780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.white,
      width: "60vw",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  container: {
    height: "100vh",
    border: "1px solid black",
    fontSize: 30,
    textAlign: "center",
  },
  containerTall: {
    minHeight: 250,
  },
  header: {
    fontSize: 35,
    color: colors.charcoalGrey,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    color: colors.charcoalGrey,
    fontWeight: "400",
    textAlign: "center",
    whiteSpace: "pre-line",
    width: "65%",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.charcoalGrey,
    display: "flex",
    justifyContent: "center",
    marginTop: "12%",
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: "center",
    transform: [{ rotate: '180deg' }],
  },
  image: {
    marginBottom: "15%",
  },
  button: {
    display: "flex",
    flexDirection: "column",
  },
  arrow: {
    transform: [{ rotate: "0deg" }],
  },
}));

const MainLayout = ({
  children,
  backgroundColorClass,
  setIsAnimated,
  isAnimated,
}) => {
  const classes = useStyles();

  let rotation = !isAnimated ? 0 : 180;

  let mobileRotation = !isAnimated ?  270: 90;

  const matches = useMediaQuery('(min-width:600px)');


  return (
    <div className={classes.main}>
      <div className={classes.column1}>
        <img className={classes.image} src={FaceIcon} alt="" />
        <p className={classes.header}>Front-end challenge!</p>
        <p className={classes.description}>
          This is a design you will need to code to impress us.
        </p>
        <a
          onClick={() => setIsAnimated(!isAnimated)}
          className={classes.iconContainer}
        >
          <img
            style={matches ? {transform: `rotate(${rotation}deg)`}: {transform: `rotate(${mobileRotation}deg)`}}
            className={classes.icon}
            src={ArrowIcon}
            alt=""
          />
        </a>
      </div>
      <div
        className={
          backgroundColorClass ? backgroundColorClass : classes.column2
        }>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
