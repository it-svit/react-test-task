import React, { Component } from 'react';
import '../../styles/common.scss';
import {Button, IconButton, TextField} from "@material-ui/core";
import {Close as CloseIcon} from "@material-ui/icons";
import {history} from "../../index";

const initialState = {
  text: '',
  author: '',
  id: '',
};


class Comment extends Component {
  state = initialState;

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getComment(id);

    this.setState({
      id: this.props.selectedComment.id,
      text: this.props.selectedComment.text,
      author: this.props.selectedComment.author,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params;

      this.props.getComment(id);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState && nextProps.selectedComment.id !== prevState.id) {
      return {
        id: nextProps.selectedComment.id,
        text: nextProps.selectedComment.text,
        author: nextProps.selectedComment.author,
      }
    }
    return null;
  }

  componentWillUnmount() {
    this.props.clearSelected();
  }

  handleDeleteComment = () => {
    this.props.deleteComment(this.props.selectedComment.id);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };

  handleEditComment = (e) => {
    e.preventDefault();

    if (this.state.text && this.state.author) {
      this.props.editComment({
        id: this.state.id,
        text: this.state.text,
        author: this.state.author,
      })
    }
  };

  handleCloseEditPanel = () => {
    this.setState(initialState);
    history.push('/');
  };

  render() {
    const { text = '', author = '' } =  this.state;
    if (!this.props.selectedComment.id) return null;

    return (
      <div className="comment-editor">
        <IconButton
          className={'close'}
          onClick={this.handleCloseEditPanel}
          aria-label="Delete">
          <CloseIcon fontSize="small" />
        </IconButton>
        <form
          onSubmit={this.handleEditComment}
          className={'comment-form'}
          noValidate
          autoComplete="off">
          <TextField
            id="author"
            label="Name"
            className={'comment-form__name'}
            fullWidth
            value={author}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="text"
            label="Message"
            className={'comment-form__message'}
            multiline={true}
            rows={'10'}
            rowsMax={'20'}
            fullWidth
            value={text}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />

          <Button onClick={this.handleDeleteComment}
                  color="secondary">
            Delete comment
          </Button>
          <Button
            type={'submit'}
            onClick={this.handleEditComment}
            color="primary">
            Edit comment
          </Button>
        </form>
      </div>
    );
  }
}

export default Comment;
