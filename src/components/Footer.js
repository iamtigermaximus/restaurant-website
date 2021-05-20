import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid mt-5 text-center footer">
            <div className="d-inline">
                <h6 ><Link className="footer-link" to="/">Newsletter</Link> | <Link  className="footer-link" to="/">Careers</Link> | <Link className="footer-link" to="/">Press and other Enquiries</Link> | <Link className="footer-link" to="/">Terms of Use</Link> | <Link className="footer-link" to="/">FAQ</Link></h6>
            </div>
            
        </div>
    )
}

export default Footer
