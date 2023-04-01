import {
    SET_WORKSHOPS,
    SET_ERROR,
    SET_COMPLETED,
    PREVIOUS_PAGE,
    NEXT_PAGE
} from '../actions/types';

// when an action is dispatched, the reducer is called
// Job of the reducer : Given the current state, and action dispatched, it returns the new state
export default function workshopsReducer(state, action) {
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
        case SET_COMPLETED:
            return {
                ...state,
                completed: action.payload,
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

// named export
export const initialState = {
    workshops: [],
    error: null,
    completed: false,
    page: 1,
};