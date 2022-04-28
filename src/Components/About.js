import React, { useState } from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import Footer from './Footer';
import { Control, LocalForm, Errors } from 'react-redux-form';

 

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const About = (props) => {
    const {
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

        return (
        <React.Fragment>
            <Jumbotron className="jumbotron2" fluid>
                <div className="container">
                        <div className="row">
                            <div className="col content-holder">
                                <h1 className="about-header">About Us</h1>
                            </div>
                        </div>
                    </div>
            </Jumbotron>
            <Jumbotron className="jumboAbout" fluid>
                <div className="divAbout">
                    <h2>Indulge Your Senses</h2>
                    Indulgent Fest was created to showcase chefs and food creators to the public. People who love to eat have the opportunity to engage with creative food curators, sample food and drinks, and purchase items.
                    People who come to Indulgent Fest have come to expect absolute bliss from our wildly impressive chefs from all over the country. 
                </div>
                <br />
                <Button color="primary" onClick={toggle}>NewsLetter Signup</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader className="modHead" toggle={toggle}>Stay Informed! <p>Sign up with your email to receive updates.</p></ModalHeader>
                    <ModalBody> 
                        <LocalForm className="form">
                            <div className="form-group">
                                <Label htmlFor="firstName"></Label>
                                <Control.Text model=".firstName" name="firstName" id="firstName" placeholder="First Name" className="form-control"
                                    validators={{
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
 

                            <div>
                                <Label htmlFor="lastName"></Label>
                                <Control.Text model=".lastName" name="lastName" id="lastName" placeholder="Last Name" className="form-control"
                                    validators={{
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".lastName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>

                            <div>
                                <Label htmlFor="email"></Label>
                                <Control.Text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                    validators={{
                                        validEmail
                                    }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                />
                            </div>

                        </LocalForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Submit</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Jumbotron>
            
            <Footer />
        </React.Fragment>
        );
    }
 
export default About;