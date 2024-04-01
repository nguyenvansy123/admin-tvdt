import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategory } from '../../../actions';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegFileImage } from "react-icons/fa";
import { MdDeleteForever, MdSaveAlt } from "react-icons/md";
import { getAllCategory } from '../../../redux/actions/category.action';

export const CreatePost = ({ ...props }) => {
    const { addPost, updateData, handleClose, show } = props
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
    const [hasFetchedData, setHasFetchedData] = useState(false);
    const [fileDowload, setFileDowload] = useState("")

    // Sử dụng useState để tạo trạng thái cho checkbox
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (!hasFetchedData) {
            dispatch(getAllCategory());
            setHasFetchedData(true);
        }
    }, [dispatch, hasFetchedData]);

    const handlePost = (e) => {

        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("publisher", publisher)
        formdata.append("numberOfPage", numberOfPage)
        formdata.append("linkDowload", fileDowload)
        formdata.append("arliclePictures", arliclePictures)
        formdata.append("categoryId", categoryId)
        formdata.append("linkPreview", linkPreview)

        dispatch(addPost(formdata, updateNewData))

        e.preventDefault();
    }

    const updateNewData = () => {
        updateData(true)
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
        if (!e.target.files[0])
            return
        setArliclePictures(e.target.files[0])

        setImage(URL.createObjectURL(e.target.files[0]))
        SetFileName(e.target.files[0].name)
    }

    const handleFile = (e) => {
        if (!e.target.files[0])
            return
        setFileDowload(e.target.files[0])   
        console.log(URL.createObjectURL(e.target.files[0]));
        setFilePDF(URL.createObjectURL(e.target.files[0]))
        SetFileNamePDF(e.target.files[0].name)
    }

    return (
        <Modal size="xl" show={show} centered onHide={handleCloseForm}>
            <Modal.Header closeButton>
                <Modal.Title className='fs-1'>Tạo bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form method='post' encType='multipart/form-data'>
                    <div className="create-post post-editor">
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="d-flex flex-column">
                                    <input
                                        type="text" className="editor-title-input" placeholder="Tiêu đề"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <input
                                        type="text" className="editor-title-input " placeholder="Tác giả"
                                        onChange={(e) => setPublisher(e.target.value)}
                                    />
                                    <input
                                        type="text" className="editor-title-input " placeholder="Tổng số trang"
                                        onChange={(e) => setNumberOfPage(e.target.value)}
                                    />
                                    <select className="editor-title-input" aria-label="Default select example"
                                        onChange={(e) => setCategoryId(e.target.value)}
                                    >
                                        <option value={0}>Chọn danh mục</option>
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
                                    <div className="file-upload">
                                        {
                                            image ?
                                                <img src={image} width="100%" height="100%" alt={fileName} />
                                                :
                                                (<>
                                                    <div className="upload-icon"><IoCloudUploadOutline /></div>
                                                    <h4>Bấm vào ô để tải ảnh nên</h4>
                                                </>
                                                )
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
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="file-upload-box">
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
                                                </>
                                                )
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
                                </div>
                            </Col>
                        </Row>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer className='mt-5'>
                <button id="post-btn" className="btn post-btn" onClick={handlePost}>
                    <MdSaveAlt />   Lưu bài đăng
                </button>
            </Modal.Footer>
        </Modal>

    )
}
