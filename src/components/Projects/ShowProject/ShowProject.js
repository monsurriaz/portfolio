import React from 'react';
import './ShowProject.css';
import agency from '../../../images/agency.PNG';
import doctor from '../../../images/doctor.PNG';
import emma from '../../../images/emajohn.PNG';
import travelGuru from '../../../images/travelGuru.PNG';
import gadgets from '../../../images/hot-gadgets.PNG';
import school from '../../../images/e-school.PNG';

const ShowProject = () => {
    return (
        <section className="projects-section">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row container mx-auto justify-content-center">
            <div className="col-12 col-md-4">
                <div>
                    <div class="card">
                        <img src={agency} class="card-img-top" alt="agency" />
                        <div class="card-body">
                            <h5 class="card-title">Creative Agency</h5>
                            <p className="mb-3"><strong>Overview:</strong></p>
                            <ul class="card-text">
                                <li>
                                    This is a service seller full-stack website.
                                </li>
                                <li>
                                    This site has an admin’s panel.
                                </li>
                                <li>
                                    A User can Order a service. Also, can take a free consultation here.
                                </li>
                            </ul>
                            <p className="card-text"><strong>Technologies:</strong></p>
                            <span>React, </span>
                            <span>NodeJs, </span>
                            <span>ExpressJS, </span>
                            <span>MongoDB</span>
                        </div>
                        <div className="card-footer">
                            <a href="https://creative-agency1-bd.web.app/" class="btn" target="blank">Website</a>
                            <a href="https://github.com/monsurriaz/creative-agency-client" class="btn" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div>
                <div class="card">
                        <img src={doctor} class="card-img-top" alt="agency" />
                        <div class="card-body">
                            <h5 class="card-title">Doctor Portal</h5>
                            <p className="mb-3"><strong>Overview:</strong></p>
                            <ul class="card-text">
                                <li>
                                This is an appointment website.
                                </li>
                                <li>
                                Patients can select an appointment date with the calendar.
                                </li>
                                <li>
                                The data will store in the database (MongoDB).
                                </li>
                            </ul>
                            <p className="card-text"><strong>Technologies:</strong></p>
                            <span>React, </span>
                            <span>NodeJs, </span>
                            <span>ExpressJS, </span>
                            <span>MongoDB</span>
                        </div>
                        <div class="card-footer">
                            <a href="https://doctors-portal8.firebaseapp.com/" class="btn" target="blank">Website</a>
                            <a href="https://github.com/monsurriaz/doctor-portal-home-page" class="btn" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div>
                <div class="card">
                        <img src={emma} class="card-img-top" alt="agency" />
                        <div class="card-body">
                            <h5 class="card-title">Ema-john E-commerce</h5>
                            <p className="mb-3"><strong>Overview:</strong></p>
                            <ul class="card-text">
                                <li>
                                 All products on the home page.
                                </li>
                                <li>
                                Individual product details page.
                                </li>
                                <li>
                                Product add to cart from the home page
                                </li>
                                <li>
                                Item remove from cart.
                                </li>
                            </ul>
                            <p className="card-text"><strong>Technologies:</strong></p>
                            <span>React, </span>
                            <span>NodeJs, </span>
                            <span>ExpressJS, </span>
                            <span>MongoDB</span>
                        </div>
                        <div className="card-footer">
                            <a href="https://creative-agency1-bd.web.app/" class="btn" target="blank">Website</a>
                            <a href="https://github.com/monsurriaz/creative-agency-client" class="btn" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div>
                <div class="card">
                        <img src={travelGuru} class="card-img-top" alt="agency" />
                        <div class="card-body">
                            <h5 class="card-title">Travel Guru</h5>
                            <p className="mb-3"><strong>Overview:</strong></p>
                            <p class="card-text">
                            This is a tourist guide and hotel booking dynamic website.
                            </p>
                            <p className="card-text"><strong>Technologies:</strong></p>
                            <span>React, </span>
                            <span>Bootstrap, </span>
                            <span>HTML, </span>
                            <span>CSS</span>
                        </div>
                        <div className="card-footer">
                            <a href="https://travel-master1.web.app/" class="btn" target="blank">Website</a>
                            <a href="https://github.com/monsurriaz/travel-guru" class="btn" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div>
                    <div class="card">
                        <img src={gadgets} class="card-img-top" alt="agency" />
                        <div class="card-body">
                            <h5 class="card-title">Hot Gadgets</h5>
                            <p className="mb-3"><strong>Overview:</strong></p>
                            <p class="card-text">
                                This is a simple static eCommence Website. 
                            </p>
                            <p className="card-text"><strong>Technologies:</strong></p>
                            <span>HTML, </span>
                            <span>CSS, </span>
                            <span>Bootstrap, </span>
                        </div>
                        <div className="card-footer">
                            <a href="https://monsurriaz.github.io/hot-gadgets/" class="btn" target="blank">Website</a>
                            <a href="https://github.com/monsurriaz/hot-gadgets" class="btn" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div>
                    <div class="card">
                        <img src={school} class="card-img-top" alt="agency" />
                        <div class="card-body">
                            <h5 class="card-title">E-School</h5>
                            <p className="mb-3"><strong>Overview:</strong></p>
                            <p class="card-text">
                                This is a simple static E-School learning Website
                            </p>
                            <p className="card-text"><strong>Technologies:</strong></p>
                            <span>HTML, </span>
                            <span>CSS, </span>
                            <span>Bootstrap </span>
                        </div>
                        <div className="card-footer">
                            <a href="https://monsurriaz.github.io/e-school/index.html" class="btn" target="blank">Website</a>
                            <a href="https://github.com/monsurriaz/e-school" class="btn" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ShowProject;