import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../assets/css/Header.css"

const Header = () => {
    return (
        <Nav
            activeKey="/home"
            className="bg-dark"
        >
            <div className='link'>
                <Nav.Item>
                    <Link to="/">Homepage</Link>
                    <NavDropdown title="Package Test" id="basic-nav-dropdown">
                        <Link to="/package/rich-text-editor">Rich Text Editor</Link>
                        <Link to="/package/tree-dropdown">Tree dropdown</Link>
                    </NavDropdown>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default Header