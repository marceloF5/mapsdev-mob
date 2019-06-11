export const Types = {
    SHOW: 'modal/SHOW',
    HIDE: 'modal/HIDE',
}

const INITIAL_STATE = {
    visible: false,
    coodinate: null,
}

export default function modal(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.SHOW:
        return { ...state, visible: true, coordinate: action.payload.coordinate }
    case Types.HIDE:
        return { ...state, visible: false, coordinate: null }
    default:
        return state
    }
}

export const Creators = {
    showModal: coordinate => ({
        type: Types.SHOW,
        payload: { coordinate },
    }),

    hideModal: () => ({
        type: Types.HIDE,
    }),
}
