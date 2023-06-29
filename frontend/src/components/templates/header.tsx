import {SettingsIcon} from '@chakra-ui/icons';
import {Link, Center, Button, useDisclosure} from '@chakra-ui/react';

import {SettingModal} from '../organisms';

export const Header = () => {
	const {isOpen, onOpen, onClose} = useDisclosure();
	return (
		<Center
			display='flex'
			borderBottom='1px solid'
			borderColor='gray.300'
			h='60px'
			alignItems='center'
			bgColor='white'
			position='absolute'
			left={0}
			top={0}
			w='100vw'
			px={{base: '50px', md: '150px'}}
			justifyContent='space-between'>
			<Link href='' fontSize='20px'>Expenses List</Link>
			<Button onClick={onOpen}>
				<SettingsIcon/>
			</Button>
			<SettingModal onClose={onClose} isOpen={isOpen}/>
		</Center>
	);
};
