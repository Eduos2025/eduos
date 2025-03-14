import { createContext, useState, useEffect } from "react";
import Sidebar from "../components/user-dashboard/Sidebar";
import Header from "../components/user-dashboard/Header";
import "../css/dashboard.css";
import "../css/responsive.css";
import PropTypes from "prop-types";
import SEO from "../components/SEO";

const Mycontext = createContext();

const UserDashboardLayout = ({ children }) => {
	// Initialize themeMode based on localStorage or system preference
	const [themeMode, setThemeMode] = useState(() => {
		const savedTheme = localStorage.getItem("themeMode");
		if (savedTheme) {
			return savedTheme === "dark"; // Convert saved value to boolean
		}
		// If no saved theme, use system preference
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	});

	const [isToggleSidebar, setIsToggleSidebar] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpenNav, setIsOpenNav] = useState(false);

	// Apply the theme when the component mounts or themeMode changes
	useEffect(() => {
		if (themeMode) {
			document.body.classList.add("dark");
			document.body.classList.remove("light");
			localStorage.setItem("themeMode", "dark");
		} else {
			document.body.classList.add("light");
			document.body.classList.remove("dark");
			localStorage.setItem("themeMode", "light");
		}
	}, [themeMode]);

	// Handle window resize
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const openNav = () => {
		setIsOpenNav(true);
	};
	const closeNav = () => {
		setIsOpenNav(false);
	};

	const values = {
		isToggleSidebar,
		setIsToggleSidebar,
		themeMode,
		setThemeMode,
		windowWidth,
		openNav,
		isOpenNav,
		setIsOpenNav,
	};

	return (
		<Mycontext.Provider value={values}>
			<SEO
				title="User Dashboard | Eduos"
				favicon="/public/favicons/EDUOSlogo.png"
			/>
			<div className="dashboard">
				<Header />
				<div className="main d-flex">
					<div
						className={`sidebarOverlay d-none ${isOpenNav ? "show" : ""}`}
						onClick={() => setIsOpenNav(false)}
					></div>
					<div
						className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""} ${
							isOpenNav ? "open" : ""
						}`}
					>
						<Sidebar onClose={closeNav} />
					</div>
					<div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
						{children}
					</div>
				</div>
			</div>
		</Mycontext.Provider>
	);
};

UserDashboardLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserDashboardLayout;
export { Mycontext };
