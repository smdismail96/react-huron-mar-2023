// const fetchWorkshops = (store) => (next) => async (action) => {
//     try {
//         const data = await getWorkshops(page);
//         dispatch({
//             type: SET_WORKSHOPS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: SET_ERROR,
//             payload: error,
//         });
//     }
// }