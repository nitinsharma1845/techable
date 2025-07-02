import logo from '../../assets/logo-1.png'
const SectionContent = () => {
  return (
    <>
      <div className="container py-20 ">
        <div className=" w-[60%]">
          <h1 className="font-aldrich text-5xl gradient-text mb-8 leading-16">
            Empowering Your Business with Digital Solutions
          </h1>
          <p className="text-sm font-extralight tracking-widest opacity-70">
            Leading digital agency with solid design and development expertise
          </p>
        </div>
        {/* Circulat text Here */}
      </div>

      <div className="w-1/2 absolute bottom-[-27%] right-[-12%] opacity-25">
        <img src={logo} />
      </div>
    </>
  );
};

export default SectionContent;
