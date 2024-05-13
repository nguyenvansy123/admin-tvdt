import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
// import { Col, Nav, Row, Tab } from 'react-bootstrap'

export const UISetting = () => {
  const dispatch = useDispatch();



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="page-header-left">
              <h3>
                Cài đặt giao diện

              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className='bg-white rounded tabs-content1'>

            </div >
          </div>
        </div>
      </div>
    </>
  )
}
