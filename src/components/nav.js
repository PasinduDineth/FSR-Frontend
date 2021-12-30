import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { graphql, StaticQuery, Link } from "gatsby";

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState( {
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen} = this.state
    return (
        <div>
           <Navbar expand="md" className="navbarMain" fixed='top'>
              <NavbarBrand><Link to={`/`}><span className="fsr logo">FSR |</span><span className="logo">FIND SOME REVIEWS</span></Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/" className="navItem">HOME</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
    );
  }
}


export default props => (
    <StaticQuery
        query={graphql
          `
          query {
            strapiGlobal {
              siteName
            }
            allStrapiCategory {
              edges {
                node {
                  slug
                  name
                }
              }
            }
          }
        `    
        }
        render={( data ) => <NavigationMenu {...props} />}
    />
);