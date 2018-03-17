import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';


const styles = theme => ({
  card: {
    textAlign: 'center',
  },
  media: {
    height: theme.spacing.unit * 30,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


class BookCard extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired,
  }

  render() {
  const {
    classes,
    book,
  } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={book.image}
            title="Pass it forward"
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              {book.title}
            </Typography>
            <Typography variant="subheading" component="h4">
              {book.author && `${book.author.firstname} ${book.author.lastname}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Chip
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
              label={`${book.owner.firstname} ${book.owner.lastname}`}
              className={classes.chip}
            />
            <Button size="small" color="primary">
              Collect
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(BookCard);
