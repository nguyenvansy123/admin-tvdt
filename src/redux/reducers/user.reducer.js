import { userConstants } from "../actions/constants"

const initialState = {
    data: [],
    pendingMemeber: [],
    memeber: [],
    loading: false,
    error: null,
    message: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case userConstants.GET_ALL_USER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.GET_ALL_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                data: action.payload.users
            }
            break;
        case userConstants.GET_ALL_USER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
        case userConstants.GET_APPROVE_USER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.GET_APPROVE_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                memeber: action.payload.users
            }
            break;
        case userConstants.GET_APPROVE_USER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
        case userConstants.GET_AWAITING_APPROVE_USER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.GET_AWAITING_APPROVE_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                pendingMemeber: action.payload.users
            }
            break;
        case userConstants.GET_AWAITING_APPROVE_USER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
        case userConstants.DELETE_USER_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.DELETE_USER_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                data: action.payload.users
            }
            break;
        case userConstants.DELETE_USER_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
        case userConstants.APPROVE_USER_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.APPROVE_USER_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                data: action.payload.users
            }
            break;
        case userConstants.APPROVE_USER_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }

    return state
}