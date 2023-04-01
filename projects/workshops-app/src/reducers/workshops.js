import {
    SET_WORKSHOPS,
    SET_ERROR,
    FETCH_WORKSHOPS,
    PREVIOUS_PAGE,
    NEXT_PAGE
} from '../actions/types';

// named export
export const initialState = {
    workshops: [],
    error: null,
    completed: false,
    page: 1,
};

// when an action is dispatched, the reducer is called
// Job of the reducer : Given the current state, and action dispatched, it returns the new state
export default function workshopsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WORKSHOPS:
            return {
                ...state,
                workshops: action.payload,
                completed: true,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                completed: true,
            };
        case FETCH_WORKSHOPS:
            return {
                ...state,
                completed: false,
            };
        case PREVIOUS_PAGE:
            return {
                ...state,
                page: state.page - 1,
            };
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            };
        default:
            return state; // no change in state as action type is not one of the supported types
    }
}