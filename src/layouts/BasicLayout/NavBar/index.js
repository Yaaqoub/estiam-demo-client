import React from 'react';
import {
  makeStyles,
  Drawer,
  Hidden
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {},
  sideDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  }
}));

function NavBar({ onMobileNavClose, openMobile }) {
  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          classes={{ paper: classes.sideDrawer }}
          open={openMobile}
          onClose={onMobileNavClose}
        >
          Test
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          variant="persistent"
          classes={{ paper: classes.sideDrawer }}
          open
        >
          Test
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileNavClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
