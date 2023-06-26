import {action, observable} from 'mobx';
export class ExpensesStore {
	@observable
		expenses: string[] = [];

	@action
	addData(item: string) {
		this.expenses.push(item);
	}

	@action
	removeData(item: string) {
		this.expenses.splice(this.expenses.indexOf(item), 1);
	}
}

