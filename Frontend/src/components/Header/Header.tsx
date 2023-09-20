import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";


const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 45) {
        // Si on scroll vers le bas de plus de 50px, on cache la div
        setVisible(false);
      } else {
        // Sinon, on réaffiche la div
        setVisible(true);
      }
      setLastScrollTop(scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const links: { to: string; label: string }[] = [
    { to: "/cafedescription", label: "Le Café"},
    { to: "/chef", label: "La Chef" },
    { to: "/adoption", label: "Adoption"},
    { to: "/reservation", label: "Réservation" },

  ];
  return (
    <div className={`z-50 border-b border-solid fixed bg-amber-50 w-full border-gray-400 ${visible ? 'visible' : 'hidden'}`}>
      <div className="flex justify-between">
        <Link to="/home" className="cursor-pointer">
          <img src={logo} alt="logo" className="w-16" />
        </Link>

        <div className="flex items-center justify-center mr-10">
          <nav>
            <ul className="header__nav flex space-x-4 ">
              {links.map((link, index) => (
                <div key={index}>
                  <li className="text-xl cursor-pointer">
                    <NavLink to={link.to}>{link.label}</NavLink>
                  </li>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
