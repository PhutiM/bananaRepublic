import { makeStyles } from "@mui/styles";
import * as colors from "../../../../assets/styles/Colors";
import Button from "../../../../components/Button";
import LabledText from "../../../../components/LabledText";
import RadioIcons from "../../../../components/RadioIcon";
import {
  CalenderIcon,
  FaceIcon,
  CardIcon,
  WhiteCardIcon,
  WhiteMarsSymbolIcon,
  MarsSymbolIcon,
  VenusSymbolIcon,
  WhiteVenusSymbolIcon,
} from "../../../../assets/images";
import { useSpring, animated as a } from "react-spring";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

export const useStyles = makeStyles((theme) => ({
  column1: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto, Helvetica, sans-serif",
    backgroundColor: colors.yellow,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  column2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
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
    // float: "right",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 20,
    ["@media (min-width: 780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "row",
      float: "right",
      marginTop: 20,
    },
  },
  buttonMarginRight: {
    marginRight: -20,
  },
  buttonMarginLeft: {
    marginLeft: 20,
  },
  formArea: {
    marginLeft: "20% ",
    fontFamily: "Roboto, Helvetica, sans-serif",
  },
}));

const Form = () => {
  const classes = useStyles();

  let initalState = {
    firstName: "",
    dob: "",
    email: "",
    mobile: "",
    customerNumber: "",
  };

  const [formValues, setFormValues] = useState(initalState);

  const clearForm = () => {
    setFormValues(initalState);
  };

  const animatedProps = useSpring({
    from: { marginTop: -200, opacity: 0 },
    opacity: 1,
    marginTop: 5,
    config: { mass: 1, tension: 150, friction: 10 },
  });

  const genderItems = [
    {
      desc: "Male",
      icon: MarsSymbolIcon,
    },
    {
      desc: "Female",
      icon: WhiteVenusSymbolIcon,
    },
  ];

  const membershipItems = [
    {
      desc: "Classic",
      icon: CardIcon,
    },
    {
      desc: "Silver",
      icon: CardIcon,
    },
    {
      desc: "Gold",
      icon: CardIcon,
    },
  ];

  return (
    <a.div style={{ ...animatedProps }} className={classes.formArea}>
      <LabledText
        name={"firstName"}
        value={formValues.firstName}
        label={"Name"}
        placeHolder={"Name"}
      />
      <RadioIcons items={genderItems} label={"Gender"} />
      <LabledText
        value={formValues.dob}
        label={"Date of Birth"}
        placeHolder={"Date of Birth"}
        name={"dob"}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <LabledText
        value={formValues.email}
        label={"Email"}
        placeHolder={"Email"}
        name={"email"}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <LabledText
        value={formValues.mobile}
        label={"Mobile"}
        name={"mobile"}
        placeHolder={"Mobile"}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <LabledText
        value={formValues.customerNumber}
        label={"Customer ID"}
        name={"customerNumber"}
        placeHolder={"Customer ID"}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <RadioIcons items={membershipItems} label={"Membership"} />
      <div className={classes.button}>
        <div className={classes.buttonMarginLeft}>
          <Button
            cancelOnClick={() => {
              clearForm();
            }}
            color={colors.white}
            backgroundColor={colors.cloudyBlue}
            text={"CANCEL"}
          />
        </div>
        <div className={classes.buttonMarginLeft}>
          <Button
            saveOnClick={() => {}}
            color={colors.white}
            backgroundColor={colors.blueGreen}
            text={"SAVE"}
          />
        </div>
      </div>
    </a.div>
  );
};

export default Form;
