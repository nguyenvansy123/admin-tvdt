import React from 'react'
import "./style.css"

export const NoDataUI = ({ content }) => {
    return (
        <div className='NoData-box  '>
            {/* <span className='d-block'><GiDesert /></span> */}
            <img src="../images/desert.png" alt="" />
            <p>{content}</p>
        </div>
    )
}
