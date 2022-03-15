import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const aboutSectionVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};
function About() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<motion.section
			ref={ref}
			variants={aboutSectionVariant}
			initial="initial"
			animate={inView ? "animate" : "initial"}
			className="container mx-auto max-w-xs py-20 md:max-w-lg xl:p-0 xl:flex lg:max-w-5xl lg:flex lg:p-24 lg:items-center xl:py-44 lg:justify-evenly space-y-20 xl:space-y-0"
		>
			<div className="container mx-auto">
				<h1 className="text-center font-playFair font-regular text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 xl:mb-32">
					Portfolio
				</h1>
				<ul className="hidden md:visible lg:mx-auto md:flex justify-evenly max-w-2xl md:my-12 lg:my-20 font-poppins font-light lg:text-xl">
					<li>All Projects</li>
					<li>Design</li>
					<li>Development</li>
					<li>For Fun</li>
				</ul>

				<div className="grid lg:grid-cols-2 gap-x-9 gap-y-9">
					<div className="h-96 bg-skyCafe bg-cover bg-no-repeat"></div>
					<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
				</div>
			</div>
		</motion.section>
	);
}

export default About;
