const BorderContainer = ({
  children,
  background,
  borderRadius = "2px",
  className = "",
  ...props
}) => {
  return (
    <div
      style={{ borderRadius: `${borderRadius}` }}
      className={` w-fit gradient p-[1px] flex justify-center items-center z-0 ${className}`}
      {...props}
    >
      <div
        style={{ borderRadius: `${borderRadius}` }}
        className={`${background} hover:bg-transparent duration-400`}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderContainer;
