import React from 'react';
import {Link} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Logo = 'ReactVite'

export default function Header() {
	return (
			<div className="innerHeader">
				<div className="leftSide">
				<Link to={'/'}>
					<h2 className="logo">{Logo}</h2>
				</Link>
				</div>
				<div className="rightSide">
			        <nav>
			          <ul>
			            <li>
			              <Link to="/">Home</Link>
			            </li>
			            <li>
			              <Link to="/products">Products</Link>
			            </li>
			            <li>
			              <Link to="/contact">Contact</Link>
			            </li>
			            <li>
			            	<Link to="/"><FaShoppingCart/></Link>
			            </li>
			          </ul>
			        </nav>
				</div>
			</div>
		)
}