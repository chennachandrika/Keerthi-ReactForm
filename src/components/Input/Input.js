import "../../styles.css"

function Input(props) {
  const {
    labelText,
    inputType,
    inputName,
    inputValue,
    inputHandler,
    errorText,
  } = props;
  return (
    <>
      <div className="input-field">
        <label>{labelText}</label>
        <input
          type={inputType}
          name={inputName}
          placeholder={labelText}
          value={inputValue}
          onChange={inputHandler}
        />
      </div>
      <p>{errorText}</p>
    </>
  );
}

export default Input;
