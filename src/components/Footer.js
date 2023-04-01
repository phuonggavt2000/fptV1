import { Link } from "react-router-dom";
import logo from "../asset/fpt-logo.svg";
import imgRight from "../asset/copyRight/right.png";
import {
    footerIntroduce,
    fptClient,
    notClient,
    socialFooter,
} from "../ultis/static";

function Footer() {
    return (
        <footer className="bg-[#f8f9fa]">
            <div className="py-6 ">
                <div className="flex items-center px-8 border-b pb-5">
                    <img src={logo} alt="FPT-telecom" />
                    <div className="flex ml-auto gap-x-3">
                        {socialFooter.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="hover:opacity-60 text-xl"
                                target="_blank"
                            >
                                {item.icons}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-11 grid-cols-1 gap-x-8 px-8 mt-10 text-sm">
                    <div className="md:col-span-4  col-span-1 flex flex-col gap-y-3 ">
                        <span>
                            Giấy chứng nhận ĐKKD số 0101778163 do Sở Kế hoạch
                            Đầu tư Thành phố Hà Nội cấp ngày 28/07/2005
                        </span>
                        <span>
                            Giấp phép cung cấp dịch vụ Viễn thông số 147/GP-CVT
                            ngày 02/05/2013
                        </span>
                        <div className="flex flex-col">
                            <span>Công ty Cổ phần Viễn thông FPT</span>
                            <span>
                                Địa chỉ liên lạc: Tầng 9, Block A, tòa nhà FPT
                                Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy,
                                TP. Hà Nội
                            </span>
                            <span>
                                Thư điện tử:{" "}
                                <a
                                    href="mailto:hotrokhachhang@fpt.com.vn"
                                    className="hover:text-[#ff701d]"
                                >
                                    {" "}
                                    hotrokhachhang@fpt.com.vn
                                </a>
                            </span>
                            <span>
                                Số điện thoại liên hệ:{" "}
                                <a
                                    href="tel:0375956703"
                                    className="hover:text-[#ff701d]"
                                >
                                    0375.956.703
                                </a>
                            </span>
                            <span>Tên người đại diện: Nguyễn Văn Phương</span>
                            <Link
                                to="http://online.gov.vn/Home/WebDetails/35561?AspxAutoDetectCookieSupport=1"
                                target="_blank"
                                className="mt-2"
                            >
                                <img src={imgRight} alt="fpt telecom" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 md:block hidden">
                        <span className="text-primary font-bold text-lg">
                            Về FPT Telecom
                        </span>
                        <div className="flex flex-col mt-2 text-sm gap-y-1">
                            {footerIntroduce.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className="hover:text-primary"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2  md:block hidden">
                        <span className="text-primary font-bold text-lg">
                            Khách hàng FPT Telecom
                        </span>
                        <div className="flex flex-col mt-2 text-sm gap-y-1">
                            {fptClient.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className="hover:text-primary"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3 md:block hidden ">
                        <span className="text-primary font-bold text-lg">
                            Chưa là khách hàng của FPT Telecom
                        </span>
                        <div className="flex flex-col mt-2 text-sm gap-y-1">
                            {notClient.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className="hover:text-primary"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
