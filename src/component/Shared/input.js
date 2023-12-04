// Parmeterized Input 
const Input = ({ type, value, onChange, name, id, autoComplete, width = 'auto', height = '3rem', borderRadius = '5px', borderColor = 'gray' }) => {
    const inputStyle = {
      width: width,
      height: height,
      borderRadius: borderRadius,
      border: `1px solid ${borderColor}`,
      fontSize: '15px',
      padding: '8px',
    };
    return (
      <input
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        style={inputStyle}
      />
    );
  };
  
export default Input;