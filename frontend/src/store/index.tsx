import {createContext, useContext} from 'react';

import {ExpensesStore} from './expenses-store';
import {RateEuroStore} from './rate-euro-store';

export interface IStore {
	expenses: ExpensesStore;
	rates: RateEuroStore;
}
export const store: IStore = {
	expenses: new ExpensesStore(),
	rates: new RateEuroStore(),
};
export const StoreContext = createContext(store);

export const StoreProvider = ({children}: {children: JSX.Element}) => (
	<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
