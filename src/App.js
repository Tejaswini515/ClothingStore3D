import React, { Component, Fragment } from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import MeasurementsContainer from './MeasurementsContainer';
import PageWithScene from './PageWithScene';

import Textures from './Textures';

const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };

class App extends Component {

  state = {
    value: 0,
  };

  render() {
    console.log('Inside App Render')
    return (
            <Fragment>
              <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="title" color="inherit">
                  Clothing Store
                </Typography>
                </Toolbar>
              </AppBar>
              <PageWithScene />
              <Textures />
        </Fragment>
    );
  }
}

// export default BodyNav;

export default withStyles(styles)(App);