import React from 'react'
import {Nav} from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Alumini</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Useful link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">contact Us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">
       E-mail
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <p className="text-center mt-4 mb-4">
  Site designed and maintained by Central Computer Center, GNDEC , Ludhiana Disclaimer :
  Every effort has been made to verify the contents of this website. However Guru Nanak Dev Engineering College ,
   Ludhiana is not liable for any action based on such information.
  </p>
  {/* <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
   
  </Nav> */}
</>
        </div>
    )
}

export default Footer
