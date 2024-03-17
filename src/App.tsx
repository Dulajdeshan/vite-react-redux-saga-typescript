import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { counterActions } from './redux/counter/slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { Counter } from './components';

import './App.css';

function App() {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.counter);

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  const incrementAsync = (): void => {
    dispatch(counterActions.incrementAsync());
  };

  const decrementAsync = (): void => {
    dispatch(counterActions.decrementAsync());
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter
          onIncrement={increment}
          onDecrement={decrement}
          onIncrementAsync={incrementAsync}
          onDecrementAsync={decrementAsync}
          value={value}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
