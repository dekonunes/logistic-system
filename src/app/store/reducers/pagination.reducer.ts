import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/pagination.action';
 
export const initialState = 0;
 
const _paginationReducer = createReducer(
  initialState,
  on(increment, (state) => state + 10),
  on(decrement, (state) => state - 10)
);
 
export function paginationReducer(state: any, action: any) {
  return _paginationReducer(state, action);
}