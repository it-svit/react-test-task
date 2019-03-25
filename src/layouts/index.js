import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import NewComment from "../components/NewComment";

const appStyles = {
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
};

class App extends Component {
  render() {
    return (
      <div style={appStyles}>
        <Comments />
        <Switch>
          <Route exact path='/new-comment' component={NewComment}/>
          <Route exact path='/comment/:id?' component={Comment}/>
        </Switch>
      </div>
    );
  }
}

export default App;
