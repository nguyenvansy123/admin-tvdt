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

    const handleClickDownload = (filename) => {
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

    const formatDay = (originalDateString) => {
        const date = new Date(originalDateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    }

    return (
        <Modal width="100%" size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title className='fs-1'>Bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section id="main-content">
                    <section className="book-detail">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <figure className="book-cover">
                                    <img
                                        src={post.arliclePictures && generatePublicUrlImages(post.arliclePictures)}
                                        alt={post.title}
                                    />
                                </figure>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="book-info">
                                    <div className="book-title">{post.title}</div>
                                    <div className="book-info__item">
                                        <span className="info-title">Tác giả:</span>
                                        <span className="info-content">{post.publisher}</span>
                                    </div>

                                    <div className="book-info__item">
                                        <span className="info-title">Ngày đăng bài:</span>
                                        <span className="info-content">{formatDay(post.updatedAt)}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">Số trang:</span>
                                        <span className="info-content">{post.numberOfPages}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">File nội dung:</span>
                                        <span className="info-content">
                                            <a
                                                className="btn-bvdk btn-sm btn-rounded"
                                                href={post.linkDownload}
                                                target="_blank"
                                            >
                                                <i className="fal fa-download" /> Tải xuống
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="book-content">
                            <object data={generatePublicUrlFile(post.linkDownload)} type="application/pdf" width="100%" height="480"></object>
                        </div>
                    </section>
                </section>
            </Modal.Body>
        </Modal>
    )
}