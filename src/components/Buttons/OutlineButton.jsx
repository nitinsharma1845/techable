const OutlineButton = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`cursor-pointer border-1 border-transparent rounded OutlineButton-gradient ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
