import React from 'react';
import {
  makeStyles,
  Drawer
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  sideDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <Drawer
        anchor="left"
        variant="persistent"
        classes={{ paper: classes.sideDrawer }}
        open
      >
        Test
      </Drawer>
    </>
  );
}

NavBar.propTypes = {};

export default NavBar;
