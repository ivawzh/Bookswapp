import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import BookCard from './BookCard';

const styles = theme => ({
  gridContainer: {
    width: '1200px',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 20
  },
});

class BookList extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.props.books.refetch()
  }

  render() {
    const { classes } = this.props;
    if (this.props.books.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    let blurClass = ''

    return (
      <Grid className={classes.gridContainer} container spacing={24} justify={'center'}>
        {this.props.books.allBooks && this.props.books.allBooks.edges && this.props.books.allBooks.edges.map(({node: book}) => (
        <Grid item md={3}>
          <BookCard book={book} />
        </Grid>
        ))}
      </Grid>
    )
  }
}

const ALL_BOOKS_QUERY = gql`
query {
  allBooks {
    edges {
      node {
        title
        author {
          firstname
          lastname
        }
      }
    }
  }
}
`

const BookListWithQuery = graphql(ALL_BOOKS_QUERY, {
  name: 'books',
  options: {
    fetchPolicy: 'network-only',
  },
})(BookList)

export default withStyles(styles)(BookListWithQuery);
