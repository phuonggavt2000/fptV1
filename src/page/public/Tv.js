import img from "../../asset/imgs/img";
import FptPlayPackage from "../../components/FptPlayPackage";
import {
    cardPlayboxs,
    featurePlayboxs,
    packageFptPlayv1,
    packageFptPlayv2,
} from "../../ultis/static";
import Slider from "react-slick";
import PrevBanner from "../../components/PrevBanner";
import NextBanner from "../../components/NextBanner";
import SliderPlaybox from "../../components/SliderPlaybox";
import icons from "../../ultis/icons";
import { Helmet } from "react-helmet";
function Tv() {
    const { BsPhone } = icons;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevBanner />,
        nextArrow: <NextBanner />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="relative  flex items-center justify-center flex-col pb-10 gap-y-8 bg-[#f3f3f3] ">
            <Helmet>
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=yes"
                />
                <title>
                    Bảng giá FPT Play dùng cho mạng FPT, Viettel, VNPT,
                    Mobiphone, Vinaphone
                </title>
                <meta
                    name="keywords"
                    CONTENT="Bảng giá FPT Play, FPT Play, truyền hình fpt play"
                />
                <meta
                    name="description"
                    CONTENT="Truyền hình FPT Play là dịch vụ truyền hình giúp khách hàng có thể xem truyền hình trực tuyến, video, VOD,... trên nhiều nền tảng thiết bị khác nhau như điện thoại, máy tính, Smart TV, thiết bị OTT, ... và có thể sử dụng Truyền hình FPT Play trên hạ tầng internet FPT hoặc không phải FPT."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="FPT Telecom HCM" />
                <link
                    rel="canonical"
                    href="https://fptshoptq.com/truyen-hinh-fpt"
                />
                <link
                    rel="alternate"
                    media="handheld"
                    href="https://fptshoptq.com/truyen-hinh-fpt"
                />
                <meta property="fb:app_id" content="1305829822896074" />
                <meta
                    property="og:image"
                    content="https://hcmfpt.vn/vnt_upload/service/03_2022/thumbs/500_fpt_play.png"
                />
            </Helmet>

            <div className="absolute top-0 right-0 left-0 ">
                <img
                    src={img.fptPlay}
                    alt="truyen hinh fpt"
                    className="absolute inset-0"
                />
            </div>
            <div className=" gap-y-4 font-semibold relative z-10 text-white flex flex-col justify-center items-center pt-14">
                <h1 className="text-4xl">FPT Play</h1>
                <p className="text-primary text-center">
                    Truyền hình trực tuyến không giới hạn trên mọi nền tảng
                </p>
            </div>
            <FptPlayPackage
                data={packageFptPlayv1}
                title="FPT Play - Gói thuê bao"
                colorText="text-primary"
            />
            <FptPlayPackage
                data={packageFptPlayv2}
                title="Góc giải trí"
                colorText="text-black"
            />
            <div className=" w-[102%] lg:px-20 px-6 ">
                <Slider {...settings}>
                    {cardPlayboxs.map((item, index) => (
                        <div className="px-2" key={index}>
                            <SliderPlaybox
                                key={index}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="flex flex-col mx-2 bg-white py-6 px-6 gap-y-7 rounded-xl mt-6">
                    <div className="flex items-center gap-x-2">
                        <BsPhone className="text-primary text-2xl flex-shrink-0 " />
                        <span className="font-bold">Các thiết bị hỗ trợ</span>
                    </div>
                    <div className="flex px-12 justify-between text-3xl gap-x-4">
                        {featurePlayboxs.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-y-3"
                            >
                                {item.icon}
                                <span className="text-sm">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <img
                    src={img.bannerFptPlay}
                    alt="fpt play"
                    className="px-2 mt-8 rounded-lg overflow-hidden"
                />
            </div>
        </div>
    );
}

export default Tv;
