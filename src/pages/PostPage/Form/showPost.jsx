import React from 'react'
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap'
import { generatePublicUrlFile, generatePublicUrlImages } from '../../../utils/urlConfig'


export const ShowPost = ({ ...props }) => {
    const dispatch = useDispatch();
    const { post, handleClose, show } = props

    const getFileExtension = (filePath) => {
        const parts = filePath?.split('.');
        return parts[parts?.length - 1];
    };

    const handleClickDownload = (filename)=>{
        console.log(filename);
        // dispatch(downloadFile(filename))
    }

    const handleDownload = (linkDownload) => {
        // Đường dẫn đến tệp tin cần tải xuống
        const fileUrl = 'http://localhost:4000/public/words/kTbNleeVT-01_gm_tham_du_hoi_thao._n_cs.signed.pdf';
        // Tạo một thẻ a và sử dụng thuộc tính href để tải xuống

        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'kTbNleeVT-01_gm_tham_du_hoi_thao._n_cs.signed.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Modal width="100%" show={show} onHide={handleClose} className='w-full'>
            <Modal.Header closeButton>
                <Modal.Title className='fs-1'>Bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section id="main-content">
                    <section className="book-detail">
                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <div className="book-info">
                                    <div className="book-title">{post?.title}</div>
                                    <div className="book-info__item">
                                        <span className="info-title">Tác giả:</span>
                                        <span className="info-content">{post?.publisher}</span>
                                    </div>

                                    <div className="book-info__item">
                                        <span className="info-title">Ngày xuất bản</span>
                                        <span className="info-content">{post?.updatedAt}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">Số trang:</span>
                                        <span className="info-content">{post?.numberOfPages}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">File nội dung:</span>
                                        <span className="info-content">
                    
                                            <a
                                                className="btn-bvdk btn-sm btn-rounded"
                                                // href={generatePublicUrlFile(post?.linkDownload)}
                                                // onClick={()=>handleClickDownload(post?.linkDownload)}
                                                target="_blank"
                                                // download={post?._id}
                                            >
                                                <i className="fal fa-download" /> Tải xuống
                                            </a>
                                            {/* <button className="btn-bvdk btn-sm btn-rounded" onClick={() => handleDownload(post?.linkDownload)}><i className="fal fa-download" /> Tải xuống</button> */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <figure className="book-cover">
                                    <img
                                        src={generatePublicUrlImages(post?.arliclePictures)}
                                        alt="Tài liệu về gây mê hồi sức"
                                    />
                                </figure>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <iframe src={generatePublicUrlFile(post?.linkDownload)} width="100%" height="500px">
                                </iframe>
                            </div>
                        </div>
                   
                    </section>
                </section>
            </Modal.Body>
        </Modal>
    )
}