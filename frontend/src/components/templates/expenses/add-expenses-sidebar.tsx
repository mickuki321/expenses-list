import {useForm} from 'react-hook-form';
import {Button} from '@chakra-ui/react';

import {BoxWrapper} from '../../../components/atoms/wrappers/box-wrapper';
import {ExpensesForm} from '../../../components/molecules/forms/expenses-form';
import {type IExpenses} from '../../../interfaces/expenses';
import {observer} from 'mobx-react-lite';
import {useStore} from 'src/store';

export const AddExpensesSidebar = observer(() => {
	const expensesForm = useForm<IExpenses>();
	const {expenses: {list, addExpenses}} = useStore();

	const handleSubmit = (data: IExpenses) => {
		const lastId = list[list.length - 1]?.id ?? 0;
		addExpenses({
			id: lastId + 1,
			...data,
		});
	};

	return (
		<BoxWrapper width='400px'>
			Create new expense
			<form onSubmit={expensesForm.handleSubmit(handleSubmit)}>
				<ExpensesForm form={expensesForm}/>
				<Button mt={4} w='100%' type='submit'>
					save
				</Button>
			</form>
		</BoxWrapper>
	);
});
