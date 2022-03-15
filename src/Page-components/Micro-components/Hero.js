import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const buttonVarant = {
	hover: {
		scale: 1.2,
		boxShadow: "5px 5px 0 rgba(255, 87, 34, 0.2)",
	},
};
function Hero() {
	// const { ref, inView, entry } = useInView();
	// const { scrollYProgress } = useViewportScroll();
	return (
		<div className="grid place-items-center xl:h-3/4 p-10 xl:p-0 md:mt-24">
			<div className="container mx-auto">
				<div className="static mx-auto w-48 h-64 md:w-48 md:h-56 lg:w-80 lg:h-96 border-2 border-black">
					<div className="relative right-2 bottom-2 lg:right-4 lg:bottom-4 mx-auto w-48 h-64 md:w-48 md:h-56 lg:w-80 lg:h-96 bg-profileImage bg-cover bg-center bg-no-repeat"></div>
				</div>

				<div className="text-center mt-10 lg:flex lg:flex-col lg:items-center">
					<p className="font-poppins font-light">
						UI | UX Designer
					</p>
					<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playFair font-semibold text-mainOrange">
						Sky Stanojevic
					</h1>
					<p className="mt-10 font-poppins font-light text-xl leading-7 lg:text-3xl lg:leading-10 text-gray-600 lg:max-w-3xl xl:max-w-4xl lg:tracking-wide">
						I am an experienced UI/UX Designer living in the sunny
						side of San Diego, CA.
						<br/> 
						If you are looking for a Website
						for Personal Branding or a Website for your Company, i
						Build Designs that Brings both you and your users
						together
					</p>
					<Link to="/Showcase">
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="py-1 px-8 font-poppins text-md xl:text-2xl xl:w-30 border-2 border-black lg:py-2 lg:px-8 mt-8 xl:mt-10"
						>
							Hire Me
						</motion.button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
