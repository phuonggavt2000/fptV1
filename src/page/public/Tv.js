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
