import React, { useRef } from 'react'
import { FaHome, FaUser } from "react-icons/fa";
import { BsPostcardHeartFill, BsSortAlphaDown } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { TbCategory2 } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import "./style.css"
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';

export const SidebarPro = () => {
    const clickedElementRef = useRef(null);
    const clickedElementLinkRef = useRef(null);


    const handleClick = (event) => {
        const clickedLi = event.target.closest("li");
        if (!clickedLi) return;

        if (clickedElementRef.current) {
            clickedElementRef.current.classList.remove("active_li");
        }

        clickedElementRef.current = clickedLi;
        clickedLi.classList.add("active_li");

        if (clickedElementLinkRef.current) {
            clickedElementLinkRef.current.classList.remove("active");
        }

        const clickedLink = clickedLi.querySelector("a");
        if (clickedLink) {
            clickedElementLinkRef.current = clickedLink;
            clickedLink.classList.add("active");
        }
    };


    return (

        <nav className="sidebar">
            <div className="sidebar-logo">
                <img src="../images/logoRHM-1-1-300x293.png" alt="" />
            </div>
            <Sidebar >
                <Menu>
                    <MenuItem icon={<FaHome />}
                        component={<NavLink to="dashboard" className={({ isActive }) => isActive ? "active" : ""} />}
                    >
                        <span>Dashboard</span>
                    </MenuItem>
                    {/* bài đăng */}
                    <MenuItem icon={<BsPostcardHeartFill />} component={<Link to="post" />}> Danh sách bài đăng </MenuItem>
                    
                    {/* thành viên */}
                    <MenuItem icon={<FaUser />} component={<Link to="user" />}> Danh sách thành viên </MenuItem>
                    
                    {/* danh mục */}
                    <MenuItem icon={<TbCategory2 />} component={<NavLink to="category" />}> Danh mục </MenuItem>
                    
                    {/* quản lý trang web */}
                    <SubMenu icon={<GrUserManager />} label={<span>Quản lý trang web</span>}>
                        <MenuItem component={<NavLink to="#" />}> Bài đăng </MenuItem>
                        <MenuItem component={<NavLink to="#" />}> Giới thiệu </MenuItem>
                        <MenuItem component={<NavLink to="#" />}> Giao diện  </MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
        </nav >

    )
}
