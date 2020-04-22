import React from 'react';
import { List, ListItem, ListItemText, Divider, Grid, Card, CardContent, Typography } from '@material-ui/core';

import Spinner from './Spinner';
import {useStyles} from '../styles/investmentDetails';

export default function (props) {
    const { match, data } = props;
    const investmentId = match.params.id;
    const classes = useStyles();
    let component;
    if (data === undefined || data === null || data.length<0) {
        component = <Spinner/>
    } else {
        const filteredData = data.find(item => item.id === investmentId);
        component = (
            <Grid item xs={12}>
                <Card className={classes.profileContainer}>
                    <CardContent>
                        <Typography className={classes.fieldTitle}>General Information</Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Account Name:")} secondary={secondaryText(`${filteredData.name}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Account Type:")} secondary={secondaryText(`${filteredData.accountType}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Account ID:")} secondary={secondaryText(filteredData.id)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Last Account Appraisal:")} secondary={secondaryText(formatDate(filteredData.lastAccountAppraisalDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Creation Date:")} secondary={secondaryText(formatDate(filteredData.creationDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Approved Date:")} secondary={secondaryText(formatDate(filteredData.approvedDate))}/>
                                    </ListItem>
                                </List>
                                </Grid>
                            <Grid item xs={6}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Account State:")} secondary={secondaryText(filteredData.accountState)}/>   
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Account Holder Type:")} secondary={secondaryText(`${filteredData.accountHolderType}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Account Holder Key:")} secondary={secondaryText(filteredData.accountHolderKey)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Activation Date:")} secondary={secondaryText(formatDate(filteredData.activationDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("LastModified Date:")} secondary={secondaryText(formatDate(filteredData.lastModifiedDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Product Type Key:")} secondary={secondaryText(filteredData.productTypeKey)}/>
                                    </ListItem>
                                </List>
                            </Grid>   
                        </Grid>
                    </CardContent>
                </Card>
                <Divider/>
                <Card>
                <CardContent>
                        <Typography className={classes.fieldTitle}>Balance Information</Typography>
                        <Grid container>
                            <Grid item xs={3}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Balance:")} secondary={secondaryText(filteredData.balance)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Available Balance:")} secondary={secondaryText(filteredData.availableBalance)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Locked Balance:")} secondary={secondaryText(filteredData.lockedBalance)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Hold Balance:")} secondary={secondaryText(filteredData.holdBalance)}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Fees Due:")} secondary={secondaryText(`${filteredData.feesDue}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Interest Due:")} secondary={secondaryText(`${filteredData.interestDue}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Accrued Interest:")} secondary={secondaryText(`${filteredData.accruedInterest}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Technical Interest Due :")} secondary={secondaryText(`${filteredData.technicalInterestDue}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Technical Overdraft Amount:")} secondary={secondaryText(`${filteredData.technicalOverdraftAmount}`)}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={5}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Allow Overdraft:")} secondary={secondaryText(`${filteredData.allowOverdraft}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Overdraft Amount:")} secondary={secondaryText(`${filteredData.overdraftAmount}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Overdraft Interest Accrued:")} secondary={secondaryText(`${filteredData.overdraftInterestAccrued}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Overdraft Limit:")} secondary={secondaryText(`${filteredData.overdraftLimit}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Technical Overdraft InterestAccrued:")} secondary={secondaryText(`${filteredData.technicalOverdraftInterestAccrued}`)}/>
                                    </ListItem>
                                </List>
                            </Grid>   
                        </Grid>
                    </CardContent>
                </Card>
                <Divider/>
                <Divider/>
                <Card>
                <CardContent>
                        <Typography className={classes.fieldTitle}>Currency</Typography>
                        <Grid container>
                            <Grid item xs={3}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Name:")} secondary={secondaryText(filteredData.currency.name)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Code:")} secondary={secondaryText(filteredData.currency.code)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Symbol:")} secondary={secondaryText(filteredData.currency.symbol)}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Digits After Decimal:")} secondary={secondaryText(filteredData.currency.digitsAfterDecimal)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Is Base Currency:")} secondary={secondaryText(filteredData.currency.isBaseCurrency.toString())}/>
                                    </ListItem>
                                </List>
                            </Grid>  
                            <Grid item xs={5}>
                                <ListItem>
                                    <ListItemText primary={primaryText("Creation Date:")} secondary={secondaryText(formatDate(filteredData.currency.creationDate))}/>
                                </ListItem>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Last Modified Date:")} secondary={secondaryText(formatDate(filteredData.currency.lastModifiedDate))}/>
                                    </ListItem>
                                </List>
                                <ListItem>
                                        <ListItemText primary={primaryText("Currency Symbol Position:")} secondary={secondaryText(filteredData.currency.currencySymbolPosition)}/>
                                    </ListItem>
                            </Grid> 
                        </Grid>
                    </CardContent>
                </Card>
                <Divider/>
            </Grid>
        );

    } 

    return {
        ...component
    }

    function primaryText(string) {
        return <Typography variant="subtitle1">{string}</Typography>
    }

    function secondaryText(string) {
        return <Typography variant="body1" className={classes.fieldValue}>{string}</Typography>
    }

    function formatDate(date) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-fi");
    }
}



function renderAll(data) {
    return <List container>
        {Object.entries(data).map(([key, value]) => {
            if (typeof value === 'object') {
                return (
                    Object.entries(value).map(([k, v]) => {
                        if (typeof v !== 'object') {

                            return (
                                <ListItem key={k}>
                                    <Typography>{k}: </Typography>
                                    <Typography>{v}</Typography>
                                </ListItem>
                            )
                        } else {
                            Object.entries(k).map((k, v) => {
                                return (
                                    <ListItem key={k}>
                                        <Typography>{k}: </Typography>
                                        <Typography>{v}</Typography>
                                    </ListItem>
                                ) 
                            })
                        }
                    })
                )
            } else {
                return (
                    <ListItem key={key}>
                        <Typography>{key}: </Typography>
                        <Typography>{value}</Typography>
                    </ListItem>
                )
            }
        })}
    </List>
}