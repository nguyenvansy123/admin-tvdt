import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";

import { MdBlock, MdDeleteForever } from "react-icons/md";
import { getApproveUser } from '../../redux/actions';
import { NoDataUI } from '../../components/NoDataUI';
import { FaEye } from 'react-icons/fa';


export const ListUser = ({ ...props }) => {
  const { handleDelete, nameToFind } = props

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.memeber)

  useEffect(() => {
    dispatch(getApproveUser());
  }, [nameToFind]);


  const viewImage = (id) => {
    console.log("id ", id);
  }

  const renderUser = () => {
    if (users.length <= 0)
      return <tr><td colSpan={6}><NoDataUI content={"Bạn không có thành viên trang web nào đang chờ chấp thuận."} /></td></tr>

    if (nameToFind) {
      const member = users?.filter((user) => user.name.includes(nameToFind))
      return member.length > 0 ? member.map(user => renderItemUser(user)) : <tr><td colSpan={6}><NoDataUI content={"Bạn không có thành viên trang web nào đang chờ chấp thuận."} /></td></tr>
    } else {
      return users?.map(user => renderItemUser(user));
    }
  }

  const renderItemUser = (user) => {
    return (
      <tr key={user.id}>
        {/* <td>
          <img src="../images/user.png" className='user-avatar' />
        </td> */}
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
    )
  }

  return (
    <table id="customers">
      <tbody>
        <tr className='table-header'>
          {/* <th>Ảnh đại diện </th> */}
          <th>Tên</th>
          <th>Email đăng nhập</th>
          <th>Vai trò</th>
          <th>Đăng nhập lần cuối cùng</th>
          <th></th>
        </tr>
        {
          renderUser()
        }
      </tbody>
    </table>
  )
}
