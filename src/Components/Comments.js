import React, { Component } from 'react';

class Comments extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    if (comment) this.props.addComment(comment, this.props.postId);

    e.target.elements.comment.value = '';
  };

  render() {
    // list of comments for this specific posts
    // console.log(this.props.comments);
    return (
      <div className='comment'>
        {this.props.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Comment' name='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
