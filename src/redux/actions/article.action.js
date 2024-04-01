import { postConstants } from "./constants";
import axios from "../../helpers/axios"
import { toast } from "react-toastify";

export const getAllPost = () => {
    return async dispatch => {
        dispatch({ type: postConstants.GET_ALL_POST_REQUEST })
        const res = await axios.get(`/post/getAllPost`)
        if (res.status === 200) {
            dispatch({
                type: postConstants.GET_ALL_POST_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: postConstants.GET_ALL_POST_FAILURE
            })
        }
    }
}

export const getApprovePost = () => {
    return async dispatch => {
        dispatch({ type: postConstants.GET_APPROVE_POST_REQUEST })
        const res = await axios.get(`/post/getApprovedPost`)
        if (res.status === 200) {
            dispatch({
                type: postConstants.GET_APPROVE_POST_SUCCESS,
                payload: res.data
            })

        } else {
            dispatch({
                type: postConstants.GET_APPROVE_POST_FAILURE
            })
        }
    }
}

export const getPendingApprovePost = () => {
    return async dispatch => {
        dispatch({ type: postConstants.GET_PENDING_APPROVE_POST_REQUEST })
        const res = await axios.get(`/post/getPendingApprovedPost`)
        if (res.status === 200) {
            dispatch({
                type: postConstants.GET_PENDING_APPROVE_POST_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: postConstants.GET_PENDING_APPROVE_POST_FAILURE
            })
        }
    }
}

export const getPostsByUser = () => {
    return async dispatch => {
        dispatch({ type: postConstants.GET_POST_BY_USER_REQUEST })
        const userString = localStorage.getItem('user');
        const userObject = JSON.parse(userString);
        const res = await axios.get(`/post/getPostByUser/${userObject?._id}`)
        if (res.status === 200) {
            dispatch({
                type: postConstants.GET_POST_BY_USER_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: postConstants.GET_POST_BY_USER_FAILURE
            })
        }
    }
}

export const addPost = (form) => {
    console.log(form)
    return async dispatch => {
        dispatch({ type: postConstants.ADD_POST_REQUEST })
        const res = await axios.post(`/post/create`, form, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })

        console.log(res.data);
        if (res.status === 201) {
            dispatch({
                type: postConstants.ADD_POST_SUCCESS
            })
        } else {
            console.log(res.error);
            dispatch({
                type: postConstants.ADD_POST_FAILURE,
                payload: { error: res.error }
            })
        }
    }
}

export const deletePostById = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`/post/deletePostId/${id}`);
            dispatch({ type: postConstants.DELETE_POST_BY_ID_REQUEST });
            if (res.status === 202) {
                dispatch({
                    type: postConstants.DELETE_POST_BY_ID_SUCCESS,
                    payload: res.data
                });
                toast.success("xóa thành công")

            } else {
                const { error } = res.data;
                dispatch({
                    type: postConstants.DELETE_POST_BY_ID_FAILURE,
                    payload: {
                        error
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateStatusPostById = (articleId, newStatus, updateData) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`/post/updateStatusPost`, { articleId, newStatus });
            dispatch({ type: postConstants.UPDATE_STATUS_POST_BY_ID_REQUEST });
            if (res.status === 201) {
                dispatch({
                    type: postConstants.UPDATE_STATUS_POST_BY_ID_SUCCESS,
                    payload: res.data
                });
                // updateData(true)
                toast.success("phê duyệt thành công")
                console.log(res.status)
            } else {
                const { error } = res.data;
                dispatch({
                    type: postConstants.UPDATE_STATUS_POST_BY_ID_FAILURE,
                    payload: {
                        error
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const updateApprovePostById = (articleId) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`/post/updateApprovrePost/${articleId}`);
            dispatch({ type: postConstants.UPDATE_APPROVE_POST_REQUEST });
            if (res.status === 201) {
                dispatch({
                    type: postConstants.UPDATE_APPROVE_POST_SUCCESS,
                    payload: res.data
                });
                // updateData(true)
                toast.success("phê duyệt thành công")
                console.log(res.status)
            } else {
                const { error } = res.data;
                dispatch({
                    type: postConstants.UPDATE_APPROVE_POST_FAILURE,
                    payload: {
                        error
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const downloadFile = (filename) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`/download/file`,{filename});
            dispatch({ type: postConstants.DOAWNLOAD_POST_REQUEST });
            if (res.status === 200) {
                dispatch({
                    type: postConstants.DOAWNLOAD_POST_SUCCESS, 
                })
            }
        } catch (error) {
            dispatch({
                type: postConstants.DOAWNLOAD_POST_FAILURE
            })
        }
     
    }
}

