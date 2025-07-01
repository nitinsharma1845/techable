const FillButton = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={` text-black gradient-backgroung px-6 py-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default FillButton;
