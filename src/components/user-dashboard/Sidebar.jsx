import Button from "@mui/material/Button";
import { BiSolidDashboard } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { BiPlayCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import routes from "../../routes";
import { IoMdNotifications } from "react-icons/io";
import PropTypes from "prop-types";

const Sidebar = ({ onClose }) => {
	const location = useLocation(); // Current route path
	const [activeTab, setActiveTab] = useState(-1); // Manage active tabs
	const [isToggleSubmenu, setIsToggleSubmenu] = useState(false); // Dropdown toggle

	const handleMenuClick = (index, hasSubmenu = false) => {
		setActiveTab(index);
		if (hasSubmenu) {
			setIsToggleSubmenu((prev) => !prev);
		} else {
			// Call the onClose function when a menu item is clicked
			onClose();
		}
	};

	return (
		<div className="sidebar">
			<ul>
				{/* Dashboard */}
				<li>
					<Link to={routes.userDashboard}>
						<Button
							className={`w-100 ${
								location.pathname === `${routes.userDashboard}` ? "active" : ""
							}`}
							onClick={() => handleMenuClick(0)}
						>
							<span className="icon">
								<BiSolidDashboard />
							</span>
							Dashboard
						</Button>
					</Link>
				</li>

				<li>
					<Link to={routes.buyProduct}>
						<Button
							className={`w-100 ${
								location.pathname === `${routes.buyProduct}` ||
								location.pathname === `${routes.viewProduct}` ||
								location.pathname === `${routes.orderSummary}`
									? "active"
									: ""
							}`}
							onClick={() => handleMenuClick(2)}
						>
							<span className="icon">
								<MdShoppingCart />
							</span>
							Buy Our Product
						</Button>
					</Link>
				</li>

				<li>
					<Link to="#">
						<Button
							className={`w-100 ${location.pathname === "#" ? "active" : ""}`}
							onClick={() => handleMenuClick(2)}
						>
							<span className="icon">
								<BiPlayCircle />
							</span>
							Live Demo
						</Button>
					</Link>
				</li>

				{/* Product with Submenu */}
				<li>
					<Button
						className={`w-100 ${
							activeTab === 1 && isToggleSubmenu ? "active" : ""
						}`}
						onClick={() => handleMenuClick(1, true)}
					>
						<span className="icon">
							<FaServicestack />
						</span>
						Services
						<span className="arrow">
							<FaAngleRight />
						</span>
					</Button>
					{/* Submenu */}
					<div
						className={`submenuWrapper ${
							activeTab === 1 && isToggleSubmenu ? "colapse" : "collapsed"
						}`}
					>
						<ul className="submenu">
							<li>
								<Link
									to="/product/add"
									className={`${
										location.pathname === "/product/add" ? "active" : ""
									}`}
								>
									Add Product
								</Link>
							</li>
							<li>
								<Link
									to="/product/view"
									className={`${
										location.pathname === "/product/view" ? "active" : ""
									}`}
								>
									View Product
								</Link>
							</li>
							<li>
								<Link
									to="/product/list"
									className={`${
										location.pathname === "/product/list" ? "active" : ""
									}`}
								>
									List Product
								</Link>
							</li>
						</ul>
					</div>
				</li>

				{/* New Page */}

				{/* Mail */}
				<li>
					<Link to={routes.userNotification}>
						<Button
							className={`w-100 ${
								location.pathname === `${routes.userNotification}`
									? "active"
									: ""
							}`}
							onClick={() => handleMenuClick(3)}
						>
							<span className="icon">
								<IoMdNotifications />
							</span>
							Notification
							<span className="blinker"></span>
						</Button>
					</Link>
				</li>
			</ul>

			{/* Logout */}
			<div className="logoutWrapper">
				<div className="LogoutBox">
					<Button variant="contained">
						<div className="icon">
							<IoMdLock />
						</div>
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
Sidebar.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose should be a required function
};