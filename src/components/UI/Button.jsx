import buttonStyles from './Button.module.css';

function Button(props) {
  const { children, type, title, onClick, disabled } = props;

  return (
    <button
      className={buttonStyles.Button}
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
