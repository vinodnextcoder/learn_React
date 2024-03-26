// components/Navbar/index.js
 
import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/team" activeStyle>
                        Teams
                    </NavLink>
                </NavMenu>
              
            </Nav>
        </>
    );
};
 
export default Navbar;