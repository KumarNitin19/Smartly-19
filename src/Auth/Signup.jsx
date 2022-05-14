
import React, { useRef, useState } from 'react'
import { useAuth } from '../Context/authContext';

const Signup = () => {

    const emailRef = useRef();
    const userRef = useRef();
    const passwordRef = useRef();
    const [errorValue, setErrorValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        if (userRef.current.value == undefined || userRef.current.value == '') {
              setError(true)
            return setErrorValue("Please fill all the fields");
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value,userRef.current.value, passwordRef.current.value);
            setError(false);
            setErrorValue('');
            emailRef.current.value = '';
            userRef.current.value = '';
            passwordRef.current.value = '';
        } catch (error) {
            setError(true)
            setErrorValue("Failed to create an Account")
        }
        setLoading(false);
    }

    return (
        <div>
            <a className="headerIcon ms-3" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="fa fa-user-plus me-1"></i>
            </a>
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold fs-2" id="signupLabel">Sign up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {error && <div className="alert alert-danger" role="alert">
                            {errorValue}
                        </div>}
                       
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">User name</label>
                                    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" ref={userRef} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                                </div>
                                <button disabled={loading} type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
                            </form>
                            <hr />
                            <p className="w-100 text-center">Already have an account? <a>Log-In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
