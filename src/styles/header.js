import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    headerContainer: {
    },
    headerBar: {
        minHeight: '100px',
        padding: '0 20px '
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            padding: '0 10px',
        }
    },
    appBar: {
        background: '#2566ca !important',
        display: 'flex',
        flexDirection: 'row',
        padding: '0 20px',  
        '& a': {    
            textAlign: 'center',
            textDecoration: 'none',
            '& button': {
                color: '#fff',
                fontSize: 14,
                fontWeight: 600
            }

        }
    },
    active: {
		'& span': {
            fontWeight: 'bold',
            textDecoration: 'underline'
		}
	}
})