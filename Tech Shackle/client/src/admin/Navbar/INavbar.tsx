import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Redirect, useHistory } from 'react-router-dom';

export const INavBar = ({ setLoggedIn }: any) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Navbar bg='dark' expand='sm' variant='dark' collapseOnSelect>
      <Navbar.Brand href='/'>Tech Shackle&#169; Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink exact to='/' activeClassName='active' className='nav-link'>
            Home
          </NavLink>
          <NavLink
            exact
            to='/modify'
            activeClassName='active'
            className='nav-link'
          >
            Add/Delete/Modify Admin
          </NavLink>
          <Button
            className='nav-link logout-btn'
            variant='link'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
