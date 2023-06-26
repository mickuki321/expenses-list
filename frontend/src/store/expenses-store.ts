import {action, observable} from 'mobx';
export class ExpensesStore {
	@observable
		list: string[] = [];

	@action
	addData(item: string) {
		this.list.push(item);
	}

	@action
	removeData(item: string) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}

