import bg from "../assets/bg-3.png";

const AfterHeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-10 z-[-1]"
      />

      <div className="container absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 ">
        <div className=" w-[80%] m-auto relative ">

        <div className="absolute top-0 left-0 text-9xl italic gradient-text ">
          &quot;
        </div>
        <div className="absolute right-0 -bottom-23 italic text-9xl gradient-text">
          &quot;
        </div>

          <p className="text-lg p-20 font-extralight leading-8 text-justify text-gray-500 tracking-wide">
            <span className="gradient-text font-medium">
              Techable Australia is a forward-thinking digital solutions
              provider dedicated to empowering businesses and {" "}
            </span>
            <span>
               healthcare providers with innovative technology and marketing
              strategies. Based in Australia and team we specialize in
              delivering end-to-end digital marketing services, custom web and
              app development, and cutting-edge IT solutions, including API
              integrations. With a strong focus on the healthcare sector, we
              partner with VisiCase, a leading all-in-one CMS platform, to offer
              tailored tech consultations for NDIS, aged care, child and family
              care, and mental health providers. At Teachable Solutions, we
              combine technical expertise with a client-centric approach to help
              our clients achieve their goals and thrive in the digital age.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterHeroSection; 