interface TCounterProps {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onIncrementAsync?: () => void;
  onDecrementAsync?: () => void;
}
const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}: TCounterProps): JSX.Element => {
  return (
    <div>
      <button onClick={onIncrementAsync} className="button">
        Increment after 1 second
      </button>{' '}
      <button onClick={onDecrementAsync} className="button">
        Decrement after 1 second
      </button>{' '}
      <button onClick={onIncrement} className="button">
        + Increment
      </button>{' '}
      <button onClick={onDecrement} className="button">
        - Decrement
      </button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
