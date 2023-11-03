import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="post">
        <p>{text}</p>
      </div>
    );
  }
}

export default Post;