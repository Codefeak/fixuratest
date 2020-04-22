import { createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00224f'
		},
		secondary: {
			main: '#ffffff'
		}
	},
	typography: {
		fontFamily: 'Open Sans, Helvetica, Arial'
	},
	overrides: {
		MuiPaper: {
			elevation1: {
				boxShadow: 'none'
			}
		},
		MuiCardContent: {
			root: {
				padding: 0
			}
		},
		MuiListItemText: {
			root: {
				display: 'flex',
				alignItems: 'center',
				'& h6': {
					color: 'grey'
				},
				'& p': {
					padding: '0 10px'
				}
			}
		},
		MuiListItem: {
			root: {
				padding: '0 !important'
			}
		}
	}
});

export const commonStyles = makeStyles({
	'@global': {
		body: {
			margin: 0
		}
	},
	root: {
		flexGrow: 1,
		width: '1024px',
		margin: '0 auto'
	},
	mainContainer: {
		padding: '0 20px'
	}
})

