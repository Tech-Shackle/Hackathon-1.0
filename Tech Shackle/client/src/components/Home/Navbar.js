import React, { Component } from 'react';
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
} from 'react-bootstrap';
import './Navbar.css';

export class Navb extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className='front'>
        <div className='topmenu'>
          <Navbar bg='danger' expand='lg' className='n'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='ml'>
              <Nav className='ml-auto'>
                <Nav.Link href='#home' className='al'>
                  Alumini
                </Nav.Link>
                <Nav.Link href='#link'>Contact</Nav.Link>
                <Nav.Link href='#link'>Gallery</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className='middle'>
          <Navbar bg='white' expand='lg'>
            <Navbar.Brand href='#home'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + 'logo.png'}
                alt=""
              ></img>
            </Navbar.Brand>
          </Navbar>
        </div>

        <div className='bottom'>
          <Navbar bg='blue' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <NavDropdown title='ABOUT US' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    Principal Desk
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Administration
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Mission
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.4'>Vision</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.5'>Goals</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.6'>
                    Annual Reports
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='ADMISSION' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    Course Offered
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Enquiry Cum Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Information Brochure
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.4'>
                    Frequently Asked Questions
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='ACADEMICS' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Login</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Academic Calender
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Academics Curricula
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='EXAMINATION' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='DEPARTMENTS' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>CSE</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>IT</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>CE</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>ME</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>ECE</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='FACILITIES' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    Computer Centre
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    LIbrary
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Culture Committe
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='RESEARCH' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    Testing and Consultancy Cell
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Research and Developement
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>MOU's </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className='container'>
          <div>
            <div className='row'>
              <div className='col-3'>Notice</div>
              <div className='col-9'>
                <marquee>Notice Board </marquee>
              </div>
=======
    render() {
        return (
            <div className="front">
                  <div className="topmenu">
                <Navbar bg="info" expand="lg" className="n"> 

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="ml">
    <Nav className="ml-auto">
      <Nav.Link href="#home" className="al">Alumini</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <Nav.Link href="#link">Gallery</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>



            </div>

            <div className="middle">
            <Navbar  bg="white" expand="lg">
<Navbar.Brand href="#home"><img class="img-fluid" src={process.env.PUBLIC_URL+"logo.png"}></img></Navbar.Brand>
  
  
</Navbar>
            </div>

            <div className="bottom">
            <Navbar bg="blue" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Principal Desk</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Administration</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mission</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Vision</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Goals</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Annual Reports</NavDropdown.Item>
        
        
      </NavDropdown>

      <NavDropdown title="ADMISSION" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Course Offered</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Enquiry Cum Registration</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Information Brochure</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Frequently Asked Questions</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="ACADEMICS" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Academic Calender</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Academics Curricula</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="EXAMINATION" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="DEPARTMENTS" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">IT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">CE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ME</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ECE</NavDropdown.Item>



      </NavDropdown>

      <NavDropdown title="FACILITIES" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Computer Centre</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">LIbrary</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Culture Committe</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="RESEARCH" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Testing and Consultancy Cell</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Research and Developement</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">MOU's </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </div>
            <div className="container">
            <div>
                <div className="row">
                    <div className="col-3">Notice
                    </div>
                    <div className="col-9">
                        <marquee>Notice Board   </marquee>
                        
                    </div>
                </div>
            </div>
            </div>
            
>>>>>>> b3ea0bcd298bae2ef595793faad1e8bd9ca122f1
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navb;
