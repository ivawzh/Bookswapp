import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  card: {
    textAlign: 'center',
  },
  media: {
    height: theme.spacing.unit * 30,
  },
});


class BookCard extends PureComponent {
  propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
  const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/images1.jpg"
            title="Pass it forward"
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              Swap Books
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(BookCard);
