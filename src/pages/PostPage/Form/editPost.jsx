import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../redux/actions/category.action';
import { Modal } from 'react-bootstrap';

export const EditPost = ({ ...props }) => {
    const { data, addPost, updateData, handleClose, show } = props
    const dispatch = useDispatch();
    const category = useSelector(state => state.category)

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
        setArliclePictures(e.target.files[0])
    }

    const handleFile = (e) => {
        setFileDowload(e.target.files[0])
    }

    return (
        <Modal show={show} onHide={handleCloseForm} className='w-full'>
            <Modal.Header closeButton>
                <Modal.Title className='fs-1'>Sửa bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body className='form-edit'>
                {
                    data &&
                    <form method='post' encType='multipart/form-data'>
                        <div className="create-post post-editor">
                            {/* <h1 className="post-title" >Create Post</h1> */}

                            <input
                                type="text" className="editor-title-input" placeholder="Tiêu đề"
                                value={data.title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="text" className="editor-title-input " placeholder="Tác giả"
                                value={data.publisher}
                                onChange={(e) => setPublisher(e.target.value)}
                            />
                            <input
                                type="text" className="editor-title-input " placeholder="Tổng số trang"
                                value={data.numberOfPages}
                                onChange={(e) => setNumberOfPage(e.target.value)}
                            />

                            <select className="form-select fs-3" aria-label="Default select example"
                                value={data.category}
                                onChange={(e) => setCategoryId(e.target.value)}
                            >
                                <option value={0}>Chọn danh mục</option>
                                {
                                    category?.categories && category?.categories.map((_category) => {

                                        return <option value={_category._id} key={_category._id} >{_category.name}</option>
                                    })
                                }

                            </select>
                            {console.log(data)}
                            <div className="box-category">
                                <span className="box-category-link-with-title">Chọn ảnh tiêu đề </span>
                                <input
                                    className="box-category-link-with-avatar" type="file" name="file" id=""
                                    // value={generatePublicUrlImages(data.arliclePictures)}
                                    onChange={(e) => handleImage(e)}
                                />
                            </div>

                            <div className="box-category">
                                <span className="box-category-link-with-title">Chọn File</span>
                                <input
                                    type="file" name='file' className="box-category-link-with-avatar"
                                    // value={generatePublicUrlFile(data.linkDowload)}
                                    onChange={(e) => handleFile(e)}
                                />
                            </div>


                        </div>
                        <div className="group-btn">
                            <button id="post-btn" className="btn post-btn" onClick={handlePost}>
                                Update  Post
                            </button>
                        </div>
                    </form>
                }
            </Modal.Body>
        </Modal>
    )
}
