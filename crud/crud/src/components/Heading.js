import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    Container,
    Nav,
    NavItem,
    NavbarBrand
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">Team List</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/Add" className="btn btn-primary">Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
