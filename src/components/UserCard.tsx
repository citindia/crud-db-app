import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { MailIcon, PencilLineIcon, Trash2Icon, User2Icon } from "lucide-react";
import { User } from "../../generated/prisma/client";
import { Button } from "./shadcnui/button";
import { Separator } from "./shadcnui/separator";

interface UserCardProps {
	user: User;
}

const UserCard = ({ user }: UserCardProps) => {
	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle className="text-center text-4xl">
					{user.firstName} {user.lastName}
				</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent className="place-items-center">
				<div className="flex items-center gap-4 text-2xl capitalize">
					<User2Icon /> {user.gender}
				</div>
				<div className="flex items-center gap-2 text-lg">
					<MailIcon size={16} /> {user.email}
				</div>
			</CardContent>

			<Separator />

			<CardFooter className="grid grid-cols-2 gap-4">
				<Button
					variant="destructive"
					className="cursor-pointer">
					<Trash2Icon /> Delete
				</Button>
				<Button
					variant="outline"
					className="cursor-pointer">
					<PencilLineIcon /> Edit
				</Button>
			</CardFooter>
		</Card>
	);
};

export default UserCard;
