import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { ListCategory } from './ListCategory';
import { addCategory, deleteCategories, getAllCategory, updateCategory } from '../../redux/actions/category.action';

export const Category = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [title, setTile] = useState(["Danh mục", "Đường dẫn", "Xử lý"])
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [editChoice, setEditChoice] = useState({});
    const [validationErrors, setValidationErrors] = useState({});

    const category = useSelector(state => state.category)

    useEffect(() => {
        dispatch(getAllCategory())

    }, [dispatch])

    const validate = () => {
        const errors = {};

        if (!name)
            errors.name = 'Vui lòng nhập tên danh mục.';

        if (!slug)
            errors.slug = 'Vui lòng nhập đường dẫn.';

        return errors;
    };

    const modifiedCategories = category.categories.map(_category => {
        const editbtn = (<button className='btn btn-warning border-black fs-5' onClick={() => handleUpdate(_category)}>Edit</button>)
        const deletebtn = (<button className='btn btn-danger border-black fs-5 mx-2' onClick={() => handleDelete(_category._id)}>Delete</button>)
        const action = (<div className="d-flex">{editbtn} {deletebtn}</div>)
        return {
            categoryName: _category.name,
            categorySlug: _category.slug,
            action
        };
    });

    const handleCreate = () => {
        const errors = validate();
        const category = { name, slug }
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        dispatch(addCategory(category, updateData))
        handleClose()
    };

    const handleDelete = (id) => {
        dispatch(deleteCategories({ id }, updateData))
    }

    const handleUpdate = (_category) => {
        handleShow()
        setName(_category.name)
        setSlug(_category.slug)
        setEditChoice(_category)
    }

    const changeCategory = () => {
        const newCategory = {
            id: editChoice._id,
            name,
            slug
        }
        handleClose()
        dispatch(updateCategory(newCategory, updateData))
    }

    const updateData = (isUpdate) => {
        if (isUpdate)
            dispatch(getAllCategory())
    }



    // const renderListCategories = () => {
    //     return category.categories.length <= 0 ?
    //         <p>hiện không có danh mục nào cả</p>
    //         :
    //         // (<TableModal
    //         //     title={title}
    //         //     data={modifiedCategories}
    //         // />)
    //         (<ListCategory data={modifiedCategories} />)
    // }

    const handleCloseForm = () => {
        setName("")
        setSlug("")
        setEditChoice({})
        handleClose()
    }


    return (
        <>
            <div className="table-wrapper">
                <h4>Danh mục</h4>
                <div className="add_button my-5 ">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1" onClick={handleShow}>
                        Thêm danh mục
                    </a>

                </div>

                {
                    category.loading ?
                        (<Spinner animation="border" role="status" className=''>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>)
                        :
                        <ListCategory data={category.categories} handleUpdate={handleUpdate} />
                }
            </div>

            <Modal fullscreen="lg-down" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleCloseForm}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-1'>Tạo danh mục</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label fs-2">
                            Tên danh mục
                        </label>
                        <input
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Danh mục"
                            style={{ height: "40px" }}
                            className={validationErrors.name ? "form-control fs-4 input-error" : "form-control fs-4"}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        {validationErrors.name && <div className="feedback invalid-feedback feedback-active">{validationErrors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="controlInput2" className="form-label fs-2">
                            Đường dẫn
                        </label>
                        <input
                            type="text"
                            className={validationErrors.slug ? "form-control fs-4 input-error" : "form-control fs-4"}
                            onChange={(e) => setSlug(e.target.value)}
                            id="controlInput2"
                            placeholder="Đường dẫn"
                            value={slug}
                            style={{ height: "40px" }}
                        />
                        {validationErrors.slug && <div className="feedback invalid-feedback feedback-active">{validationErrors.slug}</div>}
                    </div>
                    <div className='d-flex w-100 justify-content-end'>
                        {
                            editChoice?.name ?
                                <button className='btn_2' onClick={changeCategory} >Update</button>
                                :
                                <button className='btn_2' onClick={handleCreate} >Create</button>
                        }
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}
