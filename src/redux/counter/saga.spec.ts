import { runSaga } from 'redux-saga';

import { Action } from '@reduxjs/toolkit';

import { watchDecrementAsync, watchIncrementAsync, watchIncrementByAmountAsync } from './saga';
import { counterActions } from './slice';

describe('counter saga', () => {
  it('should handle increment', async () => {
    const dispatchedActions: Action[] = [];
    const fakeStore = {
      getState: () => ({ value: 1 }),
      dispatch: (action: Action) => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, watchIncrementAsync).toPromise();
    expect(dispatchedActions).toContainEqual(counterActions.increment());
  });

  it('should handle decrement', async () => {
    const dispatchedActions: Action[] = [];
    const fakeStore = {
      getState: () => ({ value: 1 }),
      dispatch: (action: Action) => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, watchDecrementAsync).toPromise();
    expect(dispatchedActions).toContainEqual(counterActions.decrement());
  });

  it('should handle increment by amount in case of success', async () => {
    const dispatchedActions: Action[] = [];
    const fakeStore = {
      getState: () => ({ value: 1 }),
      dispatch: (action: Action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, watchIncrementByAmountAsync, {
      payload: 1,
      type: counterActions.incrementByAmountAsync.type,
    }).toPromise();
    expect(dispatchedActions).toEqual([
      counterActions.incrementByAmount(1),
      counterActions.incrementByAmountAsyncSuccess(),
    ]);
  });

  it('should handle increment by amount in case of failure', async () => {
    const dispatchedActions: Action[] = [];
    const fakeStore = {
      getState: () => ({ value: 1 }),
      dispatch: (action: Action) => dispatchedActions.push(action),
    };

    // we are passing payload as null to check the error handling
    await runSaga(fakeStore, watchIncrementByAmountAsync, {
      payload: null,
      type: counterActions.incrementByAmountAsync.type,
    }).toPromise();
    expect(dispatchedActions).toEqual([counterActions.incrementByAmountAsyncFailure()]);
  });
});
