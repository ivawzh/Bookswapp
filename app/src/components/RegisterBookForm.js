import React, { PureComponent } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';

class RegisterBookForm extends PureComponent {
  render() {
    return (
      <div>
        Have a book you would like someone else to enjoy? Offer it here for others to take.
        <label>Book Title</label>
        <input/>
        <label>Book Author</label>
        <input/>
        <label>Are you willing to post this book?</label>
        <label>Overseas?</label>
      </div>
    );
  }
}
