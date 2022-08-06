import React from 'react'


export default function Contact() {
  return (
    <section className="wrap__contact-form">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h5>contact us</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>Your name <span className="required"></span></label>
                                <input type="text" className="form-control" name="name" required="" />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>Your email <span className="required"></span></label>
                                <input type="email" className="form-control" name="email" required="" />

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>website <span className="required"></span></label>
                                <input type="text" className="form-control" name="website" required="" />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>Subject <span className="required"></span></label>
                                <input type="text" className="form-control" name="subject" required="" />

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Your message </label>
                                <textarea className="form-control" rows="8" name="message"></textarea>
                            </div>
                            <div className="form-group float-right mb-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <h5>Info location</h5>
                    <div className="wrap__contact-form-office">
                        <ul className="list-unstyled">
                            <li>
                                <span>
                                    <i className="fa fa-home"></i>
                                    <a href="tel:">West Africa</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:">(+234) 7037956313</a>
                                </span>

                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:">bisicheli1@gmail.com</a>
                                </span>

                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-globe"></i>
                                    <a href="#" target="_blank">www.africansprings.org</a>
                                </span>
                            </li>
                        </ul>

                        <div className="social__media">
                            <h5>find us</h5>
                            <ul className="list-inline">

                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/AfricanSprings-103535282385150" className="btn btn-social rounded text-white facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/AfricanSprings?s=20&t=bsAqPM8aS33s7EV1E8YhEg" className="btn btn-social rounded text-white twitter">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white whatsapp">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/africansprings/" className="btn btn-social rounded text-white instagram">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white linkedin">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
