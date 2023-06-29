import {Input} from '@chakra-ui/react';
import {type UseFormReturn, type FieldPath, type FieldValues, type RegisterOptions} from 'react-hook-form';

import {errorInputNarrowing} from '../../../narrowing/error-input';
import {InputWrapper} from '../../atoms';

interface Props<TDataForm extends FieldValues> {
	name: FieldPath<TDataForm>;
	form: UseFormReturn<TDataForm>;
	formOption?: RegisterOptions;
	label: string;
}
export const DefaultInput = <TDataForm extends FieldValues >({name, form, formOption, label}: Props<TDataForm>) => {
	const error = form.formState.errors?.[name];
	return (
		<InputWrapper label={label} error={errorInputNarrowing(error) ? error : undefined }>
			<Input {...form.register(name, formOption)}/>
		</InputWrapper>
	);
};
