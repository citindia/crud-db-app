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
		<section className="grid h-[95dvh] place-items-center">
			<Card className="w-sm">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-semibold">
						Create User
					</CardTitle>
				</CardHeader>

				<CardContent className="space-y-8">
					<CreateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
