
import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableFooter, TableRow, TableSortLabel, Paper, IconButton} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { commonStyles } from '../styles/app';

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}

	if (b[orderBy] > a[orderBy]) {
		return 1;
	}

	return 0;
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) {
			return order;
		}

		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
	return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
	const {order, orderBy, onRequestSort, headRows} = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	const component = (
		<TableHead>
			<TableRow>
				{headRows.map(row => (
					<TableCell
						key={row.id}
						align="left"
						padding="default"
						sortDirection={orderBy === row.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === row.id}
							direction={order}
							onClick={createSortHandler(row.id)}
						>
							{row.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
    );
    
    return {
        ...component
    }
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100% !important',
		marginTop: theme.spacing(3)
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
		boxShadow: 'none',
		background: 'inherit',
		cursor: 'pointer'
	},
	table: {
		minWidth: 500,
		marginTop: 60

	},
	tableRow: {
		'&:hover': {
			background: '#00224f29'
		}
	},

	tableWrapper: {
		overflowX: 'auto'
	}
}));

export default function (props) {
    const {data, headRows, handleTableRowClick, rowSelectedId} = props;
    console.log(data)
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState(headRows[0].id);

	function handleRequestSort(event, property) {
		const isDesc = orderBy === property && order === 'desc';
		setOrder(isDesc ? 'asc' : 'desc');
		setOrderBy(property);
	}

	const component = (
		<Paper className={classes.paper}>
			<Table
				className={classes.table}
				aria-labelledby="tableTitle"
			>
				<EnhancedTableHead
					order={order}
					orderBy={orderBy}
					rowCount={data.length}
					headRows={headRows}
					onRequestSort={handleRequestSort}
				/>
				<TableBody>
					{stableSort(data, getSorting(order, orderBy))
						.map(row => {
							return (
								<TableRow
									key={row.id}
									selected={row.userId ? row.userId === rowSelectedId : row.id === rowSelectedId}
									className={classes.tableRow}
									onClick={() => handleTableRowClick(row.userId ? row.userId : row.id)}
								>
									{Object.keys(row).map(key => (key !== 'id' && key !== 'mongoId') && (
										<TableCell key={row[key]} component="th" scope="row">
											{row[key]}
										</TableCell>
									))}
								</TableRow>
							);
						})}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePaginationActions
							colSpan={headRows.length}
							{...props}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</Paper>
	);

	return {
		...component
	};
}

function TablePaginationActions(props) {
	const theme = useTheme();
	const {
		offset,
		cursors,
		setLastCursor,
		page,
		setPage,
		queryDocCount
	} = props;

	function handleBackButtonClick() {
		cursors.pop();
		setPage(page - 1);
		setLastCursor(cursors.length === 0 ? null : cursors[cursors.length - 1]);
	}

	function handleNextButtonClick() {
		cursors.push(offset);
		setPage(page + 1);
		setLastCursor(offset);
	}

	return (
		<TableCell>
			{/* <span>{page * 5 > queryDocCount ? queryDocCount : page * 5}/{queryDocCount}</span> */}
			{/* <IconButton
				disabled={page === 1}
				aria-label="First Page"
				onClick={handleFirstPageButtonClick}
			>
				{theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
			</IconButton> */}
			<IconButton
				disabled={page === 1}
				aria-label="Previous Page" onClick={handleBackButtonClick}
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
			</IconButton>
			<span>{page}</span>
			<IconButton
				/* global QUERY_LIMIT */
				/* eslint no-undef: "error" */
				disabled={queryDocCount <= process.REACT_APP_QUERY_LIMIT}
				aria-label="Next Page"
				onClick={handleNextButtonClick}
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
			</IconButton>
			{/* <IconButton
				disabled={(count * page) >= queryDocCount}
				aria-label="Last Page"
				onClick={handleLastPageButtonClick}
			>
				{theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
			</IconButton> */}
		</TableCell>
	);
}
