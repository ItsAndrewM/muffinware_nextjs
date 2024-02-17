import Link from "next/link";
import {
	NavigationMenuLink,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuList,
	NavigationMenu,
} from "@/components/ui/navigation-menu";
import MilkIcon from "@/components/icons/milkIcon";

const Navigation = () => {
	return (
		<header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 sm:px-6">
			<Link className="flex items-center" href="#">
				<MilkIcon className="h-6 w-6" />
				<span className="sr-only">Acme Inc</span>
			</Link>
			<NavigationMenu className="hidden lg:flex">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className="px-4 py-2" href="#">
							Home
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="px-4 py-2">
							Services
						</NavigationMenuTrigger>
						<NavigationMenuContent className="w-[200px]">
							<NavigationMenuLink asChild>
								<Link className="block px-4 py-2" href="#">
									Web Development
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink asChild>
								<Link className="block px-4 py-2" href="#">
									App Development
								</Link>
							</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="px-4 py-2" href="#">
							About Us
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="px-4 py-2" href="#">
							Contact Us
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};

export default Navigation;
