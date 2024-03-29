import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import Single from './Single';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>PhotoWall</Link>
        </h1>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path='/AddPhoto'
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />

        <Route
          path='/single/:id'
          render={(params) => <Single {...params} {...this.props} />}
        />
      </div>
    );
  }
}

export default Main;
