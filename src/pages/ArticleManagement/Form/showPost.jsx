import React from 'react'
import { Modal } from 'react-bootstrap'
import { generatePublicUrlFile, generatePublicUrlImages } from '../../../utils/urlConfig'

export const ShowPost = ({ ...props }) => {

    const { postdetail, handleClose, show } = props

    const getFileExtension = (filePath) => {
        const parts = filePath?.split('.');
        return parts[parts?.length - 1];
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
        <Modal width="100%" size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
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
                                        src={postdetail.arliclePictures && generatePublicUrlImages(postdetail.arliclePictures)}
                                        alt="Tài liệu về gây mê hồi sức"
                                    />
                                </figure>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="book-info">
                                    <div className="book-title">{postdetail.title}</div>
                                    <div className="book-info__item">
                                        <span className="info-title">Tác giả:</span>
                                        <span className="info-content">{postdetail.publisher}</span>
                                    </div>

                                    <div className="book-info__item">
                                        <span className="info-title">Ngày đăng bài:</span>
                                        <span className="info-content">{formatDay(postdetail.updatedAt)}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">Số trang:</span>
                                        <span className="info-content">{postdetail.numberOfPages}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">File nội dung:</span>
                                        <span className="info-content">
                                            <a
                                                className="btn-bvdk btn-sm btn-rounded"
                                                href={postdetail.linkDownload}
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
                            {/* <iframe src={postdetail.linkPreview} allow="autoplay" width="100%" height="480"></iframe> */}
                            <object data={generatePublicUrlFile(postdetail.linkDownload)} type="application/pdf" width="100%" height="480"></object>
                            {/* <DocViewer
                                documents={docs}
                                pluginRenderers={DocViewerRenderers}
                            /> */}
                        </div>
                    </section>
                </section>
            </Modal.Body>
        </Modal>
    )
}