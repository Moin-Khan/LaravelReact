//import Header from './Header'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory();
    function logOut() {
        localStorage.clear();
        history.push('/Login')
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">LaravelReact</Navbar.Brand>
                <Nav className="mr-auto navber_warapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/">Product List</Link>
                                <Link to="/AddProduct">Add Product</Link>
                                <Link to="/UpdateProduct">Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/Login">Login</Link>
                                <Link to="/Register">Register</Link>
                            </>
                    }
                </Nav>
                
                {localStorage.getItem('user-info') ?

                    <Nav className="alignEnd" className="offset-sm-3">
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null
                }
            </Navbar>
        </div>
    )
}

export default Header