import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = {
    menuText: {
        fontSize: 15
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    tabLink: {
        fontWeight: 700
    }
}

class MainMenu extends React.Component {
    state = {
        value: 1,
    };


    handleChange = (event, value) => {
        console.log(value);
        this.setState({ value });
    };
    render() {

        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        <Link to="/">
                            <Tab className={classes.tabLink}
                                label="Feed"
                                value="0" />
                        </Link>
                        <Link to="/in-stock">
                            <Tab className={classes.tabLink}
                                label="Shop"
                                value="0" />
                        </Link>
                        <Link to="/upcoming">
                            <Tab className={classes.tabLink}
                                label="Upcoming"
                                value="0" />
                        </Link>
                    </Tabs>
                </AppBar>
            </div>
        )
    };
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainMenu);