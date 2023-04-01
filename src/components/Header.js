import { Link, NavLink } from "react-router-dom";
import { headers } from "../ultis/static";
import logo from "../asset/fpt-logo.svg";
import icons from "../ultis/icons";
import { useState } from "react";
function Header({ onClick }) {
    const { RiMapPinLine, AiOutlineMenu } = icons;
    const [hiddenMenu, setHiddenMenu] = useState(true);
    console.log("hiddenMenu:", hiddenMenu);
    return (
        <header className="fixed top-0 left-0 right-0 lg:h-[70px] h-[50px] bg-[rgba(255,255,255,0.8)] z-50 shadow-sm	">
            <div className="flex h-full   max-w-[1220px] ml-auto font-semibold mr-auto  items-center lg:justify-start justify-between px-4 lg:px-0">
                <button
                    className="text-2xl lg:hidden flex"
                    onClick={() => setHiddenMenu(!hiddenMenu)}
                >
                    <AiOutlineMenu />
                </button>
                <Link className="h-full w-[106px]" to="/" onClick={onClick}>
                    <img
                        src={logo}
                        alt="fpt-telecom"
                        className="h-full w-full"
                    />
                </Link>
                <div className="hidden items-center ml-auto gap-x-4 lg:flex">
                    {headers.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                isActive ? "active-nav" : "inactive-nav"
                            }
                            onClick={onClick}
                        >
                            {" "}
                            {item.title}
                        </NavLink>
                    ))}
                </div>
                <button className="text-2xl  items-center gap-2  xl:flex lg:hidden flex">
                    <RiMapPinLine />
                    <span className="text-sm">Hồ Chí Minh</span>
                </button>
            </div>
            <div
                className={`fixed inset-0  transition-all duration-500 ${
                    hiddenMenu
                        ? "-translate-x-full opacity-0 "
                        : "translate-x-0 opacity-100"
                }  lg:hidden`}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setHiddenMenu(!hiddenMenu);
                    }
                }}
            >
                <div
                    className={`w-[70%] absolute bg-white top-0 shadow-lg  left-0 bottom-0 flex flex-col py-4 transition-all duration-1000  `}
                >
                    <div className="flex  items-center px-4">
                        <AiOutlineMenu
                            className="mr-auto cursor-pointer text-2xl"
                            onClick={() => setHiddenMenu(!hiddenMenu)}
                        />
                        <Link
                            to="/"
                            className="flex justify-start mr-auto"
                            onClick={() => setHiddenMenu(!hiddenMenu)}
                        >
                            <img
                                src={logo}
                                alt="lap mang fpt "
                                className="mr-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col mt-4 px-2">
                        {headers.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "active-nav-mobile"
                                        : "inactive-nav-mobile"
                                }
                                onClick={() => {
                                    setHiddenMenu(!hiddenMenu);
                                }}
                            >
                                {item.icon}

                                <span>{item.title}</span>
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <Link
                            to="tel:0375956703"
                            className="bg-primary px-6 py-2 rounded-lg font-semibold text-white"
                        >
                            Hotline: 0375 956 703
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
