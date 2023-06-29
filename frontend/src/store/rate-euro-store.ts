import {action, observable, makeObservable} from 'mobx';
export class RateEuroStore {
	@observable
		actualRateEuro = 4.382;

	constructor() {
		makeObservable(this);
	}

	@action
		setRateEuro = (newRate: number) => {
			this.actualRateEuro = newRate;
		};
}

