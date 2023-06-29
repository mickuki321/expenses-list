import {Flex, Box} from '@chakra-ui/react';
import {SummaryExpenses, ExpensesList, AddExpensesSidebar} from '../templates';

export const Expenses = () => (
	<Flex w='100%'>
		<ExpensesList/>
		<Box width='400px'>
			<AddExpensesSidebar/>
			<SummaryExpenses/>
		</Box>
	</Flex>

);
