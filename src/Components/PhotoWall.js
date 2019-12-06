import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhotoWall = (props) => {
  const { posts, onNavigate } = props;
  console.log(props.comments);
  return (
    <div>
      <Link className='addIcon' onClick={onNavigate} to='/AddPhoto' />
      {/* <button className='addIcon' onClick={onNavigate}></button> */}
      <div className='photoGrid'>
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post, index) => (
            <Photo key={index} post={post} {...props} />
          ))}
      </div>
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
