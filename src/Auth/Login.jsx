import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../Context/authContext';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorValue, setErrorValue] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const { login, currentUser } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
             await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
            setError(true);
            setSuccess(true);
            setErrorValue('Successfullly LoggedIn');
            emailRef.current.value = '';
            passwordRef.current.value = ''
        } catch (error) {
            setError(true);
            setSuccess(false);
            setErrorValue("Failed to Login");
        }
    }
      

    return (
        <div>
            <a  className="headerIcon" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className="fa fa-sign-in me-1"></i>
            </a>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold fs-2" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {error && <div className={success ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {errorValue}
                        </div>}
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Login</button>
                            </form>
                            <hr/>
                                <p className="text-center w-100">Does'nt have any account? <a>Sign-up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
