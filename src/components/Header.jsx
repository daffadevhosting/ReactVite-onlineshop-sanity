import React, { useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FaShoppingCart, FaBars, FaRegTimesCircle } from "react-icons/fa";

const Logo = 'ReactVite'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

	return (
			<div className="innerHeader">
				<div className="leftSide">
				<Link to={'/'}>
					<h2 className="logo">{Logo}</h2>
				</Link>
				</div>
				<div className="rightSide">
		          <div className="menuBtn">
		          {!menuOpen ? (
		            <FaBars size={24} onClick={menuToggleHandler} />
		          ) : (
		            <FaRegTimesCircle size={24} color={'#fff'} onClick={menuToggleHandler} />
		          )}
		          </div>
			        <nav className={`${"nav"} ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""}`}>
			          <ul>
			            <li>
			              <NavLink to="/"
			              style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}>Home</NavLink>
			            </li>
			            <li>
			              <NavLink to="/products"
			  				style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}>Products</NavLink>
			            </li>
			            <li>
			              <NavLink to="/contact"
			  				style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}>Contact</NavLink>
			            </li>
			            <li>
			            	<NavLink to="/"
			  				style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}><FaShoppingCart/></NavLink>
			            </li>
			          </ul>
			        </nav>
				</div>
			</div>
		)
}