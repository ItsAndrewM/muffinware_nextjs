/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/eWAI5HBAWo8
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	CarouselItem,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import SearchIcon from "../icons/searchIcon";
import ShoppingbagIcon from "../icons/shoppingbagIcon";
import CodeIcon from "../icons/codeIcon";
import LayoutIcon from "../icons/layoutIcon";

export function Homepage() {
	return (
		<div key="1" className="flex flex-col min-h-[100dvh]">
			<section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Beautiful Websites. Clean Code.
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
									Let us bring your vision to life. We create stunning,
									user-friendly websites that make your business stand out.
								</p>
							</div>
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Get Started
							</Link>
						</div>
						<Image
							alt="Hero"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
							height="550"
							src="/assets/home/vision.jpg"
							width="550"
						/>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Our Services
						</h2>
						<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							We offer a full range of web services to meet your needs.
						</p>
					</div>
					<div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-4 lg:gap-10">
						<div className="space-y-4">
							<LayoutIcon className="mx-auto h-12 w-12" />
							<div className="space-y-2">
								<h3 className="text-2xl font-bold">Web Design</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Let us create a stunning website that captures your brand's
									style and engages your visitors.
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<CodeIcon className="mx-auto h-12 w-12" />
							<div className="space-y-2">
								<h3 className="text-2xl font-bold">Web Development</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Our expert developers will bring your website to life with
									clean code and advanced functionality.
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<ShoppingbagIcon className="mx-auto h-12 w-12" />
							<div className="space-y-2">
								<h3 className="text-2xl font-bold">E-commerce Solutions</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Ready to sell online? We can set up your e-commerce site and
									help you reach customers around the world.
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<SearchIcon className="mx-auto h-12 w-12" />
							<div className="space-y-2">
								<h3 className="text-2xl font-bold">SEO Optimization</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Boost your visibility with our SEO services. Increase your
									online presence and attract your target customers.
								</p>
							</div>
						</div>
					</div>
					<div>
						<Link
							className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="#"
						>
							View all services
						</Link>
					</div>
				</div>
			</section>
			{/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
				<div className="container grid items-center gap-6 px-4 text-center md:px-6">
					<div className="space-y-2">
						<h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
							Trusted by our Clients
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Our clients love the websites we create. Here's what they have to
							say:
						</p>
					</div>
					<div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-10">
						<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
							<img
								alt="Logo"
								className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
								height="70"
								src="/placeholder.svg"
								width="140"
							/>
						</div>
						<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
							<img
								alt="Logo"
								className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
								height="70"
								src="/placeholder.svg"
								width="140"
							/>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
						<div className="space-y-4">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								SEO
							</div>
							<h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
								Boost your visibility with SEO.
							</h2>
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Contact Sales
							</Link>
						</div>
						<div className="flex flex-col items-start space-y-4">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								SEO Services
							</div>
							<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
								Our SEO services are designed to increase your online visibility
								and attract the customers you are targeting. Let us help you
								optimize your website for search engines.
							</p>
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
								href="#"
							>
								Contact Sales
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Our Work
						</h2>
						<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Check out some of our latest projects and see the quality of our
							work.
						</p>
					</div>
					<div className="w-full max-w-3xl">
						<Carousel>
							<CarouselContent>
								<CarouselItem>
									<div className="relative">
										<img
											alt="Project 1"
											className="object-cover rounded-lg"
											height={400}
											src="/placeholder.svg"
											style={{
												aspectRatio: "600/400",
												objectFit: "cover",
											}}
											width={600}
										/>
										<div className="absolute bottom-4 left-4 text-white">
											<h3 className="text-lg font-semibold">Project 1</h3>
											<p className="text-sm">Description for Project 1</p>
										</div>
									</div>
								</CarouselItem>
								<CarouselItem className="w-full">
									<div className="relative h-96">
										<img
											alt="Project 2"
											className="object-cover rounded-lg"
											height={400}
											src="/placeholder.svg"
											style={{
												aspectRatio: "600/400",
												objectFit: "cover",
											}}
											width={600}
										/>
									</div>
								</CarouselItem>
								<CarouselItem className="w-full">
									<img
										alt="Project 3"
										className="object-cover rounded-lg"
										height={400}
										src="/placeholder.svg"
										style={{
											aspectRatio: "600/400",
											objectFit: "cover",
										}}
										width={600}
									/>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Experience the workflow the best frontend teams love.
						</h2>
						<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Let your team focus on shipping features instead of managing
							infrastructure with automated CI/CD.
						</p>
					</div>
					<div className="mx-auto w-full max-w-sm space-y-2">
						<form className="flex space-x-2">
							<Input
								className="max-w-lg flex-1"
								placeholder="Enter your email"
								type="email"
							/>
							<Button type="submit">Sign Up</Button>
						</form>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							Sign up to get notified when we launch.
							<Link className="underline underline-offset-2" href="#">
								Terms & Conditions
							</Link>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}