const RootContainer = ({ children }) => {
	return (
		<main className="flex flex-col items-center lg:min-h-screen min-h-svh">
			{children}
		</main>
	);
};

export default RootContainer;
