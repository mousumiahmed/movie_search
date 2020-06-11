import React from "react";
import FirstTab from "./FirstTab.js";
import SecondTab from "./SecondTab.js";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Tabs,Tab,Typography,Box} from '@material-ui/core';






const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newEvent) => {
    setValue(newEvent);
  };

  return (
    <div className="marginLeft">
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label="First_Tab" />
        <Tab label="Second_Tab" />  
      </Tabs>
    </Paper>
    
      <TabPanel value={value} index={0}>
        <FirstTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SecondTab/>
      </TabPanel> 
    </div>
  );
}