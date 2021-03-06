import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
  profileContainer: {
    padding: '24px 0'
  },
  fieldTitle: {
    fontSize: 18,
    fontWeight: 600
  },
  fieldValue: {
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: 600
  },
  list: {
    '& li': {
      paddingTop: '8px !important',
      paddingBottom: '8px !important'
    }
  }
  

})