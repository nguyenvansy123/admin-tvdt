import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";

import { MdBlock, MdDeleteForever } from "react-icons/md";
import { getApproveUser } from '../../redux/actions';
import { NoDataUI } from '../../components/NoDataUI';
import { FaEye } from 'react-icons/fa';


export const ListUser = ({ ...props }) => {
  const { handleDelete } = props
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getApproveUser());
  }, []);


  const viewImage = (id)=>{
      console.log("id ",id);
  }


  return (
    <table id="customers">
      <tbody>
        <tr className='table-header'>
          <th>Ảnh đại diện </th>
          <th>Tên</th>
          <th>Email đăng nhập</th>
          <th>Vai trò</th>
          <th>Đăng nhập lần cuối cùng</th>
          <th></th>
        </tr>
        {
          users?.memeber.length > 0 ?
            (
              users?.memeber?.map((user, i) =>
              (
                <tr key={i}>
                  <td>
                    <img src="../images/user.png" className='user-avatar' />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>20/20/2024</td>
                  <td>
                    <div className="dropdown-box">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <BsThreeDots />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='dropdown-content'>
                          <Dropdown.Item as="button" onClick={() => viewImage(user.id)}><FaEye className="ml-2" />Chi tiết tài khoản</Dropdown.Item>
                          <Dropdown.Item as="button" onClick={() => handleDelete(user.id)}><MdDeleteForever className="ml-2" />Xóa Tài khoản</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))
            )
            :
            <tr><td colSpan={6}><NoDataUI content={"Bạn không có thành viên trang web nào đang chờ chấp thuận."} /></td></tr>
        }
      </tbody>
    </table>
  )
}
