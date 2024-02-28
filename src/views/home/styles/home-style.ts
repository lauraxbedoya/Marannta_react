import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  my_look: {
    display: 'flex',
    justifyContent: 'center'
  },
  show_web: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#9996b3',
    justifyContent: 'space-evenly',
  },
});

export default useStyles;
