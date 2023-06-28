import {Flex} from '@chakra-ui/react';
import {ExpensesList} from '../../components/templates/expenses/expenses-list';
import {AddExpensesSidebar} from 'src/components/templates/expenses/add-expenses-sidebar';

export const Expenses = () => (
	<Flex>
		<ExpensesList/>
		<AddExpensesSidebar/>
	</Flex>

);
