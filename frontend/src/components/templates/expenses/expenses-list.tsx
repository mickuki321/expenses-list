import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {DeleteIcon, EditIcon} from '@chakra-ui/icons';
import {Button, Flex, Text} from '@chakra-ui/react';

import {type IExpense} from '../../../interfaces/expenses';
import {BoxWrapper} from '../../atoms';
import {useStore} from '../../../store';
import {GenericTable, ExpenseEditModal} from '../../organisms';

export const ExpensesList = observer(() => {
	const {expenses: {list, removeExpense}, rates: {actualRateEuro}} = useStore();
	const labelsHeader = ['Title', 'Amount(PLN)', 'Amount(EUR)', 'Options'];
	const [editExpense, setEditExpense] = useState<IExpense>();

	const openEditHeader = (data: IExpense) => {
		setEditExpense(data);
	};

	const deleteEditHeader = (data: IExpense) => {
		removeExpense(data);
	};

	const closeEditHeader = () => {
		setEditExpense(undefined);
	};

	const genericColumns = (data: IExpense) => ({
		amountEUR: (parseFloat(data.amount) * actualRateEuro).toFixed(2),
		options:
			<Flex>
				<Button variant='info' mr={4} onClick={() => {
					openEditHeader(data);
				}}><EditIcon/></Button>
				<Button variant='error' onClick={() => {
					deleteEditHeader(data);
				}}><DeleteIcon/></Button>
			</Flex>,
	});

	return (
		<BoxWrapper w='calc(100% - 17px)' h='min-content'>
			<ExpenseEditModal closeEditHeader={closeEditHeader} defaultValue={editExpense}/>
			{list.length === 0
				? <Text color='gray.600' fontWeight='700' fontSize='18px' align='center' py={4} w='100%'>No expenses</Text>
				: <GenericTable<IExpense> dataList={list} nameVariableInColumns={['title', 'amount', 'amountEUR', 'options']} labelsHeader={labelsHeader} genericColumns={genericColumns}/>}

		</BoxWrapper>
	);
});
