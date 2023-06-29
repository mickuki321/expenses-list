import {Flex, Text} from '@chakra-ui/react';

interface Props {
	label: string;
	children: string | number;
}

export const RecordWrapper = ({label, children}: Props): JSX.Element => (
	<Flex pt={2} fontSize='14px' flexDirection={{base: 'column', md: 'row'}}>
		<Text as='b' color='gray.600'>
			{label}
		</Text>
		<Text ml={1}>{children}</Text>
	</Flex>
);
