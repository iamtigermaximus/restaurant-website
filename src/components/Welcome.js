import React from 'react'
import WelcomeImage from '../images/moma-welcome.jpg' 

const Welcome = () => {
    return (
        <div className="container welcome-content pb-5 ">
            <div className="welcome-heading text-center mt-4">
                <h1>WELCOME</h1>
            </div>
            <div className="image-container text-center mt-5">
                <img src={WelcomeImage} alt="..." className="img-fluid"/>
            </div>
            <div className="mt-5 fw-light">
                <p className="mb-5 fluid">
                We would like to take this opportunity to welcome you to our restaurant. We guarantee you the freshest food, delivered daily to our dock, prepared to your liking. We can prepare a specific meal by request. All our locations are providing a wonderful open-air venue to enjoy the meal all year round, we offer both indoor and alfresco dining and our focus is on serving.
                </p>
            </div>
        </div>
    )
}

export default Welcome
