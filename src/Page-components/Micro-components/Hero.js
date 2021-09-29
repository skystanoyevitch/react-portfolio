import React from "react";

function Hero() {
	// TODO: make responsive
	return (
		<div className="w-screen md:h-2/3">
			<div className="bg-heroImage bg-cover bg-no-repeat bg-center h-full z-0">
				<div className="z-10 bg-gradient-to-b from-gray-700 w-full h-full flex md:place-items-center justify-center lg:justify-start">
					<div className="lg:pl-96 flex flex-col md:max-w-4xl text-secondary">
						<h1 className="text-5xl md:text-9xl font-anton">
							WELCOME
						</h1>
						<p
							className="text-2xl"
							style={{
								textShadow: "-2px 2px 6px rgba(0, 0, 0, 0.31)",
							}}
						>
							to the Beginning of a new Journey.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
