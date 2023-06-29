import {Flex, Box} from '@chakra-ui/react';
import {SummaryExpenses, ExpensesList, AddExpensesSidebar} from '../templates';

export const Expenses = () => (
	<Flex w='100%' flexDirection={{base: 'column', md: 'row'}}>
		<ExpensesList/>
		<Box w={{base: 'calc(100% - 17px)', md: '400px'}}>
			<AddExpensesSidebar/>
			<SummaryExpenses/>
		</Box>
	</Flex>

);
