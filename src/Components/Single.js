import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { match, posts, comments, addComment, history } = this.props;
    const id = Number(match.params.id);
    /* console.log(posts);
    console.log(id); */
    const post = posts.find((post) => post.id === id) || posts[0];
    /* console.log(post); */
    return (
      <div className='single-photo'>
        <Photo
          post={post}
          removePost={this.props.removePost}
          history={history}
          comments={comments}
        />
        <Comments
          addComment={addComment}
          postId={id}
          comments={comments[id] || []}
        />
      </div>
    );
  }
}

export default Single;
