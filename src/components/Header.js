import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<p className="navbar-brand">Toko Komputer</p>

			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/add" className="nav-link">
						Add Product
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
