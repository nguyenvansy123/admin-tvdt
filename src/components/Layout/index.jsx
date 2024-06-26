import React from "react";
import { Outlet } from "react-router-dom"
import "./style.css";
import { FaPowerOff, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoArrowUndo } from "react-icons/io5";
import { Container } from "react-bootstrap";
// import { AdminFooter } from "../../components/AminFooter";
import { SidebarPro } from "../SidebarPro";
import { Footer } from "../Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';


export const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(signout(navigate))
    }

    return (
        <>
            <SidebarPro />

            <section className="main_content">
                <Container fluid="md" g={0}>
                    <div className="header_inner d-flex justify-content-end">
                        <div className="profile_info">
                            <img src="../images/admin.png" alt="" />
                            <div className="profile_info_iner">
                                <h5>Hi Admin!</h5>
                                <div className="profile_info_details">
                                    <a href="#">My Profile <FaUser className="info_icon" /></a>
                                    <a href="#">Settings <IoMdSettings className="info_icon" /></a>
                                    <a href="#" onClick={logout}>Log Out <IoArrowUndo className="info_icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="main_content_iner">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                draggable
            // pauseOnHover
            />
        </>

    )
}
