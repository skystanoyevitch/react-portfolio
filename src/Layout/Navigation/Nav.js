import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const menuVar = {
	open: {
		height: "100%",
		visibility: "visible",
		opacity: "1",
	},
	closed: {
		height: "0",
		visibility: "hidden",
		display: "block",
		opacity: "0",
	},
};

const ham1 = {
	closed: { rotate: 0 },
	open: { rotate: 45, translateY: 11 },
};
const ham3 = {
	closed: { rotate: 0 },
	open: { rotate: -45, translateY: -13 },
};

const hamClosed = {
	closed: { display: "block" },
	open: { visibility: "hidden", duration: 0.2 },
};
const Nav = () => {
	const [open, setOpen] = useCycle(false, true);

	return (
		// Desktop Navigation Top Menu
		<div className={"bg-primaryNav md:flex md:flex-col"}>
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				<ul className="md:p-10 md:space-x-16 lg:space-x-24 flex p-x font-poppins lg:text-xl xl:text-2xl text-black place-items-center">
					<li>
						<Link to="/">
							<button className=" hover:text-mainOrange">
								Home
							</button>
						</Link>
					</li>
					<li id="portfolio">
						<Link to="/Portfolio">
							<button className=" hover:text-mainOrange">
								Portfolio
							</button>
						</Link>
					</li>
					<li>
						<Link to="/Contact">
							<button className=" hover:text-mainOrange">
								Contact
							</button>
						</Link>
					</li>
				</ul>
			</nav>

			{/* Moible Navigation Hamburger Menu */}
			<div className="md:hidden container mx-auto flex flex-col items-start">
				<motion.button
					initial={false}
					onClick={setOpen}
					open={open}
					className="px-10 py-5 md:hidden space-y-2"
				>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={ham1}
						className="w-8 h-1 bg-gray-700 rounded-full"
					></motion.div>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={hamClosed}
						className="w-8 h-1 bg-gray-700 rounded-full"
					></motion.div>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={ham3}
						className="w-8 h-1 bg-gray-700 rounded-full"
					></motion.div>
				</motion.button>

				<motion.nav
					initial={false}
					animate={open ? "open" : "closed"}
					variants={menuVar}
				>
					<ul className="font-poppins text-3xl space-y-6 p-10">
						<motion.li onClick={setOpen} open={open}>
							<Link to="/">Home</Link>
						</motion.li>
						<motion.li onClick={setOpen} open={open} id="portfolio">
							<Link to="/Portfolio">Portfolio</Link>
						</motion.li>
						<motion.li onClick={setOpen} open={open}>
							<NavLink to="/Contact">Contact</NavLink>
						</motion.li>
					</ul>
				</motion.nav>
			</div>
		</div>
	);
};

export default Nav;
