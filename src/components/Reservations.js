import React from 'react'
import Jumbotron from './Jumbotron'

const Reservations = () => {
    return (
        <>
        <Jumbotron/>
        <div className="container reservation-content pb-5 ">
            <div className="reservation-heading text-center mt-4">
                <h1>RESERVATIONS</h1>
                <p className="mt-3 fw-lighter">Please choose your reservation date with specific time and number
of people to book a table.</p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col ">
                        <div className="form-container form-control-md">
                            <div className="reservation-form input-form-field mx-auto">
                                <div className="input-name mb-3">
                                    <label className="form-label">Your name:</label>
                                    <input type="text" name="name"  className="form-control"/>
                                </div>
                                <div className="input-phone mb-3">
                                    <label className="form-label">Your phone:</label>
                                    <input type="text" name="phone"  className="form-control"/>
                                </div>
                                <div className="input-email mb-3">
                                    <label className="form-label">Your email:</label>
                                    <input type="email" name="email"  className="form-control"/>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label">Number of guests:</label>
                                        <input type="number" min="1" name="person"  className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Type of table:</label>
                                        <input type="number" min="1" name="table"  className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Date:</label>
                                        <input type="date" name="date"  className="form-control date"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Time:</label>
                                        <input type="text" name="time"  className="form-control time" placeholder="(ex:7:00 pm)"/>
                                    </div>
                                    <button className="btn btn-secondary mt-4">BOOK A TABLE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Reservations