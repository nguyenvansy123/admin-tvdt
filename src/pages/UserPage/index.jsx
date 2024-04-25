import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
import { approveUserById, deleteUserById, getAllUser } from '../../redux/actions';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { ListUser } from './listUser';

import { CiSearch } from "react-icons/ci";
import { ListWaitApprovedUsers } from './listWaitApprovedUsers';

export const UserPage = () => {
  const dispatch = useDispatch();
  const clickedElementTabRef = useRef(null);


  const user = useSelector(state => state.user)
  const [key, setKey] = useState('home');
  const [search, setSearch] = useState("")

  useEffect(() => {
    const tabLinks = document.querySelectorAll("a.tablinks");
    clickedElementTabRef.current = tabLinks[0]
    clickedElementTabRef.current.classList.add("active")
  }, []);


  const handleClick = (event) => {
    const clickedLinkRef = event.target.closest("a.tablinks");
    if (!clickedLinkRef) return;

    if (clickedElementTabRef.current) {
      clickedElementTabRef.current.classList.remove("active");
    }

    clickedElementTabRef.current = clickedLinkRef;
    clickedLinkRef.classList.add("active");
  };

  const deleteUser = (id) => {
    dispatch(deleteUserById(id))
  }

  const approveUser = (id) => {
    dispatch(approveUserById(id))
  }

  const handleShow = () => {

  }

  const setSearchCallback = useCallback((value) => {
    setSearch(value);
  }, [setSearch]);


  return (
    <>
      <div className="row">
        <h4>Quản lý thành viên</h4>
        <div className="d-flex justify-content-between my-5">
          {/* <div className="add_button ms-2">
            <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1" onClick={handleShow}>
              Thêm user
            </a>
          </div > */}
        </div>
      </div>
      <div className="bg-white rounded">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first"  >
          <Row>
            <Col sm={12} >
              <div className='tabheader border-bottom'>

                <div className="d-flex align-items-center h-100">
                  <Nav.Link className='tablinks nav-link d-flex align-items-center' onClick={handleClick} eventKey="first">Thành viên trang web</Nav.Link>
                  <Nav.Link className='tablinks nav-link d-flex align-items-center' onClick={handleClick} eventKey="second">Chờ duyệt</Nav.Link>
                </div>

                <div className="search_user_box">
                  <input type="search" className="search_user_input" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="search-addon" onChange={(e) => setSearchCallback(e.target.value)} />
                  <button type="button" className="search_user_btn" data-mdb-ripple-init><CiSearch /></button>
                </div>
              </div>
            </Col>

            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first"><ListUser handleDelete={deleteUser} nameToFind={search} /></Tab.Pane>
                <Tab.Pane eventKey="second"><ListWaitApprovedUsers handleDelete={deleteUser} handleApprove={approveUser} nameToFind={search} /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}