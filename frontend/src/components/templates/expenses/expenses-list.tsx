import {observer} from 'mobx-react-lite';

import {type IExpenses} from '../../../interfaces/expenses';
import {BoxWrapper} from '../../../components/atoms/wrappers/box-wrapper';
import {useStore} from '../../../store';
import {GenericTable} from '../../../components/organisms/generic-table';

export const ExpensesList = observer(() => {
	const {expenses: {list}} = useStore();
	const labelsHeader = ['Title', 'Amount(PLN)', 'Amount(EUR)', 'Options'];

	return (
		<BoxWrapper>
			xs
			<GenericTable<IExpenses> dataList={list} labelsHeader={labelsHeader}/>
		</BoxWrapper>
	);
});
