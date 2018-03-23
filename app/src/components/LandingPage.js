import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import BookList from './BookList';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { Link } from 'react-router-dom';

import css from './LandingPage.css';
import withRoot from '../theme';

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
    margin: 'auto',
    width: '1200px',
  },
  intro: {
    width: '100%',
    height: theme.spacing.unit * 50,
    marginBottom: theme.spacing.unit * -30,
    marginTop: '64px',
    backgroundColor: theme.palette.primary.light,
  },
  introText:{},
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
            <Link to="/login">
              <Button color="secondary" className={classes.button}>
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.intro}></div>
        <div className={classes.introContainer}>
          <ReactCSSTransitionGroup
            transitionName={"intro-text"}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
          >
            <Card className={classes.card}>
              <CardContent>
                <Button color="primary">
                  Find free books near you
                </Button>
                <Typography variant="headline" align="center" component='h1'>
                  Share your favorite stories by passing on an old book.
                </Typography>
                <Typography variant="headline" align="center" component='h1'>
                  Share knowledge by gifting a book you no longer need.
                </Typography>
                <Typography variant="headline" align="center">
                  Ever read something so good you want to share it with others?
                </Typography>
                <Typography variant="headline" align="center">
                  Got an book sitting on your shelves which you wouldnt mind passing on?
                </Typography>
                <Typography variant="headline" align="center">
                  Can you help others learn by giving them the gift of a book?
                </Typography>
                <Typography variant="headline" align="center">
                  Got an unwanted book that someone else might like?
                </Typography>
                <Typography variant="headline" align="center" component='h1'>
                  Find stories that others have cherished.
                </Typography>
                <Typography variant="headline" align="center" component='h1'>
                  Find free books to collect in your neighbourhood or by post.
                </Typography>
                <Typography variant="headline" align="center" component='h1'>
                  Find free libraries in your neighbourhood.
                </Typography>
              </CardContent>
            </Card>
          </ReactCSSTransitionGroup>
        </div>
        <BookList/>
      </ParallaxProvider>
    );
  }
}

export default withRoot(withStyles(styles)(LandingPage));
