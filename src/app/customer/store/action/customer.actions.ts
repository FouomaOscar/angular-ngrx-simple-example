import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const loadCustomers = createAction(
  '[Customer] Load Customers'
);

export const addCustomer = createAction(
  '[Customer] Add Customer',
    (customer: Customer) => ({ customer })
);