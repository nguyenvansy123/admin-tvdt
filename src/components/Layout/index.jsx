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

export const Layout = () => {
    return (
        <>
            <SidebarPro />
            {/* <header id="ad_header" className="main_menu home_menu w-100">
                <div className="container d-flex align-items-center justify-content-between">
                    <p>Xin chào <span>admin</span></p>
                    <div className="ad_header">
                        <FaPowerOff />
                        <span>Đăng xuất</span>
                    </div>
                </div>
            </header> */}
            <section className="main_content">
                <Container fluid="md" g={0}>
                    <div className="header_inner d-flex justify-content-end">
                        <div className="profile_info">
                            <img src="https://demo.dashboardpack.com/hospital-html/img/client_img.png" alt="" />
                            <div className="profile_info_iner">
                                <h5>Dr. Robar Smith</h5>
                                <div className="profile_info_details">
                                    <a href="#">My Profile <FaUser className="info_icon" /></a>
                                    <a href="#">Settings <IoMdSettings className="info_icon" /></a>
                                    <a href="#">Log Out <IoArrowUndo className="info_icon" /></a>
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
