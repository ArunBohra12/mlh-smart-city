import "./button.css";

const Button = (props) => {
  const { children, className, ...otherButtonAttributes } = props;

  return (
    <button className={`btn ${className || ""}`} {...otherButtonAttributes}>
      {children}
    </button>
  );
};

export default Button;
