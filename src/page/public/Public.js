import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRef } from "react";
import icons from "../../ultis/icons";

function Public() {
    const { BsMessenger, BsFillTelephoneFill } = icons;
    const ref = useRef();
    const handleRedirect = () => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "end",
        });
    };
    return (
        <div className="h-screen overlay relative z-[1]  ">
            <Header onClick={handleRedirect} />
            <div
                className="lg:pt-[70px] pt-[50px] w-screen overflow-hidden"
                ref={ref}
            >
                <Outlet />
            </div>
            <Footer />
            <div className="fixed bottom-[4%] right-[1%] flex flex-col gap-y-4 text-white z-50">
                <Link
                    to="https://www.messenger.com/t/108503272047244"
                    className="bg-[#0057ff] p-3 rounded-full text-3xl "
                >
                    <BsMessenger />
                </Link>
                <Link
                    to="tel:0375956703"
                    className="bg-[#00d574] p-3 rounded-full text-3xl"
                >
                    <BsFillTelephoneFill />
                </Link>
            </div>
        </div>
    );
}

export default Public;
