import logo from "../Assets/logo.svg";

const Navigation = ({ set }) => {
	const openAdd = () => {};

	return (
		<nav className="fixed-navigation">
			<img className="logo" src={logo} />
			<ul className="nav-links">
				<li>
					<a className="nav-link" href="index.html">
						Home
					</a>
				</li>
				<li>
					<a className="nav-link" href="#">
						Find offers
					</a>
				</li>
				<li>
					<a className="nav-link" onClick={() => set(true)}>
						Add new offers
					</a>
				</li>
				<li>
					<a className="nav-link" href="#myoffers">
						My offers
					</a>
				</li>
				<li>
					<a className="nav-link" href="#favorites">
						Favorites
					</a>
				</li>
				<button className="button primary">Log out</button>
			</ul>
		</nav>
	);
};

export default Navigation;
