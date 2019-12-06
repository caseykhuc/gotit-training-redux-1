import React, { Component } from 'react';

class AddPhoto extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(e);
    console.log(e.target); */
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;

    const post = { id: Number(new Date()), description, imageLink };

    if (imageLink && description) {
      this.props.addPost(post);
      console.log('added');
      this.props.onHistory.push('/');
    }
    //console.log(e.target.elements.link);
  };

  render() {
    return (
      <div>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Link' name='link' />
            <input type='text' placeholder='Description' name='description' />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
