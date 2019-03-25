import React, { Component } from 'react';
import '../../styles/common.scss';
import { Link } from 'react-router-dom';
import { List, ListItem, Button, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

class Comments extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  handleDeleteComment = (e, id) => {
    e.preventDefault();
    this.props.deleteComment(id);
  };

  render() {
    const { comments, selectedComment } = this.props;

    return (
      <div className="comments">
        <div className={"comments__header"}>
          <Button id="new-comment"
                  component={Link}
                  color="primary"
                  to="/new-comment">
            New comment
          </Button>
        </div>
        <List className={'comments__list'}>
          {
            comments.map((comment) => {
              const selected = comment.id === selectedComment.id;
              const { id, text, author } = comment;

               return (
                 <ListItem
                   key={id}
                   className={'comment'}
                   selected={selected}
                   component={Link}
                   to={`/comment/${id}`}
                 >
                   <div className="comment__header">
                     <div className={'comment__author'}>{author}</div>
                     <IconButton
                       className={'comment__delete'}
                       onClick={e => this.handleDeleteComment(e, id)}
                       aria-label="Delete">
                       <DeleteIcon fontSize="small" />
                     </IconButton>
                   </div>
                   <p className={'comment__text'}>{text}</p>
                 </ListItem>);
              })
          }
        </List>

      </div>
    );
  }
}

export default Comments;
