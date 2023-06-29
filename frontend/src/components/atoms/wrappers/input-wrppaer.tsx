import {type BoxProps} from '@chakra-ui/react';
import {Box, Text} from '@chakra-ui/react';
import {type FieldError} from 'react-hook-form';

export interface PropsInputWrapper extends BoxProps {
	children: JSX.Element;
	label: string;
	error?: FieldError;
	isRequired?: boolean;
}
export const InputWrapper = ({
	children,
	label,
	error,
	isRequired,
	...arg
}: PropsInputWrapper): JSX.Element => (
	<Box display='flex' justifyContent='flex-end' flexDirection='column-reverse' {...arg}>
		{error && (
			<Text color='red.500' >
				{error?.message}
			</Text>
		)}
		{children}
		<Box className='labelGreen'>
			<Text display='inline' fontWeight='700'>
				{label}
			</Text>
			{isRequired && (
				<Text color='red.500' className='labelGreen' display='inline'>
                        *
				</Text>
			)}
		</Box>
	</Box>
);
