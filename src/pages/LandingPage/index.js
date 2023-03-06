import React from 'react';
import './index.scss';

export default function LandingPage() {
    return (
       <>
           <nav className="navbar navbar-light bg-light static-top">
               <div className="container">
                   <img height="60" src="./img/navbar-logo.png" alt=""/>
                   <a className="btn btn-primary" href="#signup">Entrar</a>
               </div>
           </nav>
           <header className="masthead">
               <div className="container position-relative masthead-top">
                   <div className="row justify-content-center">
                       <div className="col-xl-8">
                           <div className="text-center text-white"> <h1>EDUMOKIA SCHOOL</h1> </div>
                           <div className="text-center text-secondary">
                               <h4 className="mb-3">Plataforma de gestión académica para prevención de salud mental</h4>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="text-center text-white">
                               <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                   <div className="row">
                                       <div className="col">
                                           <input className="form-control form-control-lg" id="emailAddress"
                                                  type="email" placeholder="Correo"
                                                  data-sb-validations="required,email"/>
                                           <div className="invalid-feedback text-white"
                                                data-sb-feedback="emailAddress:required">Correo es requerido.
                                           </div>
                                           <div className="invalid-feedback text-white"
                                                data-sb-feedback="emailAddress:email">Correo no valido.
                                           </div>
                                       </div>
                                       <div className="col-auto">
                                           <button className="btn btn-primary btn-lg disabled" id="submitButton"
                                                   type="submit">Enviar
                                           </button>
                                       </div>
                                   </div>
                                   <div className="d-none" id="submitSuccessMessage">
                                       <div className="text-center mb-3">
                                           <div className="fw-bolder">Form submission successful!</div>
                                           <p>To activate this form, sign up at</p>
                                           <a className="text-white"
                                              href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                       </div>
                                   </div>
                                   <div className="d-none" id="submitErrorMessage">
                                       <div className="text-center text-danger mb-3">Error sending message!</div>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </header>
           <section className="features-icons bg-light text-center">
               <div className="container">
                   <div class="row text-center">
                       <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-list-alt fa-stack-1x fa-inverse"></i>
                        </span>
                           <h4 class="my-3">Eficiente</h4>
                           <p class="text-muted">Facilita a los docentes el registro oportuno y automatiza su reporting.</p>
                       </div>
                       <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                           <h4 class="my-3">Intercomunicación</h4>
                           <p class="text-muted">Optimiza la comunicación entre docentes y apoderados..</p>
                       </div>
                       <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-heartbeat fa-stack-1x fa-inverse"></i>
                        </span>
                           <h4 class="my-3">Salud</h4>
                           <p class="text-muted">Promueve la intervención oportuna y cuidado de la Salud Mental.</p>
                       </div>
                       <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-cart-plus fa-stack-1x fa-inverse"></i>
                        </span>
                           <h4 className="my-3">Finanzas</h4>
                           <p className="text-muted">Ahorra tiempo y dinero de las familias.</p>
                       </div>
                   </div>
               </div>
           </section>
           <section className="showcase">
               <div className="container-fluid p-0">
                   <div className="row g-0">
                       <div className="col-lg-6 order-lg-2 text-center showcase-img">
                           <img className="img-1" src="./img/portfolio/1.jpg" alt=""/>
                       </div>
                       <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                           <h2>Modulos para Docentes</h2>
                           <p className="lead mb-0"> Cada docente ingresa datos de los alumnos al sistema. Podrá procesar y gestionar los informes de perzonalidad. </p>
                       </div>
                   </div>
                   <div className="row g-0">
                       <div className="col-lg-6 text-center showcase-img">
                           <img src="./img/portfolio/3.png" alt=""/>
                       </div>
                       <div className="col-lg-6 my-auto showcase-text">
                           <h2>Modulos para Alumnos</h2>
                           <p className="lead mb-0">Los alumnos podrás interactuar con simples preguntas.</p>
                       </div>
                   </div>
                   <div className="row g-0">
                       <div className="col-lg-6 order-lg-2 text-center showcase-img">
                           <img src="./img/portfolio/2.png" alt=""/>
                       </div>
                       <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                           <h2>Modulos Reporte</h2>
                           <p className="lead mb-0"> Se podrá visualizar informes de los alumnos y evolución</p>
                       </div>
                   </div>
               </div>
           </section>
           <section className="testimonials text-center bg-light">
               <div className="container">
                   <h2 className="mb-5">Somos apoyados por</h2>
                   <div className="row align-middle">
                       <div className="col-lg-1"/>
                       <div className="col-lg-2">
                           <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                               <img className="img-fluid mb-3" src="./img/sponsor/corfo.png"
                                    alt="..."/>
                           </div>
                       </div>
                       <div className="col-lg-2">
                           <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                               <img className="img-fluid mb-3" src="./img/sponsor/vanda.png"
                                    alt="..."/>
                           </div>
                       </div>
                       <div className="col-lg-2">
                           <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                               <img className="img-fluid mb-3" src="./img/sponsor/imagine.png"
                                    alt="..."/>
                           </div>
                       </div>
                       <div className="col-lg-2">
                           <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                               <img className="img-fluid mb-3" src="./img/sponsor/emerge.png"
                                    alt="..."/>
                           </div>
                       </div>
                       <div className="col-lg-2">
                           <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                               <img className="img-fluid mb-3" src="./img/sponsor/cwo.png"
                                    alt="..."/>
                           </div>
                       </div>
                       <div className="col-lg-1"/>
                   </div>
               </div>
           </section>
           <section className="call-to-action text-white text-center" id="signup">
               <div className="container position-relative">
                   <div className="row justify-content-center">
                       <div className="col-xl-6">
                           <h2 className="mb-4">¿Listo para comenzar? ¡Contáctanos!</h2>
                           <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                               <div className="row">
                                   <div className="col">
                                       <input className="form-control form-control-lg" id="emailAddressBelow"
                                              type="email" placeholder="Correo"
                                              data-sb-validations="required,email"/>
                                       <div className="invalid-feedback text-white"
                                            data-sb-feedback="emailAddressBelow:required">Correo requerido.
                                       </div>
                                       <div className="invalid-feedback text-white"
                                            data-sb-feedback="emailAddressBelow:email">Correo no es valido.
                                       </div>
                                   </div>
                                   <div className="col-auto">
                                       <button className="btn btn-primary btn-lg disabled" id="submitButton"
                                               type="submit">Enviar
                                       </button>
                                   </div>
                               </div>
                               <div className="d-none" id="submitSuccessMessage">
                                   <div className="text-center mb-3">
                                       <div className="fw-bolder">Form submission successful!</div>
                                       <p>To activate this form, sign up at</p>
                                       <a className="text-white"
                                          href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                   </div>
                               </div>
                               <div className="d-none" id="submitErrorMessage">
                                   <div className="text-center text-danger mb-3">Error sending message!</div>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </section>
           <footer className="footer bg-light">
               <div className="container">
                   <div className="row align-items-center">
                       <div className="col-lg-4 text-lg-start">Copyright © Edumokia 2023</div>
                       <div className="col-lg-4 my-3 my-lg-0"><a className="btn btn-dark btn-social mx-2" href="#!"
                                                                 aria-label="Twitter"><i className="fab fa-twitter"></i></a><a
                           className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i
                           className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"
                                                                    aria-label="LinkedIn"><i
                           className="fab fa-linkedin-in"></i></a></div>
                       <div className="col-lg-4 text-lg-end"></div>
                   </div>
               </div>
           </footer>
       </>
    );
}