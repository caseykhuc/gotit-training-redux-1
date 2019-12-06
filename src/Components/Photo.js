import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Photo = (props) => {
  const { post, comments, removePost, history } = props;
  return (
    <figure className='figure'>
      <Link to={`/single/${post.id}`}>
        <img className='photo' src={post.imageLink} alt='post.description' />
      </Link>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className='button-container'>
        <button
          className='button'
          onClick={() => {
            removePost(post.id);
            // only push back to main page when photo's in single
            history && history.push('/');
          }}
        >
          Remove
        </button>
        <Link to={`/single/${post.id}`} className='button'>
          <div className='comment-count'>
            <div className='speech-bubble'></div>
            {comments[post.id] ? comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export default Photo;
