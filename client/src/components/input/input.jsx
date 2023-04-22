import "./input.css";

function Input() {
  return <input className={`input ${className || ""}`} {...React.InputHTMLAttributes} />;
}

export default Input;
