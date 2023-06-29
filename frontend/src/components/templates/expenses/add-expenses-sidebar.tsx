import {useForm} from 'react-hook-form';
import {Button} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';

import {useStore} from '../../../store';
import {BoxWrapper} from '../../atoms';
import {ExpensesForm} from '../../molecules';
import {type INewExpense} from '../../../interfaces/expenses';

export const AddExpensesSidebar = observer(() => {
	const expensesForm = useForm<INewExpense>();
	const {expenses: {list, addExpense}} = useStore();

	const handleSubmit = (data: INewExpense) => {
		const lastId = list[list.length - 1]?.id ?? 0;
		addExpense({
			...data,
			id: lastId + 1,
		});
		expensesForm.reset({
			title: '',
			amount: '',
		});
	};

	return (
		<BoxWrapper h='min-content'>
			Create new expense
			<form onSubmit={expensesForm.handleSubmit(handleSubmit)}>
				<ExpensesForm form={expensesForm}/>
				<Button mt={4} w='100%' type='submit' variant='apply'>
					save
				</Button>
			</form>
		</BoxWrapper>
	);
});
