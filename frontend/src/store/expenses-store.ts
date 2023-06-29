import {action, observable, makeObservable} from 'mobx';
import {type IExpense} from '../interfaces/expenses';
export class ExpensesStore {
	@observable
		list: IExpense[] = [];

	constructor() {
		makeObservable(this);
	}

	@action
		addExpense = (item: IExpense) => {
			this.list = [...this.list, item];
		};

	@action
		removeExpense = (item: IExpense) => {
			this.list.splice(this.list.indexOf(item), 1);
		};

	@action
		editExpense = (itemOld: IExpense, itemNew: IExpense) => {
			this.list.splice(this.list.indexOf(itemOld), 1, itemNew);
		};
}

