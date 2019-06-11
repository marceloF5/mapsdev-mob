export const Types = {
    ADD_REQUEST: 'users/ADD_REQUEST',
    ADD_SUCCESS: 'users/ADD_SUCCESS',
    ADD_FAILURE: 'users/ADD_FAILURE',
}

const INITIAL_STATE = {
    data: [],
    loading: null,
    error: null,
}

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.ADD_REQUEST:
        return { ...state, loading: true }
    case Types.ADD_SUCCESS:
        return {
            data: [...state.data, action.payload.data],
            loading: false,
            error: null,
        }
    case Types.ADD_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload.error,
        }
    default:
        return state
    }
}

export const Creators = {
    addUsersRequest: (user, coordinate) => ({
        type: Types.ADD_REQUEST,
        payload: { user, coordinate },
    }),

    addUserSuccess: data => ({
        type: Types.ADD_SUCCESS,
        payload: { data },
    }),

    addUserFailure: error => ({
        type: Types.ADD_FAILURE,
        payload: { error },
    }),
}
