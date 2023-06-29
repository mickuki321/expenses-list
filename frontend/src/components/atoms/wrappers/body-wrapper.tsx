import {Center} from '@chakra-ui/react';

export const BodyWrapper = ({children}: {children: JSX.Element[]}) => (
	<Center bgColor='gray.50' minH='100vh' alignItems='flex-start' pt='66px' px={{base: '50px', md: '150px'}}>
		{children}
	</Center>
);
