import React from 'react'
import { FaEdit } from "react-icons/fa";
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import "./style.css"

export const Baidang = () => {
    return (
        <>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="page-header-left">
                                <h3>
                                    Bài đăng
                                    <small>TVDT Admin panel</small>
                                </h3>
                            </div>
                        </div>
                        {/* <div className='col-lg-6'>
                    </div> */}
                    </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="car-header">
                                <form className="form-inline search-form search-box">
                                    <div className="form-group">
                                        <input
                                            className="form-control-plaintext"
                                            type="search"
                                            placeholder="Search.."
                                        />
                                    </div>
                                </form>
                                <button
                                    type="button"
                                    className="btn btn-primary mt-md-0 mt-2"
                                    data-bs-toggle="modal"
                                    data-original-title="test"
                                    data-bs-target="#exampleModal"
                                >
                                    Add Sub Category
                                </button>


                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table-post" id='postTable'>
                                <thead>
                                    <tr>
                                        <th>Ảnh</th>
                                        <th>Tên Bài Đăng</th>
                                        <th>Ngày đăng</th>
                                        <th>Trạng thái</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src='../images/php.png' />
                                        </td>
                                        <td>
                                            SUY HÔ HẤP SƠ SINH
                                        </td>
                                        <td>
                                            30/03/2024
                                        </td>
                                        <td>
                                            <span>Success</span>
                                        </td>
                                        <td>
                                            <a>
                                                <FaEdit title="Edit" />
                                            </a>
                                            <a>
                                                <IoEye title="View" />
                                            </a>
                                            <a>
                                                <MdDelete title="Delete"/>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
