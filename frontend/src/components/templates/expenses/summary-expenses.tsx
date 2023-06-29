import {observer} from 'mobx-react-lite';
import {Text} from '@chakra-ui/react';

import {BoxWrapper, RecordWrapper} from '../../atoms';
import {useStore} from '../../../store';

export const SummaryExpenses = observer(() => {
	const {expenses: {list}, rates: {actualRateEuro}} = useStore();
	const sumAmountPLN = list.reduce((acc, cur) => acc + parseFloat(cur.amount), 0);
	const sumAmountEUR = actualRateEuro * sumAmountPLN;
	return (
		<BoxWrapper w='100%'>
			<Text color='gray.600' fontWeight='700' fontSize='18px'>
			Summary
			</Text>
			<RecordWrapper label='Sum PLN: '>
				{sumAmountPLN}
			</RecordWrapper>
			<RecordWrapper label='Sum EUR: '>
				{sumAmountEUR}
			</RecordWrapper>
		</BoxWrapper>
	);
});
