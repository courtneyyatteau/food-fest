import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <React.Fragment>
            <Jumbotron className="jumboFooter">
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">             
                            <div className="col-4 col-sm-2 offset-1">
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/tickets">Tickets</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-5 text-center">
                                <h5>Social</h5>
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                            </div>
                            <div className="col-sm-4 text-center">
                                <a role="button" className="btn btn-link" href="tel:+15555555555"><i className="fa fa-phone" /> 1-555-555-5555</a><br />
                                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> indulgentfest@indulge.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="footerBottom">
                        <p>
                            &copy;{new Date().getFullYear()} Indulgent Fest - All Rights Reserved
                        </p>
                    </div>
                </footer>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Footer;