import {InputWrapper} from 'src/components/atoms/wrappers/input-wrppaer';
import {Input} from '@chakra-ui/react';
import {type UseFormReturn, type FieldPath, type FieldValues} from 'react-hook-form';
import {errorInputNarrowing} from 'src/narrowing/error-input';

interface Props<TDataForm extends FieldValues> {
	name: FieldPath<TDataForm>;
	form: UseFormReturn<TDataForm>;
}
export const DefaultInput = <TDataForm extends FieldValues >({name, form}: Props<TDataForm>) => {
	const error = form.formState.errors?.[name];
	return (
		<InputWrapper name={name} error={errorInputNarrowing(error) ? error : undefined }>
			<Input {...form.register(name)}/>
		</InputWrapper>
	);
};
