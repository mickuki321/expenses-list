import {action, observable, makeObservable} from 'mobx';
import {type IExpenses} from '../interfaces/expenses';
export class ExpensesStore {
	@observable
		list: IExpenses[] = [];

	constructor() {
		makeObservable(this);
	}

	@action
		addExpenses = (item: IExpenses) => {
			this.list = [...this.list, item];
		};

	@action
	removeData(item: IExpenses) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}

