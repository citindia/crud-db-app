"use server";

import prisma from "@/lib/database/dbClient";
import { UserFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createDBUser = async (cuData: UserFormType) => {
	try {
		await prisma.user.create({
			data: cuData,
		});

		revalidatePath("/", "layout");

		return {
			isSuccess: true,
			message: "User created successfully 🥰",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User creation failed 🥲",
		};
	}
};

export default createDBUser;
