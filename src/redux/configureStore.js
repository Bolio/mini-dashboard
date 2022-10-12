import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tasksReducer from "./modules/tasks/index";
import modalsReducer from "./modules/modals/index";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers = compose(applyMiddleware(thunk), devTools) || compose;

const rootReducer = () =>
  combineReducers({
    tasks: tasksReducer,
  });

export default function configureStore() {
  const store = createStore(rootReducer(), composeEnhancers);

  store.replaceReducer(
    combineReducers({
      // Agregar más reducers
      tasks: tasksReducer,
      modals: modalsReducer,
    })
  );

  return store;
}
