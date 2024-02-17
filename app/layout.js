import { Inter } from "next/font/google";
import "./globals.css";
import RootContainer from "@/components/common/rootContainer";
import Navigation from "@/components/ui/layout/navigation";
import FooterNavigation from "@/components/ui/layout/footerNavigation";
import { description, title } from "@/shared-metadata/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | MuffinWare",
		default: title,
	},
	description: {
		template: "%s | MuffinWare",
		default: description,
	},
	metadataBase: new URL("https://acme.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
			"de-DE": "/de-DE",
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.muffinware.com",
		title: title,
		description: description,
		siteName: title,
		images: "/og/openGraphImage.png",
	},
	twitter: {
		card: "summary_large_image",
		title: title,
		description: description,
		creator: "@ItsAndrew_Dev",
		images: {
			url: "https://muffinware.com/og/openGraphImage.png",
			alt: "MuffinWare Logo",
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				<RootContainer>{children}</RootContainer>
				<FooterNavigation />
			</body>
		</html>
	);
}
