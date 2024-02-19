const RootContainer = ({ children }) => {
	return (
		<main className="flex flex-col items-center lg:min-h-screen min-h-svh max-w-7xl w-full mx-auto">
			{children}
		</main>
	);
};

export default RootContainer;
