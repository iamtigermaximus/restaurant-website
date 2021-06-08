import React from 'react'
import {Link} from 'react-router-dom'
import Jumbotron from './Jumbotron'

const Contact = () => {
    return (
        <div className="contact-content-container">
        <Jumbotron/>
        <div className="container text-center  contact-content">
            <div className="contact-heading text-center mt-4">
                <h1>CONTACT</h1>
            </div>
        
            <div>

            </div>
            <div>
                <div className="contact-info1  ">
                    <h2>moma</h2>
                    <h6 className="fs-6 fw-light">Paaskylanrinne 567</h6>
                    <h6 className="fs-6 fw-light">00500 Helsinki FI</h6>
                    <Link to="/"><h6 className="fs-6 fw-light">See map</h6></Link>
                </div>
                <div className="fs-6 fw-light">
                    <p>Phone: +45 3296 3297 (The phone line is open between Monday – Friday, 11:00 – 16:00)</p>
                    <p>E-mail:<Link to="/">moma@moma.fi</Link> (Please note that we don’t take reservations through this e-mail address)</p>
                    <p>Opening Hours: Tuesday – Friday, 17:00 – 00:00, Saturday 11.30 – 19.00</p>
                </div>
            </div>
        </div>
        <div className=" container text-center mb-5 form-container">
            <form className=" border border-light p5 text-center">
                <p className="h4 mb-4">General Inquiries</p>
                <div className="container text-center  ">
                <input
                type="text"
                className="form-control mb-4 input-form-field mx-auto"
                placeholder="Name"
                />
                 <input
                type="text"
                className="form-control mb-4 input-form-field mx-auto"
                placeholder="Email"
                />
                <div className="form-group">
                    <textarea className="form-control rounded-0 input-form-field mx-auto" rows="5" placeholder="Message"></textarea>
                </div>
                <div className="container- mt-4">
                    <button className="btn btn-info btn-block contact-button mb-5" type="submit">Send</button>
                </div>
            </div>
            </form>
        </div>
       </div>
    )
}

export default Contact
