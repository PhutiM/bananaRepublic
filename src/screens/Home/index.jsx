import { useState } from "react";
import { makeStyles } from "@mui/styles";
import * as colors from "../../assets/styles/Colors";
import MainLayout from "../../components/Layout";
import Form from "./Content/Form";
import SimpleText from "./Content/SimpleText";

export const useStyles = makeStyles((theme) => ({
  main: {
    margin: -10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100vh",
    backgroundColor: colors.white,
  },
  column1: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto, Helvetica, sans-serif",
    backgroundColor: colors.yellow,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
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
  },
  image: {
    marginBottom: "15%",
  },
  button: {
    display: "flex",
    flexDirection: "column",
  },
  backgroundColorClass: {
    backgroundColor: colors.tangerine,
    alignItems: "center",
    justifyContent: "center",
  },
  myWorld: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Roboto, Helvetica, sans-serif",
  },
  description: {
    fontSize: 18,
    width: "85%",
    alignText: "center",
    fontWeight: "400",
  },
  column2: {
    paddingTop: '10%',
    backgroundColor: colors.tangerine,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto, Helvetica, sans-serif",
    ["@media (min-width: 780px)"]: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.tangerine,
      width: "60%",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Roboto, Helvetica, sans-serif",
    },
  },
  column1: {
    backgroundColor: colors.charcoalGrey,
    display: "flex",
    flexDirection: "column",
    paddingTop: '10%',
    ["@media (min-width: 780px)"]: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.white,
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  simpleTextArea: {
    alignSelf: "center",
    marginLeft: "20% ",
    fontFamily: "Roboto, Helvetica, sans-serif",
    marginBottom: "30%"
  },
}));

const Home = () => {
  const classes = useStyles();

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <MainLayout
      backgroundColorClass={!isAnimated ? classes.column2 : classes.column1}
      setIsAnimated={setIsAnimated}
      isAnimated={isAnimated}>
      {!isAnimated ? (
        <SimpleText classes={classes} />
      ) : (
        <Form classes={classes} />
      )}
    </MainLayout>
  );
};

export default Home;
