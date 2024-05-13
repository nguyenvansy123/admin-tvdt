import React from 'react'
import {  FaRegUser, FaUserPlus } from "react-icons/fa";
import { BsFillPostcardFill } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";

export const DashboardPage = () => {
    return (
        <div className="quick_activity_wrap">
            <div className="single_quick_activity d-flex">
                <div className="activity_icon">
                    <FaRegUser className="icon icon-user" />
                </div>
                <div className="count_content">
                    <h3><span className="counter">520</span> </h3>
                    <p>Users</p>
                </div>
            </div>
            <div className="single_quick_activity d-flex">
                <div className="activity_icon">
                    <BsFillPostcardFill className="icon icon-post" />
                </div>
                <div className="count_content">
                    <h3><span className="counter">520</span> </h3>
                    <p>Post</p>
                </div>
            </div>
            <div className="single_quick_activity d-flex">
                <div className="activity_icon">
                    <FaUserPlus className="icon icon-add-user" />
                </div>
                <div className="count_content">
                    <h3><span className="counter">520</span> </h3>
                    <p>Doctors</p>
                </div>
            </div>
            <div className="single_quick_activity d-flex">
                <div className="activity_icon">
                    <MdOutlinePostAdd className="icon icon-add-post" />
                </div>
                <div className="count_content">
                    <h3><span className="counter">520</span> </h3>
                    <p>Doctors</p>
                </div>
            </div>
        </div>
    )
}
