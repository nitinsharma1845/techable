import { BorderWrapper } from "../index";
const Input = ({ type = "text", label, className = "", ...props }) => {
  return (
    <div>
      <div>
        {label && <label className="gradient-text my-3">{label}</label>}
      </div>
     
        <input type={type} className={`${className}`} {...props} />
    </div>
  );
};

export default Input;
