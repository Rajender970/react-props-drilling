const CountDecrement = (props) => {
  return (
    <div>
      <button onClick={() => props.change(0)}>Decrement</button>
    </div>
  );
};
export default CountDecrement;
