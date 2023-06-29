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
import {useEffect} from 'react';

import {ExpensesForm} from '../../molecules';
import {type IExpense, type INewExpense} from '../../../interfaces/expenses';
import {useStore} from '../../../store';

interface Props {
	defaultValue?: IExpense;
	closeEditHeader: () => void;
}

export const ExpenseEditModal = ({defaultValue, closeEditHeader}: Props) => {
	const {expenses: {list, editExpense}} = useStore();
	const isOpen = Boolean(defaultValue);
	const expensesForm = useForm<INewExpense>();

	useEffect(() => {
		if (!defaultValue) {
			expensesForm.reset({
				title: '',
				amount: '',
			});
		}

		expensesForm.reset(defaultValue);
	}, [defaultValue]);
	const handleSubmit = (data: INewExpense) => {
		if (defaultValue) {
			const lastId = list[list.length - 1]?.id ?? 0;
			editExpense(defaultValue, {
				...data,
				id: lastId + 1,
			});
		}

		closeEditHeader();
	};

	return (
		<Modal isOpen={isOpen} onClose={closeEditHeader}>
			<form onSubmit={expensesForm.handleSubmit(handleSubmit)}>
				<ModalOverlay />
				<ModalContent >
					<ModalHeader w='100%' p={8}>Edit Expense</ModalHeader>
					<ModalCloseButton />
					<ModalBody py={0} px={8}>
						<ExpensesForm form={expensesForm}/>
					</ModalBody>

					<ModalFooter w='100%' p={8}>
						<Button colorScheme='red' mr={3} onClick={closeEditHeader} variant='error'>
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
