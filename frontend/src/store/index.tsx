import {createContext, useContext} from 'react';
import {ExpensesStore} from './expenses-store';

export interface StoreI {
	expenses: ExpensesStore;
}
export const store: StoreI = {
	expenses: new ExpensesStore(),
};
export const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
