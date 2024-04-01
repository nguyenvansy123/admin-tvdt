import { postConstants } from "../actions/constants"

const initState = {
    loading: false,
    post: [],
    approvePost: [],
    pendingApprovePost: [],
    postForUser: [],
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case postConstants.GET_ALL_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.GET_ALL_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
                post: action.payload.post
            }
            break;
        case postConstants.GET_ALL_POST_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break;
        case postConstants.GET_POST_BY_USER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.GET_POST_BY_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                postForUser: action.payload
            }
            break;
        case postConstants.GET_POST_BY_USER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break;

        case postConstants.GET_PENDING_APPROVE_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.GET_PENDING_APPROVE_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
                pendingApprovePost: action.payload
            }
            break;
        case postConstants.GET_PENDING_APPROVE_POST_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break;
        case postConstants.GET_APPROVE_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.GET_APPROVE_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
                approvePost: action.payload
            }
            break;
        case postConstants.GET_APPROVE_POST_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break;

        case postConstants.ADD_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.ADD_POST_SUCCESS:
            state = {
                ...state,
                loading: false,

            }
            break;
        case postConstants.ADD_POST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;

        case postConstants.DELETE_POST_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.DELETE_POST_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break;
        case postConstants.DELETE_POST_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case postConstants.UPDATE_STATUS_POST_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.UPDATE_STATUS_POST_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break;
        case postConstants.UPDATE_STATUS_POST_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case postConstants.UPDATE_APPROVE_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.UPDATE_APPROVE_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
                approvePost: action.payload
            }
            break;
        case postConstants.UPDATE_APPROVE_POST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;

        case postConstants.DOAWNLOAD_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case postConstants.DOAWNLOAD_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break;
        case postConstants.DOAWNLOAD_POST_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break;
        default:
            break;
    }
    return state
}