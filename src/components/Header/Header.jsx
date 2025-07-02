import { Logo, OutlineButton } from "../index";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <div className="w-full border-b-1 border-gray-500 bg-transparent h-24">
      <nav className="flex items-center w-full justify-between container h-full">
        <div className="flex items-center h-full">
          <div>
            <Logo width="50px" />
          </div>

          <ul className="flex items-center ml-10 cursor-pointer h-full">
            {navItems?.map((item, index) => (
              <li className="flex h-full items-center ">
                <NavLink
                  to={item.url}
                  key={index}
                  className={({ isActive }) =>
                    [
                      "mx-5 py-[35px] text-base tracking-widest text-gray-100 opacity-70 font-extralight",
                      isActive &&
                        "border-b-2 border-gray-100 gradient-text font-medium",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <OutlineButton type="button" className="px-6 py-2">
            Get a Free Consultation
          </OutlineButton>
        </div>
      </nav>
    </div>
  );
};

export default Header;
