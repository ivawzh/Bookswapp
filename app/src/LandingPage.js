import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import BookList from './BookList';

import withRoot from './theme';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    width: '1200px',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 20
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  }
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar color="default">
          <Toolbar>
            <img
              src='book.png'
              style={{ height: '55px', marginRight: '10px' }}
              alt='Bookswapp'
            />
          <Typography variant="title" color="inherit" className={classes.flex}>
              Bookswapp
            </Typography>
            <Button variant="raised" color="primary" className={classes.button}>
              Join
            </Button>
            <Button color="secondary" className={classes.button}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <BookList/>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
