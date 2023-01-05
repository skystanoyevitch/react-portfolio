import Hero from "./Components/Hero";
import FeaturedProjects from "./Components/FeaturedProjects";
import MainContact from "./Components/MainContact";

const Homepage = () => {
	return (
		<div className="bg-shapesBg">
			<Hero />
			<FeaturedProjects />
			<MainContact />
		</div>
	);
};

export default Homepage;
