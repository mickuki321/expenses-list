import {Box, type BoxProps} from '@chakra-ui/react';

export const BoxWrapper = ({children, ...arg}: BoxProps & {children: Array<JSX.Element | string> | JSX.Element | string}) => (
	<Box border='1px solid' borderColor='gray.300' borderRadius='4px' bgColor='white' p={4} m={4} w='100%' {...arg} >
		{children}
	</Box>
);
