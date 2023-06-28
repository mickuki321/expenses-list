import {Box, type BoxProps} from '@chakra-ui/react';

export const BoxWrapper = ({children, ...arg}: BoxProps & {children: Array<JSX.Element | string> | JSX.Element | string}) => (
	<Box border='1px solid' borderColor='gray.300' borderRadius='4px' bgColor='100.gray' p={4} m={4} w='80%' {...arg}>
		{children}
	</Box>
);
