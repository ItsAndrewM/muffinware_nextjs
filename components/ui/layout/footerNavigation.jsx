import FacebookIcon from "@/components/icons/facebookIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import Link from "next/link";
import { Input } from "../input";
import { Button } from "../button";
import MilkIcon from "@/components/icons/milkIcon";

const FooterNavigation = () => {
	return (
		<footer className="flex flex-col gap-4 py-6 px-4 bg-white dark:bg-gray-800 sm:px-6  lg:gap-6">
			<div className="flex flex-col gap-4 py-6 px-4 bg-white dark:bg-gray-800 sm:px-6 lg:flex-row lg:gap-6">
				<div className="flex items-center lg:w-1/4">
					<Link className="flex items-center" href="#">
						<MilkIcon className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</Link>
				</div>
				<div className="space-y-4 lg:w-1/4">
					<h3 className="text-lg font-bold">Sign up for our newsletter</h3>
					<form className="flex flex-col space-y-2">
						<Input
							className="max-w-md"
							placeholder="Enter your email"
							type="email"
						/>
						<Button>Subscribe</Button>
					</form>
				</div>
				<div className="space-y-4 lg:w-1/4">
					<h3 className="text-lg font-bold">Contact</h3>
					<p>
						<Link className="text-blue-500" href="#">
							info@acme.com
						</Link>
					</p>
				</div>
				<div className="space-y-4 lg:w-1/4">
					<h3 className="text-lg font-bold">Services</h3>
					<p>
						<Link className="text-blue-500" href="#">
							Web Development
						</Link>
					</p>
					<p>
						<Link className="text-blue-500" href="#">
							App Development
						</Link>
					</p>
				</div>
				<div className="space-y-4 lg:w-1/4">
					<h3 className="text-lg font-bold">Our Work</h3>
					<p>
						<Link className="text-blue-500" href="#">
							Project 1
						</Link>
					</p>
					<p>
						<Link className="text-blue-500" href="#">
							Project 2
						</Link>
					</p>
				</div>
				<div className="flex flex-col items-start gap-4 lg:w-1/4">
					<p className="text-lg font-bold">Connect</p>
					<div className="text-blue-500 flex items-start">
						<Link className="flex items-center" href="#">
							<FacebookIcon className="h-6 w-6 text-blue-500" />
							Facebook
						</Link>
					</div>
					<div className="text-blue-500 flex items-start">
						<Link className="flex items-center" href="#">
							<TwitterIcon className="h-6 w-6 text-blue-500" />
							Twitter
						</Link>
					</div>
					<div className="text-blue-500 flex items-start">
						<Link className="flex items-center gap-2" href="#">
							<InstagramIcon className="h-6 w-6 text-blue-500" />
							<span>Instagram</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 px-4 bg-white dark:bg-gray-800 sm:px-6 lg:flex-row lg:gap-6">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2024 MuffinWare. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default FooterNavigation;
