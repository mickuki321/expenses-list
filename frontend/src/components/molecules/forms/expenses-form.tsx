import {type UseFormReturn} from 'react-hook-form';

import {DefaultInput} from '../../atoms';
import {type INewExpense} from '../../../interfaces/expenses';
import {moneyInputFormOption, titleInputFormOption} from '../../../constans/inputs';

interface Props {
	form: UseFormReturn<INewExpense>;
}
export const ExpensesForm = ({form}: Props) => {
	const lengthTitle = form.watch('title')?.length || 0;
	const lengthAmount = form.watch('amount')?.length || 0;
	return (
		<>
			<DefaultInput<INewExpense> label={'Title'}name={'title'} form={form} formOption={titleInputFormOption(lengthTitle)}/>
			<DefaultInput<INewExpense> label={'Amount (in PLN)'}name={'amount'} form={form} formOption={moneyInputFormOption(lengthAmount)}/>
		</>
	);
};
