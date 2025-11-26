import UserCard from "@/components/UserCard";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "List | CRUD DB App",
	description: "List user page of CRUD DB App",
};

const page = async () => {
	const allUsers = await prisma.user.findMany();

	return (
		<section className="container mx-auto py-16">
			<div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{allUsers.map((user) => (
					<UserCard
						key={user.id}
						user={user}
					/>
				))}
			</div>

			{allUsers.length === 0 && (
				<div className="grid h-[90dvh] place-items-center">
					<p className="text-muted-foreground text-center">No users found</p>
				</div>
			)}
		</section>
	);
};

export default page;
