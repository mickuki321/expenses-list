import {type RegisterOptions} from 'react-hook-form/dist/types/validator';

export const titleInputFormOption = (length: number): RegisterOptions => ({
	required: 'The field is required',
	maxLength: {
		value: 30,
		message: `The maximum length is 30 characters  (${length}/30)`},
	minLength: {
		value: 5,
		message: `The minimum length to 5 characters  (5/${length})`},
});

export const moneyInputFormOption = (length: number): RegisterOptions => (
	{
		required: 'The field is required',
		min: {
			value: 0.001,
			message: 'The digit should be greater than 0'},
		pattern: {
			value: /^\$?\d+(\.\d{1,2})?$/,
			message: 'Digit must be positive and can have up to 2 decimal places'},
		maxLength: {
			value: 30,
			message: `The maximum length is 30 characters (${length}/30)`},
	}
);
