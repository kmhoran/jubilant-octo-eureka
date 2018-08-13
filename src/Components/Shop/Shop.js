import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 200
    }
});


class Shop extends Component{
    state = {spacing: '16'};
    render(){
        const { classes } = this.props;
        const { spacing } = this.state;
        return(
          <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                  <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                      {[0,1,2].map(value => (
                          <Grid key={value} item>
                              <Paper className={classes.paper}><h1>{value}</h1></Paper>
                          </Grid>
                      ))}
                  </Grid>
              </Grid>
          </Grid>
        );
    }
}

Shop.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shop);