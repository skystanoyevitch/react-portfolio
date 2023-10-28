import React, { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

// Other Imports
import { gsap } from "gsap";

function Hero() {
	const navigate = useNavigate();
	const comp = useRef();
	const tl = useRef();

	useEffect(() => {
		navigate("/", { replace: true });
	}, [navigate]);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			tl.current = gsap
				.timeline()
				.fromTo(
					".heyo",
					{ opacity: 0, ease: 0.2, duration: 1 },
					{ opacity: 1, ease: 0.2, duration: 1 }
				)
				.fromTo(
					".box",
					{ opacity: 0, ease: 0.2, duration: 1 },
					{ opacity: 1, ease: 0.2, duration: 1 }
				);
		}, comp);

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<div className="w-screen h-screen flex flex-col justify-center md:h-screen">
			<div className="lg:h-full">
				<div className="container mx-auto flex flex-col lg:justify-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
					<div
						ref={comp}
						className=" flex flex-col justify-center space-y-4 container mx-auto max-w-sm md:max-w-lg lg:max-w-6xl"
					>
						<p className="heyo text-5xl md:text-6xl xl:text-8xl font-caveat font-bold text-neutral-300">
							Heyo{" "}
							{/* <span className="text-3xl md:text-7xl">🤙</span> */}
						</p>

						<div className="box">
							<div className="text-5xl md:text-5xl xl:text-8xl font-poppins font-bold text-neutral-300">
								I'm Sky, a Software Engineer and Designer.{" "}
								{/* <span className="md:text-4xl lg:text-7xl">🧑</span> */}
							</div>
							<div className="text-white text-sm md:text-base font-poppins font-light flex space-x-4 pt-8">
								<a
									href="/portfolio"
									className="bg-orange-600 rounded-lg py-1 px-3 flex place-items-center"
								>
									<div>My Projects</div>
								</a>
								<a
									href="https://twitter.com/Sky_webdev"
									target="blank_"
									className="bg-cyan-600 rounded-lg py-1 px-3 flex place-items-center"
								>
									<div>Contact Me</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
