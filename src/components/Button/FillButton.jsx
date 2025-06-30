const FillButton = ({ children, type = "text", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 cursor-pointer gradient ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default FillButton;
