export const InputTodo = (props) => {
  const style = {
    backgroundColor: '#c6e5d9',
    width: '400px',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  };

  const { todoText, onChange, onClick ,disabled} = props;
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>追加</button>
    </div>
  );
};
