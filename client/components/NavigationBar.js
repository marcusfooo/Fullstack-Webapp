import React, { useState } from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar className="navigationbar" color="light" light expand="md" fixed={'top'}>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/"><NavLink style={{fontFamily: 'Roboto', fontSize: '30px', padding: '1rem'}} href="/"><div className="navtab">Home</div> </NavLink></Link>             
            </NavItem>
            <NavItem>
              <Link href="/projects"><NavLink style={{fontFamily: 'Roboto', fontSize: '30px', padding: '1rem'}} href="/projects"><div className="navtab">Projects</div></NavLink></Link>             
            </NavItem>
          </Nav>
        </Collapse>
        <style jsx>{`
         @media (max-width: 768px) {
          .navtab {
            color: black;
            }
          }
          @media (min-width: 768px) {
            .navtab {
              color: black;
            }

            .navtab:hover {
              color: #3377CC;
              transition-duration: 0.5s;
              animation: jiggle 0.5s infinite linear;
            }

            @keyframes jiggle {
              /* start at 0deg and this scale size.
                 scale size is repeated here to maintain smooth scaling */
              0% {transform: rotate(0deg) scale(1.15,1.15);}
              /* midway rotate 2deg right */
              50% {transform: rotate(2deg) scale(1.15,1.15);}
              /* end rotate -2deg left */
              100% {transform: rotate(-2deg) scale(1.15,1.15)}
            }
          }
        `} </style>
      </Navbar>
    </div>
      
  );
}

export default NavigationBar;