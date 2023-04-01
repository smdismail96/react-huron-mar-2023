import { getWorkshops } from '../services/workshops';
import {
    SET_WORKSHOPS,
    SET_ERROR,
    FETCH_WORKSHOPS,
    PREVIOUS_PAGE
} from '../actions/types';

const previousPage = () => {
    return {
        type: PREVIOUS_PAGE,
    };
}


// Usually action creator return actions (object)
// const fetchWorkshops = () => {
//     return {

//     }
// }

// When using thunk middleware, we can have action creators which return functions
const fetchWorkshops = (page) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_WORKSHOPS
            });
            const data = await getWorkshops(page);
            dispatch({
                type: SET_WORKSHOPS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SET_ERROR,
                payload: error,
            });
        }
    };
}

export {
    fetchWorkshops,
    previousPage
}