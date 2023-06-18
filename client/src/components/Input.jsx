const Input = ({
  type,
  name,
  id,
  value,
  classNameInput,
  classNameLabel,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor={name} className={classNameLabel}>
        {name}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        className={classNameInput}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
