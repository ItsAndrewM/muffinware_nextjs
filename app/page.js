import Image from "next/image";
import Layout from "@/components/component/layout";
import { Homepage } from "@/components/component/homepage";
import { description, title } from "@/shared-metadata/metadata";

export default function Home() {
	return <Homepage />;
}
