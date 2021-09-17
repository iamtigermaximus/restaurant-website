import React from 'react'
import WelcomeImage from '../images/moma-welcome.jpg' 
import Jumbotron from './Jumbotron'

const Blog = () => {
    return (
        <>
        <Jumbotron/>
        <div className="container welcome-content pb-5 ">
            <div className="welcome-heading text-center mt-4">
                <h1>BLOG</h1>
            </div>
            <div className="image-container text-center mt-5">
                <img src={WelcomeImage} alt="..." className="img-fluid"/>
            </div>
            <div className="mt-5 fw-light container">
                <h5 className="text-center">Blog Title</h5>
                <p className="mb-5 fluid">
                Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular na modelo simula pa noong 1500s, noong may isang di kilalang manlilimbag and kumuha ng galley ng type at ginulo ang pagkaka-ayos nito upang makagawa ng libro ng mga type specimen. Nalagpasan nito hindi lang limang siglo, kundi nalagpasan din nito ang paglaganap ng electronic typesetting at nanatiling parehas. Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum, at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.
                </p>
            </div>
        </div>
        </>
    )
}

export default Blog