import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {/* Contact Us Section */}
                        <h3>Contact Us</h3>
                        <p>Email: AnnaRecommends@bnta.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="col-md-4">
                        {/* Follow Us Section */}
                        <h3>Follow Us</h3>
                        <ul className="social-icons">
                            {/* Social Media Links */}
                            <li><a href="https://en-gb.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-gb" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        {/* Copyright Section */}
                        <h3>&copy; 2023 Anna Recommends</h3>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
