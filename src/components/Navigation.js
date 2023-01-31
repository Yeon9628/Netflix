import React, { useState } from 'react';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({ searchProps }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const goToHomepage = () => {
    navigate('/');
  }
  const searchHandle = () => {
    searchProps(keyword);
  }
  const search = (e) => {
    if (e.key === "Enter") {
      searchHandle();
      e.preventDefault();
    }
  }
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='nav_img' onClick={goToHomepage}><img width={85} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll
          >
            <Link to="/" className='nav_item'>Home</Link>
            <Link to="/movies" className='nav_item'>Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Movies Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={search}
            />
            <Button variant="outline-danger" onClick={searchHandle} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;