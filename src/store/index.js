import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// eslint-disable-next-line import/prefer-default-export
export function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware];

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
