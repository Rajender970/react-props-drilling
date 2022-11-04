const CountIncrement = (props) => {
  return (
    <div>
      <button onClick={() => props.change(1)}>Increment</button>
    </div>
  );
};
export default CountIncrement;
