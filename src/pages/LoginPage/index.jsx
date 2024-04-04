import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import "./style.css"

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!userName)
            errors.userName = 'Vui lòng nhập userName.';

        if (!password)
            errors.password = 'Vui lòng nhập mật khẩu.';
        else if (password.length < 6)
            errors.password = 'Mật khẩu phải dài từ 6 ký tự trở nên';

        return errors;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin(event)
        }
    };

    const handleLogin = (e) => {
        e.preventDefault()

        const errors = validate();
        const user = { userName, password }
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        dispatch(login(user, navigate))
    };

    const handleForm = (e) => {
        console.log("------------------Test-------------");
        console.log({ userName, password });
        handleLogin()
        e.preventDefault()
    }

    return (
        <div className="wrapper">
            <div className="logo">
                <img
                    src="../images/logoRHM-1-1-300x293.png"
                    alt="logo"
                />
            </div>
            <div className="text-center mt-4 name">Admin</div>
            <form className="p-3 mt-3" onKeyDown={handleKeyDown}>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user" />
                    <input type="text" name="userName" id="userName" placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    {validationErrors.userName && <div className="feedback invalid-feedback feedback-active">{validationErrors.userName}</div>}
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key" />
                    <input type="password" name="password" id="pwd" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {validationErrors.password && <div className="feedback invalid-feedback feedback-active">{validationErrors.password}</div>}
                </div>
                <button className="btn mt-3" onClick={(e)=>handleLogin(e)} >Login</button>
            </form>
        </div>
    )
}
