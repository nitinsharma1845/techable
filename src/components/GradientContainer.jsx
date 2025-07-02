import gradient from "../assets/gradient-1.jpg";
const HeroSection = ({children , className=""}) => {
  return (
    <div
      style={{ backgroundImage: `url(${gradient})` }}
      className={`w-full bg-cover bg-center bg-no-repeat relative overflow-hidden ${className}`}
    >
      {children}
     
    </div>
  );
};

export default HeroSection;
