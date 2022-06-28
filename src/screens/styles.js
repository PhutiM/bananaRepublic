import { makeStyles } from '@mui/styles';
import * as colors from '../assets/styles/Colors';

export const useStyles = makeStyles(theme => ({
    main: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      borderWidth: 5,
      borderColor: 'black',
      alignItems: 'center',
      backgroundColor: colors.yellow
    },
  }));
  