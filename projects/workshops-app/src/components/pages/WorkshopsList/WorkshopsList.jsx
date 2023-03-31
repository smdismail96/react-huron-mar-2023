import React from 'react';
import {
    SET_WORKSHOPS,
    SET_ERROR,
    SET_COMPLETED,
    PREVIOUS_PAGE,
    NEXT_PAGE
} from '../../../actions/types';

import workshopsReducer, { initialState } from '../../../reducers/workshops';

import { getWorkshops, deleteWorkshop } from '../../../services/workshops';

function WorkshopsList() {
    // const [workshops, setWorkshops] = React.useState([]);
    // const [error, setError] = React.useState(null);
    // const [completed, setCompleted] = React.useState(false);
    // const [page, setPage] = React.useState(1);
    const [state, dispatch] = React.useReducer(
        workshopsReducer,
        initialState
    );

    const { workshops, error, completed, page } = state;

    React.useEffect(() => {
        async function helper() {
            try {
                // setCompleted(false);
                dispatch({
                    // action
                    type: SET_COMPLETED,
                    payload: false,
                });
                const data = await getWorkshops(page);
                // setWorkshops(data);
                dispatch({
                    // action
                    type: SET_WORKSHOPS,
                    payload: data,
                });
            } catch (error) {
                // setError(error);
                dispatch({
                    type: SET_ERROR,
                    payload: error,
                });
            }
        }

        helper();
    }, [page]);

    const previous = () => {
        // if (page <= 1) {
        //     return;
        // }

        // setPage(page - 1);
        dispatch({
            type: PREVIOUS_PAGE,
        });
    };

    const next = (event) => {
        // setPage((p) => p + 1);
        dispatch({
            type: NEXT_PAGE,
        });
    };

    const removeWorkshop = async (id, event) => {
        console.log(id, event);
        try {
            await deleteWorkshop(id);

            const filteredWorkshops = workshops.filter(
                (w) => w.id !== id
            );

            dispatch({
                type: SET_WORKSHOPS,
                payload: filteredWorkshops
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container my-5">
            <h1>{"List of workshops"}</h1>
            <div>
                You are viewing page {page}
                <div className="my-2">
                    <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={previous}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={next}
                    >
                        Next
                    </button>
                </div>
            </div>
            {!completed ? (
                <div>Loading list of workshops</div>
            ) : null}
            {completed && !error && (
                <ol>
                    {workshops.map((w) => (
                        <li key={w.id} className="my-3">
                            {w.name}
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={(event) =>
                                    removeWorkshop(w.id, event)
                                }
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
            )}
            {completed && error && (
                <div>Error occured : {error?.message}</div>
            )}
        </div>
    );
};

export default WorkshopsList;