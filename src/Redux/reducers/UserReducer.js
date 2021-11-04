import { SET_DATA } from "../actions/UserAction";

const initialState = {
    dataList: []
}

export default (state = initialState,action) => {
    switch (action.type) {
        case SET_DATA:
            return Object.assign({}, state, {
                dataListArray: [...action.payload],
            })
        default:
            return state;
    }
}