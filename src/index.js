import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
//import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import AppRouter from './routers/AppRouter';

const store = configureStore();


store.dispatch(addExpense({description: 'gas bill'}));
store.dispatch(addExpense({description: 'water bill'}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('root'));


