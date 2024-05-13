import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../redux/actions';
import { Col, Modal, Row } from 'react-bootstrap';
import { generatePublicUrlFile, generatePublicUrlImages } from '../../../utils/urlConfig';
import { FaRegFileImage } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { IoCloudUploadOutline } from 'react-icons/io5';

export const EditPost = ({ ...props }) => {
    const { data, updatePost, updateData, handleClose, show } = props
    const dispatch = useDispatch();
    const category = useSelector(state => state.category)

    const [image, setImage] = useState(null);
    const [fileName, SetFileName] = useState("Không có ảnh nào được chọn")

    const [filePDF, setFilePDF] = useState(null);
    const [fileNamePDF, SetFileNamePDF] = useState("Không có tập tin nào được chọn")

    const [title, setTitle] = useState("")
    const [publisher, setPublisher] = useState("")
    const [numberOfPage, setNumberOfPage] = useState("")
    const [linkDowload, setLinkDowload] = useState("")
    const [arliclePictures, setArliclePictures] = useState(null);
    const [categoryId, setCategoryId] = useState("");
    const [linkPreview, setLinkPreview] = useState("");
    const [fileDowload, setFileDowload] = useState("")

    const useRefCheck = useRef(false)
    useEffect(() => {
        getData()
    }, [data])

    const getData = () => {

        setTitle(data.title)
        setPublisher(data.publisher)
        setNumberOfPage(data.numberOfPages)
        setCategoryId(data.category)

        setArliclePictures(data.arliclePictures)
        setImage(generatePublicUrlImages(data.arliclePictures))
        SetFileName(data.arliclePictures)

        setFileDowload(data.linkDownload)
        setFilePDF(generatePublicUrlFile(data.linkDownload))
        SetFileNamePDF(data.linkDownload)

    }

    const handlePost = (e) => {

        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("publisher", publisher)
        formdata.append("numberOfPage", numberOfPage)
        formdata.append("linkDowload", fileDowload)
        formdata.append("arliclePictures", arliclePictures)
        formdata.append("categoryId", categoryId)
        formdata.append("linkPreview", linkPreview)
        console.log(title);
        dispatch(updatePost(data?._id, formdata, updateNewData))

        e.preventDefault();
    }

    const updateNewData = () => {
        updateData()
        handleCloseForm()
    }

    const handleCloseForm = () => {

        setTitle("")
        setPublisher("")
        setNumberOfPage("")
        setLinkDowload("")
        setArliclePictures(null)
        setCategoryId("")
        setLinkPreview("")
        handleClose()
    }

    const handleImage = (e) => {

        setArliclePictures(e.target.files[0])
        setImage(URL.createObjectURL(e.target.files[0]))
        SetFileName(e.target.files[0].name)
    }

    const handleFile = (e) => {
        setFileDowload(e.target.files[0])
        setFilePDF(URL.createObjectURL(e.target.files[0]))
        SetFileNamePDF(e.target.files[0].name)
    }


    const renderImage = () => {

        return <>
            <div className="file-upload">
                {
                    image ?
                        <img src={image} width="100%" height="100%" alt={fileName} />
                        :
                        (<>
                            <div className="upload-icon"><IoCloudUploadOutline /></div>
                            <h4>Bấm vào ô để tải ảnh nên</h4>
                        </>)
                }
                <input type="file" onChange={(e) => handleImage(e)} accept="image/*" />
            </div>
            <div className="file-uploaded-row">
                <FaRegFileImage />
                <div className='d-flex align-items-center'>
                    <span className='file-uploaded-text'>{fileName}</span>
                    <MdDeleteForever className='delete-icon' onClick={() => {
                        SetFileName("Không có tập tin nào được chọn")
                        setImage(null)
                    }} />
                </div>
            </div>
        </>

    }

    const renderFile = () => {

        return <>
            <div className="file-upload">
                {
                    filePDF ?
                        <iframe
                            src={filePDF}
                            style={{ width: "100%", height: "100%" }}
                        />
                        :
                        (<>
                            <div className="upload-icon"><IoCloudUploadOutline /></div>
                            <h4>Bấm vào ô để tải file nên</h4>
                        </>)
                }
                <input type="file" onChange={(e) => handleFile(e)} accept="application/pdf" />
            </div>
            <div className="file-uploaded-row">
                <FaRegFileImage />
                <div className='d-flex align-items-center'>
                    <span className='file-uploaded-text'>{fileNamePDF}</span>
                    <MdDeleteForever className='delete-icon' onClick={() => {
                        SetFileNamePDF("Không có tập tin nào được chọn")
                        setFilePDF(null)
                    }} />
                </div>
            </div>
        </>


    }

    return (
        <Modal size="xl" show={show} onHide={handleCloseForm} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title className='fs-1'>Sửa bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body className='form-edit'>
                <section id="main-content">
                    <section className="book-detail">
                        <div className="row">
                            <div className="col-12">

                                {
                                    data &&
                                    <form method='post' encType='multipart/form-data'>
                                        <div className="create-post post-editor">
                                            <Row>
                                                <Col xs={6} md={4}>
                                                    <div className="d-flex flex-column">
                                                        <input
                                                            type="text" className="editor-title-input" placeholder="Tiêu đề"
                                                            defaultValue={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                        />
                                                        <input
                                                            type="text" className="editor-title-input " placeholder="Tác giả"
                                                            defaultValue={publisher}
                                                            onChange={(e) => setPublisher(e.target.value)}
                                                        />
                                                        <input
                                                            type="text" className="editor-title-input " placeholder="Tổng số trang"
                                                            defaultValue={numberOfPage}
                                                            onChange={(e) => setNumberOfPage(e.target.value)}
                                                        />
                                                        <select className="editor-title-input" aria-label="Default select example"
                                                            defaultValue={categoryId}
                                                            onChange={(e) => setCategoryId(e.target.value)}
                                                        >
                                                            {
                                                                category?.categories && category?.categories.map((_category) => {

                                                                    return <option value={_category._id} key={_category._id} >{_category.name}</option>
                                                                })
                                                            }

                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className="file-upload-box">
                                                        {
                                                            renderImage()
                                                        }

                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className="file-upload-box">
                                                        {renderFile()}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="group-btn">
                                                <button id="post-btn" className="btn post-btn" onClick={handlePost}>
                                                    Update  Post
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                }

                            </div>
                        </div>
                    </section>
                </section>
            </Modal.Body >
        </Modal >
    )
}
