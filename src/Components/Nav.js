import React, { useContext, useState } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { NewsContext } from '../NewsContext';

const Nav = () => {

    const { search } = useContext(NewsContext)

    const [collapse, setCollapse] = useState(false);

    const onClick  = () => {
        collapse === false ? setCollapse(true) : setCollapse(false)
    }

    const bgPink = {backgroundColor: '#ff742b'}
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong> Hacker News </strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ onClick } style = {{ width: "100%"}} />
              <MDBCollapse isOpen = { collapse } navbar>
                <MDBNavbarNav>
                  <MDBNavItem >
                  <input
                        type="text"
                        className="form-control mr-sm-2"
                        placeholder = "Search"
                        id="formGroupExampleInput"
                        onChange = { (event) => search(event.target.value)}
                    />
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    )
}

export default Nav
