import { userConstants } from "./constants"
import axios from "../../helpers/axios"
import { toast } from 'react-toastify';

export const getAllUser = () => {
    return async dispatch => {
        dispatch({ type: userConstants.GET_ALL_USER_REQUEST });
        try {
            const res = await axios.get(`/user/getAllUser`)
            const users = res.data
            if (res.status === 200) {
                dispatch({
                    type: userConstants.GET_ALL_USER_SUCCESS,
                    payload: { users }
                })
            }
        }
        catch (error) {
            dispatch({
                type: userConstants.GET_ALL_USER_FAILURE,
                payload: { error: error.data.error }
            });
        }
    }
}

export const getApproveUser = () => {
    return async dispatch => {
        dispatch({ type: userConstants.GET_APPROVE_USER_REQUEST });
        try {
            const res = await axios.get(`/user/getApprovedUsers`)
            const users = res.data
            if (res.status === 200) {
                dispatch({
                    type: userConstants.GET_APPROVE_USER_SUCCESS,
                    payload: { users }
                })
            }
        }
        catch (error) {
            dispatch({
                type: userConstants.GET_APPROVE_USER_FAILURE,
                payload: { error: error.data.error }
            });
        }
    }
}

export const getAwaitApproveUser = () => {
    return async dispatch => {
        dispatch({ type: userConstants.GET_AWAITING_APPROVE_USER_REQUEST });
        try {
            const res = await axios.get(`/user/getAwaitApprovedUsers`)
            const users = res.data
            if (res.status === 200) {
                dispatch({
                    type: userConstants.GET_AWAITING_APPROVE_USER_SUCCESS,
                    payload: { users }
                })
            }
        }
        catch (error) {
            dispatch({
                type: userConstants.GET_AWAITING_APPROVE_USER_FAILURE,
                payload: { error: error.data.error }
            });
        }
    }
}

export const deleteUserById = (id,updateData) => {
    return async dispatch => {
        dispatch({ type: userConstants.DELETE_USER_BY_ID_REQUEST });
        try {
            const res = await axios.delete(`/user/deleteUsersById/${id}`)
            const users = res.data
 
            if (res.status === 202) {
                dispatch({
                    type: userConstants.DELETE_USER_BY_ID_SUCCESS,
                    payload: { users }
                })
                updateData()
                toast.success("xóa thành công")
            }
        }
        catch (error) {
            dispatch({
                type: userConstants.DELETE_USER_BY_ID_FAILURE,
                payload: { error: error.data.error }
            });
        }
    }
}


export const approveUserById = (id,updateData) => {
    return async dispatch => {
        dispatch({ type: userConstants.APPROVE_USER_BY_ID_REQUEST });
        try {
            const res = await axios.put(`/user/approveUsersById/${id}`)
            const users = res.data
            if (res.status === 200) {
                dispatch({
                    type: userConstants.APPROVE_USER_BY_ID_SUCCESS,
                    payload: { users }
                })
                updateData()
                toast.success("update thành công")
            }
        }
        catch (error) {
            dispatch({
                type: userConstants.APPROVE_USER_BY_ID_FAILURE,
                payload: { error: error.data.error }
            });
        }
    }
}
