import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { loadState, saveState } from './localStorage';
import posts from './data/posts';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const persistedState = loadState() || { posts };

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
