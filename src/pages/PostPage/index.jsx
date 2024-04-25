import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Col, Nav, Row, Tab } from 'react-bootstrap'
import "./style.css"
import { addPost, deletePostById, getAllPost, getApprovePost, getPendingApprovePost, getPostsByUser, updateApprovePostById } from '../../redux/actions';
import { CreatePost } from './Form/createPost';
import { ShowPost } from './Form/showPost';
import { EditPost } from './Form/editPost';
import { Dialog } from '../../components/Dialog';

import { CiSearch } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';

import { ItemsPost } from './Form/itemsPost';
import { FaCheck, FaEye } from 'react-icons/fa';


export const PostPage = () => {
    const dispatch = useDispatch();
    const clickedElementTabRef = useRef(null);

    const article = useSelector(state => state.article)
    const approveArticle = useSelector(state => state.article.approvePost)
    const pendingApproveArticle = useSelector(state => state.article.pendingApprovePost)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = (value) => {
        setPostEdit(value)
        return setShow3(true)
    };
    const handleShow31 = () => {
        return setShow3(true)
    };

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [postdetail, setPostDetail] = useState("")
    const [postEdit, setPostEdit] = useState("")
    const [search, setSearch] = useState("")


    useEffect(() => {
        const tabLinks = document.querySelectorAll("a.tablinks");
        clickedElementTabRef.current = tabLinks[0]
        clickedElementTabRef.current.classList.add("active")
    }, []);

    useEffect(() => {
        dispatch(getPostsByUser());
        dispatch(getApprovePost());
        dispatch(getPendingApprovePost());
    }, [search]);

    const showDetailPost = (_post) => {
        setPostDetail(_post)
        handleShow2()
    }

    const deletePost = (_post) => {
        dispatch(deletePostById(_post._id, updateData))
    }

    const updateApprovePost = (_post) => {
        dispatch(updateApprovePostById(_post._id))
    }

    const updateData = (isUpdate) => {
        if (isUpdate)
            dispatch(getAllPost())
    }

    const handleClick = (event) => {
        const clickedLinkRef = event.target.closest("a.tablinks");
        if (!clickedLinkRef) return;

        if (clickedElementTabRef.current) {
            clickedElementTabRef.current.classList.remove("active");
        }

        clickedElementTabRef.current = clickedLinkRef;
        clickedLinkRef.classList.add("active");
    };

    const setSearchCallback = useCallback((value) => {
        setSearch(value);
      }, [setSearch]);

      
    const searchBtn = () => {
        console.log(search);
    }

    return (
        <>
            <div className="row">
                <h4>Bài đăng</h4>
                <div className="d-flex justify-content-between my-5">
                    <div className="add_button ms-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1" onClick={handleShow}>
                            Thêm bài viết
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded tabs-content1'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first1"  >
                    <Row>
                        <Col sm={12} >
                            <div className='tabheader border-bottom'>

                                <div className="d-flex align-items-center h-100">
                                    <Nav.Link className='tablinks nav-link d-flex align-items-center' onClick={handleClick} eventKey="first1">Bài viết </Nav.Link>
                                    <Nav.Link className='tablinks nav-link d-flex align-items-center' onClick={handleClick} eventKey="second1">Chờ duyệt</Nav.Link>
                                </div>

                                <div className="search_user_box">
                                    <input type="search" className="search_user_input" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="search-addon" onChange={(e) => setSearchCallback(e.target.value)} />
                                    <button type="button" className="search_user_btn" data-mdb-ripple-init onClick={() => searchBtn()}><CiSearch /></button>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first1">
                                    <ItemsPost
                                        handleShow={showDetailPost}
                                        data={approveArticle}
                                        btn={[
                                            { title: "Xem chi tiết", onClick: showDetailPost, icon: <FaEye /> },
                                            { title: "Xóa bài đăng", onClick: deletePost, icon: <MdDeleteForever /> }
                                        ]}
                                        nameToFind={search}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second1">
                                    <ItemsPost
                                        handleShow={showDetailPost}
                                        data={pendingApproveArticle}
                                        btn={[
                                            { title: "Xem chi tiết", onClick: showDetailPost, icon: <FaEye /> },
                                            { title: "Phê duyệt bài đăng", onClick: updateApprovePost, icon: <FaCheck /> },
                                            { title: "Xóa bài đăng", onClick: deletePost, icon: <MdDeleteForever /> }
                                        ]}
                                    />

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div >

            <ShowPost post={postdetail} handleClose={handleClose2} show={show2} />
            <CreatePost addPost={addPost} updateData={updateData} handleClose={handleClose} show={show} />
            <EditPost data={postEdit} addPost={addPost} updateData={updateData} handleClose={handleClose3} show={show3} />
            <Dialog show={show4} handleClose={handleClose4} />
        </>
    )
}
