import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";
import { MdBlock, MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { getAwaitApproveUser } from '../../redux/actions';
import { NoDataUI } from '../../components/NoDataUI';
import { GrFormView } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generatePublicUrlImages } from '../../utils/urlConfig';
import { approveUserById, deleteUserById, getAllUser } from '../../redux/actions';

export const ListWaitApprovedUsers = ({ ...props }) => {
    const { handleDelete, handleApprove, nameToFind } = props;

    const dispatch = useDispatch();

    const users = useSelector(state => state.user.pendingMemeber)

    const [show, setShow] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleClose = () => {
        setFileName("");
        setShow(false)
    };
    const handleShow = (_fileName) => {
        setShow(true)
        setFileName(_fileName);
    };

    useEffect(() => {
        dispatch(getAwaitApproveUser());
    }, [nameToFind]);

    const renderUser = () => {
        if (users.length <= 0)
            return <tr><td colSpan={6}><NoDataUI content={"Bạn không có thành viên trang web nào chờ được phê duyệt."} /></td></tr>

        if (nameToFind) {
            const pendingMemeber = users?.filter((user) => user.name.includes(nameToFind))
            return pendingMemeber.length > 0 ? pendingMemeber.map(user => renderItemUser(user)) : <tr><td colSpan={6}><NoDataUI content={"Bạn không có thành viên trang web nào chờ được phê duyệt."} /></td></tr>
        } else {
            return users?.map(user => renderItemUser(user));
        }
    }

    const renderItemUser = (user) => {
        return (
            <tr key={user.id} className='text-center'>
                {/* <td>
                    <img src="../images/user.png" className='user-avatar' />
                </td> */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button className='border-0 fs-1 bg-opacity-0' onClick={() => handleShow(user.degree)}><GrFormView /></button></td>
                <td>
                    <div className="dropdown-box">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <BsThreeDots />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdown-content'>
                                <Dropdown.Item as="button" onClick={() => handleDelete(user.id)} ><MdDeleteForever />Xóa Tài khoản</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => handleApprove(user.id)}><FaCheck />Phê duyệt tài khoản</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <>
            <table id="customers">
                <tbody>
                    <tr className='table-header text-center'>
                        {/* <th className='text-center'>Ảnh đại diện </th> */}
                        <th className='text-center'>Tên</th>
                        <th className='text-center'>Email đăng nhập</th>
                        <th className='text-center'>Vai trò</th>
                        <th className='text-center'>Ảnh bằng cấp</th>
                        <th className='text-center'></th>
                    </tr>
                    {
                        renderUser()
                    }
                </tbody>
            </table>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ảnh</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <img src={fileName && generatePublicUrlImages(fileName)} width="100%" height="100%" alt="" />
                </Modal.Body>
            </Modal>
        </>
    )
}
