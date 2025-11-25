import z from "zod";

export const userFormSchema = z.object({
	firstName: z.string().min(2, { error: "First name is too short" }),
	lastName: z.string().min(2, { error: "Last name is too short" }),
	email: z.email({ error: "Email is invalid" }),
	gender: z.string().min(4, { error: "Gender is required" }),
});

export type UserFormType = z.infer<typeof userFormSchema>;
