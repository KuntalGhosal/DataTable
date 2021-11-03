import { GET_DATA } from "../actions/UserAction";

const initialState = {
    dataList: []
}

export default (state = initialState,action) => {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {
                dataListArray: [...action.payload],
            })
        default:
            return state;
    }
}