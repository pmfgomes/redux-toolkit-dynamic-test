export default function Counter(props) {
  const { value, onIncrement, onDecrement } = props;

  return (
    <div style={{ padding: 16 }}>
      <button onClick={onIncrement}>+</button>
      <span style={{ marginLeft: 8, marginRight: 8, fontWeight: "bold", fontSize: 32 }}>
        {value}
      </span>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}


