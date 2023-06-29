import {observer} from 'mobx-react-lite';
import {Text} from '@chakra-ui/react';

import {BoxWrapper} from '../../atoms';
import {useStore} from '../../../store';

export const SummaryExpenses = observer(() => {
	const {expenses: {list}, rates: {actualRateEuro}} = useStore();
	const sumAmountPLN = list.reduce((acc, cur) => acc + parseFloat(cur.amount), 0);
	const sumAmountEUR = actualRateEuro * sumAmountPLN;
	return (
		<BoxWrapper w='100%'>
			<Text>
			Summary
			</Text>
			<Text>
				Sum PLN: {sumAmountPLN}
			</Text>
			<Text>
				Sum EUR: {sumAmountEUR}
			</Text>
		</BoxWrapper>
	);
});
