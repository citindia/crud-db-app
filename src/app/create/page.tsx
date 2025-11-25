import CreateForm from "@/components/CreateForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create | CRUD DB App",
	description: "Create page of CRUD DB App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-semibold">
						Create User
					</CardTitle>
				</CardHeader>

				<CardContent>
					<CreateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
