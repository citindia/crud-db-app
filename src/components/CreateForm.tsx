"use client";

import genarateUserDetails from "@/hooks/genarateUserDetails";
import delay from "@/lib/delay";
import { userFormSchema, UserFormType } from "@/lib/zodSchema";
import createDBUser from "@/server/createDBUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgePlusIcon, Loader2Icon, LoaderIcon, SendIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
	const [isLoading, setIsLoading] = useState(false);

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
		setValue,
		clearErrors,
	} = useForm({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			gender: "",
		},
		mode: "all",
	});

	const createFormHandler = async (cuData: UserFormType) => {
		await delay(1000);

		const { isSuccess, message } = await createDBUser(cuData);

		if (isSuccess) {
			toast.success(message);

			reset();
		} else {
			toast.error(message);
		}
	};

	const genarateDetailsHandler = async () => {
		setIsLoading(true);

		const { firstName, lastName, email, gender } = genarateUserDetails();

		await delay(1000);

		setValue("firstName", firstName);
		setValue("lastName", lastName);
		setValue("email", email);
		setValue("gender", gender);

		clearErrors();

		setIsLoading(false);
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
				onClick={genarateDetailsHandler}
				disabled={isLoading}
				type="button"
				variant={"outline"}
				className="w-full cursor-pointer">
				{isLoading ? (
					<>
						<LoaderIcon className="animate-spin" /> Generating..
					</>
				) : (
					<>
						<BadgePlusIcon /> Genarate User Details
					</>
				)}
			</Button>
		</>
	);
};

export default CreateForm;
