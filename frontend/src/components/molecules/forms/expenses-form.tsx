import {type UseFormReturn} from 'react-hook-form';
import {DefaultInput} from '../../../components/atoms/inputs/default-input';
import {type IExpenses} from '../../../interfaces/expenses';

interface Props {
	form: UseFormReturn<IExpenses>;
}
export const ExpensesForm = ({form}: Props) => (
	<>
		<DefaultInput <IExpenses> name={'title'} form={form}/>
		<DefaultInput <IExpenses> name={'amount'} form={form}/>
	</>
);
