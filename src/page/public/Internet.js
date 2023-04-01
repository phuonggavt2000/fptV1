import bannerService from "../../asset/banner/bannerPagepg.jpg";
import { Link } from "react-router-dom";
import { features, internetProducts, registerNow } from "../../ultis/static";
import imgInternet from "../../asset/imgs/quang-ca-nhan.png";
import icons from "../../ultis/icons";
import Feature from "../../components/Feature";
import img from "../../asset/imgs/img";
import Product from "../../components/Product";

function Internet({
    product = internetProducts,
    imgProduct = imgInternet,
    title = "Cáp quang FPT",
}) {
    const { IoDocumentText, AiFillFlag, CgEnter } = icons;

    return (
        <div>
            <img src={bannerService} alt="internet-fpt" />

            <Product img={imgProduct} products={product} title={title} />
            <div className="w-full bg-[#ebebeb]">
                <div className="max-w-[1200px] mx-auto mt-6 py-10 px-6 lg:px-0">
                    <h2 className="pb-2 font-semibold leading-[25px] inline-block text-primary text-2xl border-b-2 border-primary align-text-bottom">
                        <IoDocumentText className="inline-block text-3xl" />
                        <span className="align-text-bottom ml-2 uppercase">
                            {" "}
                            Giới thiệu
                        </span>
                    </h2>
                    <p className="mt-4">
                        Với sự bùng nổ mạnh mẽ về nội dung trên nền tảng trực
                        tuyến, Internet giờ đây không chỉ đơn thuần sử dụng như
                        công cụ đọc tin tức, kết nối mọi người, mà còn là nền
                        tảng để trao đổi dữ liệu, đăng tải thông tin, làm việc
                        trực tuyến,… Đứng trước nhu cầu sử dụng ngày một tinh tế
                        hơn từ người dùng, FPT Telecom cung cấp 05 gói cước
                        Internet cáp quang với tốc độ truy cập từ 150Mbps trở
                        lên, đáp ứng tiêu chí nhanh về cả tốc độ đường truyền,
                        sự nhanh nhạy bắt kịp xu thế công nghệ cũng như phương
                        châm phục vụ khách hàng 24/7.
                    </p>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-6 py-10 px-6 lg:px-0">
                <span className="pb-2 font-semibold leading-[25px] inline-block text-primary text-2xl border-b-2 border-primary">
                    <AiFillFlag className="inline-block text-3xl" />
                    <span className=" ml-2 align-text-bottom uppercase">
                        Tính năng
                    </span>
                </span>
                <div className="px-14 flex flex-col mt-4 text-base">
                    <span>
                        Những ưu điểm của dịch vụ FTTH do FPT Telecom mang lại
                        bao gồm:
                    </span>
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-y-6 gap-x-8">
                        {features.map((item, index) => (
                            <Feature
                                key={index}
                                icon={item.icon}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
                <span className="pb-2 font-semibold leading-[25px] mt-12 inline-block text-primary text-2xl border-b-2 border-primary">
                    <CgEnter className="inline-block text-3xl " />
                    <span className=" ml-2 uppercase align-text-bottom">
                        Đăng ký ngay
                    </span>
                </span>
                <div className="grid grid-cols-3 mt-10 gap-x-2">
                    {registerNow.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className="flex justify-center items-center flex-col group cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt="fpt telecom"
                                className="group-hover:scale-110 transition-all"
                            />
                            <span
                                className={`uppercase font-bold text-base ${item.color} mt-4 text-center`}
                            >
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
                <img
                    src={img.introduceBanner}
                    alt="internet fpt"
                    className="mt-12"
                />
            </div>
        </div>
    );
}

export default Internet;
