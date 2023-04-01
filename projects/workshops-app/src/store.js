import { createStore, combineReducers, applyMiddleware } from 'redux';
import workshopsReducers from './reducers/workshops';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/**
 * {
 *      workshopsList: {
            workshops: [],
            error: null,
            completed: false,
            page: 1,
        }
 * }
 */
const rootReducer = combineReducers({
    workshopsList: workshopsReducers
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;