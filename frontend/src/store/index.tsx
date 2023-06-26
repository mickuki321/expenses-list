import {createContext, useContext} from 'react';
import {ExpensesStore} from './expenses-store';

export interface IStore {
	expenses: ExpensesStore;
}
export const store: IStore = {
	expenses: new ExpensesStore(),
};
export const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
