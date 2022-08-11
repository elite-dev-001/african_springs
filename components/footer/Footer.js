import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <section className="wrapper__section p-0">
        <div className="wrapper__section__components">
            {/* <!-- Footer  --> */}
            <footer>
                <div className="wrapper__footer bg__footer ">
                    <div className=" container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="widget__footer">
                                    {/* <!-- <h4 className="footer-title">company info</h4> --> */}
                                    {/* <figure>
                                        <img src="images/logo2.png" alt="" className="logo-footer" />
                                    </figure> */}
                                    <p>
                                    AfricanSprings is a premium News website. With organized niche from the heart of Africa, with extraordinary stories across the world, with the heart of humanity, for enlightenment, entertainment and information.
                                        <br />
                                        {/* <!-- <Link href=" #" className="btn btn-primary mt-4 text-white">About us</Link> --> */}
                                    </p>
                                </div>
                                <div className="border-line"></div>
                                <div className="widget__footer">
                                    <h4 className="footer-title">follow us </h4>
                                    
                                    <p>
                                        <button className="btn btn-social btn-social-o facebook mr-1">
                                            <i className="fa fa-facebook-f"></i>
                                        </button>
                                        <button className="btn btn-social btn-social-o twitter mr-1">
                                            <i className="fa fa-twitter"></i>
                                        </button>

                                        <button className="btn btn-social btn-social-o linkedin mr-1">
                                            <i className="fa fa-linkedin"></i>
                                        </button>
                                        <button className="btn btn-social btn-social-o instagram mr-1">
                                            <i className="fa fa-instagram"></i>
                                        </button>

                                        <button className="btn btn-social btn-social-o youtube mr-1">
                                            <i className="fa fa-youtube"></i>
                                        </button>
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Category --> */}
                            <div className="col-md-4">
                                <div className="widget__footer">
                                    <h4 className="footer-title">category</h4>
                                    <div className="link__category">
                                        <ul className="list-unstyled ">
                                            <li className="list-inline-item">
                                                <Link href="/categories/sport">sports</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/health">health</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/lifestyle">lifestyle</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/business">business</Link>
                                            </li>

                                            <li className="list-inline-item">
                                                <Link href="/categories/healthy living">healthy living</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/entertainment">entertainment</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/politics">politics</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/article">article</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/travel">travel</Link>
                                            </li>

                                            <li className="list-inline-item">
                                                <Link href="/categories/food">food</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/categories/news update">news update</Link>
                                            </li>

                                            {/* <li className="list-inline-item">
                                                <Link to="/category/">Startup</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/category/">Sports</Link>
                                            </li> */}


                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="widget__footer">
                                    <h4 className="footer-title">newsletter</h4>
                                    {/* <!-- Form Newsletter --> */}

                                    <div className="widget__form-newsletter ">
                                        <p>

                                            Don’t miss to subscribe to our news feeds, kindly fill the form below
                                        </p>
                                        <div className="mt-3">
                                            <input type="text" className="form-control mb-2"
                                                placeholder="Your email address" />

                                            <button className="btn btn-primary btn-block" type="button">subscribe

                                            </button>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div className="bg__footer-bottom ">
                    <div className="container">
                        <div className="row flex-column-reverse flex-md-row">
                            <div className="col-md-6">
                                <span>
                                    © {new Date().getFullYear()} AfricanSprings - Premium News Website & magazine
                                </span>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-inline ">
                                    <li className="list-inline-item">
                                        <Link href="">
                                            privacy
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="">
                                            contact
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="">
                                            about
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer  --> */}
        </div>
    </section>
  )
}

export default Footer