const OutlineButton = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 button-gradient-text z-10 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
