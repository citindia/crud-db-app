import { faker } from "@faker-js/faker/locale/en_IN";

const genarateUserDetails = () => {
	const { person, internet } = faker;

	const gender = person.sexType();
	const firstName = person.firstName(gender);
	const lastName = person.lastName(gender);
	const email = internet.email({ firstName, lastName }).toLowerCase();

	return {
		firstName,
		lastName,
		email,
		gender,
	};
};

export default genarateUserDetails;
