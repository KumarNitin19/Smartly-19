import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row d-lg-flex d-grid justify-content-around">
                    <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <img src="assets/Conatct.svg" alt="" height="350px" className="contactImage"/>
                    </div>
                    <div className="col-12 col-lg-6 align-items-center">
                        <form action="">
                            <div className="mb-3">
                                <label for="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="Ashutosh Suryawanshi" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Write Something</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <buttton className="btn btn-outline-primary fw-bold" type="submit">Send Message</buttton>            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
