import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import { NoDataUI } from '../../../components/NoDataUI'
import { generatePublicUrlImages } from '../../../utils/urlConfig'

export const ItemsPost = ({ handleShow, data, btn, nameToFind }) => {


    const renderData = () => {
        const filteredData = nameToFind ? data.filter(post => post.title.includes(nameToFind)) : data;
        return filteredData.length > 0 ? filteredData.map(post => renderItem(post)) : <NoDataUI content="Không có bài đăng nào cả" />;
    }
    

    const renderItem = (item) => {
        return (<div className="item_post col d-flex justify-content-between px-5 py-4 border-top" key={item._id}>
            <div className="item_info d-flex">
                <img
                    className="rounded"
                    src={generatePublicUrlImages(item.arliclePictures)}
                    width="110px"
                    height="74px"
                    alt=""
                />
                <div className="ms-3 d-flex flex-column justify-content-center">
                    <span className="item_info_title d-block fs-5">{item.title}</span>
                    <span className="item_info_totalView fs-6 mt-3">
                        20/02/2024
                    </span>
                </div>
            </div>
            <div className="item_action d-flex align-items-center">
                <button className='btnPost-detail' onClick={() => handleShow(item)}>
                    Xem bài đăng
                </button>

                <div className="dropdown-box">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" as="button" className='btn-new'>
                            <BsThreeDots />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='dropdown-content'>
                            {btn && btn.map((value, i) => (
                                <Dropdown.Item key={i} as="button" onClick={() => value.onClick(item)} >{value.icon} {value.title}</Dropdown.Item>
                            ))}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>)
    }

    return (
        <div className="list_category bg-white">
            {
                renderData()
            }
        </div>
    )
}
