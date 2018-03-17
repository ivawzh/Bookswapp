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
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


import withRoot from './theme';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    width: '1200px',
    margin: 'auto',
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  },
  introContainer: {
    margin: '0',
  },
  intro: {
    width: '100%',
    height: theme.spacing.unit * 50,
    marginBottom: theme.spacing.unit * -30,
    backgroundColor: theme.palette.primary.light,
  },
});

class LandingPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;

    return (
      <ParallaxProvider className={classes.root}>
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
        <Parallax
            className={classes.introContainer}
            offsetYMax={100}
            offsetYMin={0}
            slowerScrollRate={false}
            tag="figure"
        >
            <div className={classes.intro}></div>
            {/*<img src="/Book-Exchange-2.jpg" />*/}
        </Parallax>
        <Parallax
            className={classes.introContainer}
            offsetYMax={50}
            offsetYMin={0}
            slowerScrollRate={false}
            tag="figure"
        >
          <Typography variant="headline" align="center">
            Some stories are so good you should share them
          </Typography>
        </Parallax>
        <BookList/>
      </ParallaxProvider>
    );
  }
}

export default withRoot(withStyles(styles)(LandingPage));
