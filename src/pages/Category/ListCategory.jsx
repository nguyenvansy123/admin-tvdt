import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdOutlineAutoDelete } from "react-icons/md";
import "./style.css"
import { useDispatch } from 'react-redux';
import { deleteCategories } from '../../redux/actions/category.action';

export const ListCategory = ({ data, handleUpdate }) => {
    const dispatch = useDispatch();

    const listItemsCategory = () => {
        return data.length <= 0 ?
            <p>hiện không có danh mục nào cả</p>
            :
            itemCategory();
    }

    
    const CheckHandleDeleteClick = (id) => {
        var isCheck = window.confirm("Bạn có muốn danh mục này không");
        if(isCheck)
            {
                dispatch(deleteCategories({ id }))
            }
    }


    const itemCategory = () => {
        return data && data.map((item, index) =>
        (<div className='item_category col d-flex justify-content-between px-5 py-4 border-top' key={index}>
            <div className="item_info d-flex">
                <img className='rounded' src="../images/file.jpg" width="110px" height="74px" alt="" />
                <div className="ms-3 d-flex flex-column justify-content-center">
                    <span className="item_info_title d-block fs-5">{item.name}</span>
                    <span className="item_info_totalView fs-6 mt-3"> 3 bài đăng &nbsp;·&nbsp; 3 lượt xem</span>
                </div>
            </div>
            <div className="item_action d-flex align-items-center">
                <button className='bg-info text-white border-0 item_action_editor d-flex align-items-center px-4 py-3 rounded-pill me-2 fs-5' onClick={() => handleUpdate(item)} ><FaEdit className='me-1' /> chỉnh sửa </button>
                <button className='bg-danger text-white border-0 item_action_delete d-flex align-items-center px-4 py-3 rounded-pill fs-5' onClick={() => CheckHandleDeleteClick(item._id)}><MdOutlineAutoDelete className='me-1' /> xóa danh mục</button>
            </div>

        </div>)
        )
    }

    const handleDelete = (id) => {
        dispatch(deleteCategories({ id }))
    }



    return (
        <div className='bg-white rounded'>
            <h4 className='p-4'>Danh mục</h4>
            <div className="list_category">
                {listItemsCategory()}
            </div>
        </div>
    )
}
