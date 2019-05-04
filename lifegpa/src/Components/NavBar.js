import React from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {

}

const NavBar = props => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Grid container display='flex' justify='space-between'>
            <Grid item>
              <Typography variant='h6'>LifeGPA Dashboard</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={props.logOut} >Log Out</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default NavBar;