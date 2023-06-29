import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';

import {DefaultInput} from '../../atoms';
import {rateInputFormOption} from '../../../constans/inputs';
import {type IRates} from '../../../interfaces/rates';
import {useStore} from '../../../store';

interface Props {
	onClose: () => void;
	isOpen: boolean;
}

export const SettingModal = ({isOpen, onClose}: Props) => {
	const {rates: {actualRateEuro, setRateEuro}} = useStore();
	const form = useForm<IRates>({defaultValues: {rateEuro: `${actualRateEuro}`}});
	const lengthRateEuro = form.watch('rateEuro')?.length || 0;

	const handleSubmit = (data: IRates) => {
		setRateEuro(parseFloat(data.rateEuro));
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<ModalOverlay />
				<ModalContent >
					<ModalHeader w='100%' px={8} pt={8} color='gray.600' fontWeight='700' fontSize='18px' >Setting</ModalHeader>
					<ModalCloseButton />
					<ModalBody py={0} px={8}>
						<DefaultInput<IRates> label={'Rate euro'}name={'rateEuro'} form={form} formOption={rateInputFormOption(lengthRateEuro)}/>
					</ModalBody>

					<ModalFooter w='100%' p={8}>
						<Button colorScheme='red' mr={3} onClick={onClose} variant='error'>
                        Close
						</Button>
						<Button type='submit' variant='apply'>
                        save
						</Button>
					</ModalFooter>
				</ModalContent>
			</form>

		</Modal>
	);
};
