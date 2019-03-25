import React, { Component } from 'react';
import {Button, IconButton, TextField} from '@material-ui/core';
import { Close as CloseIcon } from "@material-ui/icons";
import '../../styles/common.scss';
import { history } from '../../index.js';

const initialState = {
  text: '',
  author: '',
};

class NewComment extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };

  handleAddComment = (e) => {
    e.preventDefault();

    if (this.state.text && this.state.author) {
      this.props.addComment({
        text: this.state.text,
        author: this.state.author,
      })
    }

    this.setState(initialState)
  };

  handleCloseEditPanel = () => {
    this.setState(initialState);
    history.push('/');
  };

  render() {
    return (
      <div className="comment-editor">
        <IconButton
          className={'close'}
          onClick={this.handleCloseEditPanel}
          aria-label="Delete">
          <CloseIcon fontSize="small" />
        </IconButton>
        <form className={'comment-form'} noValidate autoComplete="off">
          <TextField
            id="author"
            label="Name"
            className={'comment-form__name'}
            fullWidth
            onChange={this.handleChange}
            margin="normal"
          />

          <TextField
            id="text"
            label="Message"
            className={'comment-form__message'}
            multiline={true}
            rows={'10'}
            rowsMax={'20'}
            fullWidth
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
          />
          <Button
            type={'submit'}
            onClick={this.handleAddComment}
            color="primary">
            Add comment
          </Button>
        </form>
      </div>
    );
  }
}

export default NewComment;
