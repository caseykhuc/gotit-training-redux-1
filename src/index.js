import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './Components/App';
import { loadState, saveState } from './localStorage';
import posts from './data/posts';

import throttle from 'lodash/throttle';

const persistedState = loadState() || { posts };

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
