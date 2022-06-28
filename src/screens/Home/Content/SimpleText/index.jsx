import { useSpring, animated as a } from "react-spring";
import useMediaQuery from '@mui/material/useMediaQuery';

const SimpleText = ({ classes }) => {

  const animatedProps = useSpring({
    from: { marginTop: -200, opacity: 0 },
    opacity: 1,
    marginTop: 5,
    config: { mass: 1, tension: 150, friction: 10 },
  });

    return (
        <a.div className={classes.simpleTextArea} style={{...animatedProps}}>
          <p className={classes.myWorld}>My World Today</p>
          <p className={classes.description}>
            Pellentesque habitant morbi tristique senectus et nets et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. View all days eu libero sit amet
            quam egestas semper. Aenean ultricies mi vitae est. Maris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi. condimentum sea. commodo vitae. ornare sit amet.
            WIsI Aenean fermentum, elit get tincidunt condimentum, eros ipsum rutrum
            orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
            pulvinar facilisis. Ut felis. Present dapibus, neque id cursus faucibus,
          </p>
        </a.div>
    )
}

export default SimpleText;