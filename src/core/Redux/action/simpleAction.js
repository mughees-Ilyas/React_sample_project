import keys from "../keys";

export const addData = (payload) => dispatch => {
    dispatch({
        type: 'ADD_DATA',
        payload: payload
    })
};
export const getData = () => dispatch => {
    dispatch({
        type: 'GET_DATA',
        payload: keys
    })
};
export const editData = (payload) => dispatch => {
    dispatch({
        type: 'EDIT_DATA',
        payload: payload
    })
};
