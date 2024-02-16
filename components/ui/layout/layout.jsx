import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<nav>
					<Link href={"/"}>Home</Link>
				</nav>
			</header>
			<main>{children}</main>
			<footer>
				<nav>
					<ul>
						<li>
							<Link href={"/"}>Home</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
};

export default Layout;
