function addData(state, action) {
    let id = Math.floor(Math.random() * 99999);
    while (state.payload[id]) {
        id = Math.floor(Math.random() * 99999);
    }
    state.payload[id]= action.payload;
    localStorage.setItem('keys', JSON.stringify(state.payload));
    return state;
}
function editData(state, action) {
    state.payload[action.payload.id] = action.payload.data;
    console.log(state.payload)
    localStorage.setItem('keys', JSON.stringify(state.payload));
    return state;
}

export default (state = {}, action) => {

    switch (action.type) {
        case 'ADD_DATA':
            return {
                payload: addData(state, action)
            };
        case 'GET_DATA':
            return {
                payload: action.payload
            };
        case 'EDIT_DATA':
            return {
                payload: editData(state, action)
            };
        default:
            return state
    }
}
