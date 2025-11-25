"use client";

import { userSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const CreateForm = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting, isDirty },
		reset,
	} = useForm({
		resolver: zodResolver(userSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			gender: "",
		},
		mode: "all",
	});

	const createFormHandler = async (data: z.infer<typeof userSchema>) => {
		console.log(data);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(createFormHandler)}
				className="grid gap-6">
				<Controller
					name="firstName"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>First Name</FieldLabel>
							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter your first name"
								autoComplete="given-name"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="lastName"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter your last name"
								autoComplete="family-name"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Email</FieldLabel>
							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter your email"
								autoComplete="email"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="gender"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Gender</FieldLabel>
							<Select
								name={field.name}
								value={field.value}
								onValueChange={field.onChange}>
								<SelectTrigger aria-invalid={fieldState.invalid}>
									<SelectValue placeholder="Select your gender" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="male">Male</SelectItem>
									<SelectItem value="female">Female</SelectItem>
									<SelectItem value="others">Others</SelectItem>
								</SelectContent>
							</Select>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={() => reset()}
						disabled={!isDirty}
						type="reset"
						variant={"destructive"}
						className="cursor-pointer">
						Reset
					</Button>

					<Button
						className="cursor-pointer"
						type="submit"
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2Icon className="animate-spin" /> Submitting..
							</>
						) : (
							<>
								<SendIcon /> Submit
							</>
						)}
					</Button>
				</div>
			</form>

			<Button
				type="button"
				variant={"outline"}
				className="w-full cursor-pointer">
				Genarate User Details
			</Button>
		</>
	);
};

export default CreateForm;
