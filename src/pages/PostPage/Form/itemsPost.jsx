import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import { NoDataUI } from '../../../components/NoDataUI'
import { generatePublicUrlImages } from '../../../utils/urlConfig'

export const ItemsPost = ({ handleShow, data, btn }) => {

    return (
        <div className="list_category bg-white">
            {
                data && data.length > 0 ? data.map((_, key) => (
                    <div className="item_post col d-flex justify-content-between px-5 py-4 border-top" key={key}>
                        <div className="item_info d-flex">
                            <img
                                className="rounded"
                                src={generatePublicUrlImages(_.arliclePictures)}
                                width="110px"
                                height="74px"
                                alt=""
                            />
                            <div className="ms-3 d-flex flex-column justify-content-center">
                                <span className="item_info_title d-block fs-5">{_.title}</span>
                                <span className="item_info_totalView fs-6 mt-3">
                                    20/02/2024
                                </span>
                            </div>
                        </div>
                        <div className="item_action d-flex align-items-center">
                            <button className='btnPost-detail' onClick={() => handleShow(_)}>
                                Xem bài đăng
                            </button>

                            <div className="dropdown-box">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" as="button" className='btn-new'>
                                        <BsThreeDots />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-content'>
                                        {btn && btn.map((value, i) => (
                                            <Dropdown.Item key={i} as="button" onClick={() => value.onClick(_)} >{value.icon} {value.title}</Dropdown.Item>
                                        ))}

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                ))
                    :
                    <NoDataUI content="Không có bài đăng nào cả" />
            }
        </div>
    )
}
