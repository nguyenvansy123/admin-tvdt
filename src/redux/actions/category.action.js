import axios from "../../helpers/axios"
import { toast } from 'react-toastify';
import { categoryConstants } from "./constants";

export const addCategory = (category,updateData) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST })

        await axios.post("/admin/category/create", category).then((res) => {
            if (res.status === 201) {
                const { categories } = res.data
                dispatch({
                    type: categoryConstants.ADD_CATEGORY_SUCCESS,
                    payload: {
                        categories
                    }
                })
                updateData()
                toast.success("đã tạo danh mục thành công")
            }
        }).catch((_error) => {
            dispatch({ type: categoryConstants.ADD_CATEGORY_FAILURE, payload: _error.response.data.message });
            toast.error(_error.response.data.message)
        })

    }
}

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        try {
            const res = await axios.get(`category/getcategories`)
            const { categories } = res.data
            if (res.status === 200) {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories }
                })
            }
        }
        catch (error) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: error.data.error }
            });
        }



    }
}

export const deleteCategories = (category, updateDate) => {
    return async dispatch => {

        dispatch({ type: categoryConstants.DELETE_CATEGORY_REQUEST })
        console.log(category)
        const res = await axios.post(`/admin/category/deletecategory`, category);
        console.log(res);

        if (res.status === 201) {
            dispatch({
                type: categoryConstants.DELETE_CATEGORY_SUCCESS,
                payload: { category: res.data.message }
            });
            toast.success("xóa danh mục thành công")
            updateDate()
        } else {
            dispatch({
                type: categoryConstants.DELETE_CATEGORY_FAILURE
            });
        }
    }
}

export const updateCategory = (category, updateDate) => {
    return async dispatch => {
        console.log(category)
        dispatch({ type: categoryConstants.UPDATE_CATEGORY_REQUEST })

        const res = await axios.post(`/admin/category/updatecategory`, category);
        console.log(res);

        if (res.status === 201) {
            dispatch({
                type: categoryConstants.UPDATE_CATEGORY_SUCCESS
            });
            toast.success("sửa đổi danh mục thành công")
            updateDate()
        } else {
            dispatch({
                type: categoryConstants.UPDATE_CATEGORY_FAILURE
            });
        }
    }
}