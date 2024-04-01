import React, { useRef } from 'react'
import { FaHome, FaUser } from "react-icons/fa";
import { BsPostcardHeartFill, BsSortAlphaDown } from "react-icons/bs";
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
                    {/* thành viên */}
                    <SubMenu icon={<FaUser />} label={<span>Thành viên</span>} >
                        <MenuItem component={<Link to="user" />}> Danh sách thành viên </MenuItem>
                        <MenuItem component={<Link to="user" />}> Thêm thành viên </MenuItem>
                    </SubMenu>
                    {/* bài đăng */}
                    <SubMenu icon={<BsPostcardHeartFill />} label={<span>Bài đăng</span>}>
                        <MenuItem component={<Link to="post" />}> Danh sách bài đăng </MenuItem>
                        <MenuItem component={<NavLink to="post" />}> Thêm bài đăng </MenuItem>
                    </SubMenu>
                    {/* danh mục */}
                    <SubMenu icon={<TbCategory2 />} label={<span>Danh mục</span>}>
                        <MenuItem component={<NavLink to="category" />}> Danh mục </MenuItem>
                        <MenuItem component={<NavLink to="category" />}> Thêm danh mục </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            {/* 
            <Sidebar>
      <Menu>
        <Menu>
          <SubMenu icon={<Icon name="bar-chart" />} label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu icon={<Icon name="global" />} label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu icon={<Icon name="ink-bottle" />} label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar> */}
        </nav >

    )
}
